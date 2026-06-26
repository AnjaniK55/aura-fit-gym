const express = require('express');
const router = express.Router();
const rateLimit = require('express-rate-limit');
const { createInquiry } = require('../controllers/inquiryController');

// Rate limiting: max 5 inquiries per hour per IP address to block spambots
const inquiryLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5,
  message: {
    success: false,
    message: 'Too many contact inquiries from this network. Please try again after an hour.'
  },
  standardHeaders: true,
  legacyHeaders: false
});

router.post('/', inquiryLimiter, createInquiry);

module.exports = router;
