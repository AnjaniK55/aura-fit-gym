const mongoose = require('mongoose');
const GuestPass = require('../models/GuestPass');
const mockDb = require('../config/mockDb');

// Helper to generate a unique Pass ID
const generatePassId = () => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let randomStr = '';
  for (let i = 0; i < 6; i++) {
    randomStr += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  const year = new Date().getFullYear();
  return `AFP-${year}-${randomStr}`;
};

// @desc    Request a new one day guest pass
// @route   POST /api/guest-passes
// @access  Public
exports.createGuestPass = async (req, res) => {
  const { name, email, phone, age, fitnessGoal, visitDate } = req.body;

  try {
    if (!name || !email || !phone || !age || !fitnessGoal || !visitDate) {
      return res.status(400).json({ success: false, message: 'Please provide all required fields' });
    }

    // Type and validation checks
    if (
      typeof name !== 'string' ||
      typeof email !== 'string' ||
      typeof phone !== 'string' ||
      typeof fitnessGoal !== 'string' ||
      typeof visitDate !== 'string'
    ) {
      return res.status(400).json({ success: false, message: 'Invalid input data formats' });
    }

    const parsedAge = parseInt(age, 10);
    if (isNaN(parsedAge) || parsedAge < 14 || parsedAge > 100) {
      return res.status(400).json({ success: false, message: 'Age must be a valid number between 14 and 100' });
    }

    // Email regex validation
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ success: false, message: 'Please provide a valid email address' });
    }

    // Generate unique pass ID
    const passId = generatePassId();

    // --- FALLBACK MOCK DB CHECK (IF MONGODB OFFLINE) ---
    if (mongoose.connection.readyState !== 1) {
      console.warn('MongoDB Offline: Using Local File Database for saving guest pass.');
      const pass = await mockDb.createGuestPass({
        name,
        email,
        phone,
        age: parsedAge,
        fitnessGoal,
        visitDate,
        passId
      });

      return res.status(201).json({
        success: true,
        message: 'Guest pass requested successfully!',
        data: pass
      });
    }

    // --- STANDARD MONGOOSE DB PATH ---
    const pass = await GuestPass.create({
      name,
      email,
      phone,
      age: parsedAge,
      fitnessGoal,
      visitDate,
      passId
    });

    res.status(201).json({
      success: true,
      message: 'Guest pass requested successfully!',
      data: pass
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(val => val.message);
      return res.status(400).json({ success: false, message: messages.join(', ') });
    }
    
    if (process.env.NODE_ENV === 'development') {
      console.error('Guest Pass Save Error:', error);
    }
    
    res.status(500).json({ success: false, message: 'Server error, please try again later' });
  }
};
