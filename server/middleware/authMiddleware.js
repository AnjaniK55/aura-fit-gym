const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = require('../models/User');
const mockDb = require('../config/mockDb');

const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // Get token from header
      token = req.headers.authorization.split(' ')[1];

      if (!token) {
        return res.status(401).json({ success: false, message: 'Not authorized, no token provided' });
      }

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Get user from token and attach to req.user (excluding password)
      if (mongoose.connection.readyState !== 1) {
        req.user = await mockDb.findUserById(decoded.id);
      } else {
        req.user = await User.findById(decoded.id);
      }

      if (!req.user) {
        return res.status(401).json({ success: false, message: 'Not authorized, user not found' });
      }

      return next();
    } catch (error) {
      console.error('JWT Verification Error:', error.message);
      return res.status(401).json({ success: false, message: 'Not authorized, token failed' });
    }
  }

  if (!token) {
    return res.status(401).json({ success: false, message: 'Not authorized, no token provided' });
  }
};

module.exports = { protect };
