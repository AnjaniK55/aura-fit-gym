const mongoose = require('mongoose');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const mockDb = require('../config/mockDb');

// Helper to generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '7d'
  });
};

// @desc    Register new user
// @route   POST /api/auth/register
// @access  Public
exports.registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    if (!username || !email || !password) {
      return res.status(400).json({ success: false, message: 'Please provide all fields' });
    }

    // Type validation
    if (typeof username !== 'string' || typeof email !== 'string' || typeof password !== 'string') {
      return res.status(400).json({ success: false, message: 'Invalid input types: username, email, and password must be strings' });
    }

    // --- FALLBACK MOCK DB CHECK (IF MONGODB OFFLINE) ---
    if (mongoose.connection.readyState !== 1) {
      console.warn('MongoDB Offline: Using Local File Database for user registration.');
      const userExists = await mockDb.findUserByEmail(email);

      if (userExists) {
        return res.status(400).json({ success: false, message: 'User already exists' });
      }

      if (password.length < 8) {
        return res.status(400).json({ success: false, message: 'Password must be at least 8 characters' });
      }

      const user = await mockDb.createUser({ username, email, password });
      return res.status(201).json({
        success: true,
        data: {
          _id: user._id,
          username: user.username,
          email: user.email,
          role: user.role,
          token: generateToken(user._id)
        }
      });
    }

    // --- STANDARD MONGOOSE DB PATH ---
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ success: false, message: 'User already exists' });
    }

    // Create user
    const user = await User.create({
      username,
      email,
      password
    });

    if (user) {
      res.status(201).json({
        success: true,
        data: {
          _id: user._id,
          username: user.username,
          email: user.email,
          role: user.role,
          token: generateToken(user._id)
        }
      });
    } else {
      res.status(400).json({ success: false, message: 'Invalid user data' });
    }
  } catch (error) {
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(val => val.message);
      return res.status(400).json({ success: false, message: messages.join(', ') });
    }
    
    if (process.env.NODE_ENV === 'development') {
      console.error('Registration Error:', error);
    }
    
    res.status(500).json({ success: false, message: 'Server error, please try again later' });
  }
};

// @desc    Authenticate a user & get token
// @route   POST /api/auth/login
// @access  Public
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Please provide email and password' });
    }

    // Type validation
    if (typeof email !== 'string' || typeof password !== 'string') {
      return res.status(400).json({ success: false, message: 'Invalid input types: email and password must be strings' });
    }

    // --- FALLBACK MOCK DB CHECK (IF MONGODB OFFLINE) ---
    if (mongoose.connection.readyState !== 1) {
      console.warn('MongoDB Offline: Using Local File Database for user login.');
      const user = await mockDb.findUserByEmail(email);

      if (!user) {
        return res.status(401).json({ success: false, message: 'Invalid credentials' });
      }

      const isMatch = await mockDb.matchPassword(password, user.password);

      if (!isMatch) {
        return res.status(401).json({ success: false, message: 'Invalid credentials' });
      }

      return res.status(200).json({
        success: true,
        data: {
          _id: user._id,
          username: user.username,
          email: user.email,
          role: user.role,
          token: generateToken(user._id)
        }
      });
    }

    // --- STANDARD MONGOOSE DB PATH ---
    const user = await User.findOne({ email }).select('+password');

    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    // Match password
    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    res.status(200).json({
      success: true,
      data: {
        _id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
        token: generateToken(user._id)
      }
    });
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Login Error:', error);
    }
    res.status(500).json({ success: false, message: 'Server error, please try again later' });
  }
};

// @desc    Get current user profile
// @route   GET /api/auth/me
// @access  Private
exports.getMe = async (req, res) => {
  try {
    // --- FALLBACK MOCK DB CHECK (IF MONGODB OFFLINE) ---
    if (mongoose.connection.readyState !== 1) {
      const user = await mockDb.findUserById(req.user.id);
      if (!user) {
        return res.status(404).json({ success: false, message: 'User not found' });
      }
      return res.status(200).json({
        success: true,
        data: user
      });
    }

    // --- STANDARD MONGOOSE DB PATH ---
    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    res.status(200).json({
      success: true,
      data: user
    });
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Get Profile Error:', error);
    }
    res.status(500).json({ success: false, message: 'Server error, please try again later' });
  }
};
