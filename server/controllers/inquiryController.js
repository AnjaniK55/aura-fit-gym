const mongoose = require('mongoose');
const Inquiry = require('../models/Inquiry');
const mockDb = require('../config/mockDb');

// @desc    Submit a new contact inquiry
// @route   POST /api/inquiries
// @access  Public
exports.createInquiry = async (req, res) => {
  const { name, email, phone, tier, message } = req.body;

  try {
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'Please provide name, email, and message' });
    }

    // Type validation
    if (typeof name !== 'string' || typeof email !== 'string' || typeof message !== 'string') {
      return res.status(400).json({ success: false, message: 'Invalid input: name, email, and message must be strings' });
    }

    if (phone && typeof phone !== 'string') {
      return res.status(400).json({ success: false, message: 'Invalid input: phone must be a string' });
    }

    if (tier && typeof tier !== 'string') {
      return res.status(400).json({ success: false, message: 'Invalid input: tier must be a string' });
    }

    // Validate tier values
    const allowedTiers = ['Club Access', 'Elite Access', 'VIP Private'];
    if (tier && !allowedTiers.includes(tier)) {
      return res.status(400).json({ success: false, message: 'Invalid subscription tier selected' });
    }

    // --- FALLBACK MOCK DB CHECK (IF MONGODB OFFLINE) ---
    if (mongoose.connection.readyState !== 1) {
      console.warn('MongoDB Offline: Using Local File Database for saving contact inquiry.');
      const inquiry = await mockDb.createInquiry({
        name,
        email,
        phone: phone || '',
        tier: tier || 'Elite Access',
        message
      });

      return res.status(201).json({
        success: true,
        message: 'Inquiry submitted successfully! A membership advisor will connect with you shortly.',
        data: inquiry
      });
    }

    // --- STANDARD MONGOOSE DB PATH ---
    const inquiry = await Inquiry.create({
      name,
      email,
      phone: phone || '',
      tier: tier || 'Elite Access',
      message
    });

    res.status(201).json({
      success: true,
      message: 'Inquiry submitted successfully! A membership advisor will connect with you shortly.',
      data: inquiry
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(val => val.message);
      return res.status(400).json({ success: false, message: messages.join(', ') });
    }
    
    if (process.env.NODE_ENV === 'development') {
      console.error('Inquiry Save Error:', error);
    }
    
    res.status(500).json({ success: false, message: 'Server error, please try again later' });
  }
};
