const express = require('express');
const router = express.Router();
const rateLimit = require('express-rate-limit');
const { createGuestPass } = require('../controllers/guestPassController');

// Rate limiting: max 3 guest pass requests per day per IP to prevent system abuse
const guestPassLimiter = rateLimit({
  windowMs: 24 * 60 * 60 * 1000, // 24 hours
  max: 3,
  message: {
    success: false,
    message: 'Too many guest pass requests from this network. Limit is 3 per day.'
  },
  standardHeaders: true,
  legacyHeaders: false
});

router.post('/', guestPassLimiter, createGuestPass);

module.exports = router;
