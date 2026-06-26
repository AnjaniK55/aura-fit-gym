const mongoose = require('mongoose');

const InquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Please add an email'],
    lowercase: true,
    trim: true,
    match: [
      /^\S+@\S+\.\S+$/,
      'Please add a valid email'
    ]
  },
  phone: {
    type: String,
    trim: true
  },
  tier: {
    type: String,
    enum: ['Club Access', 'Elite Access', 'VIP Private'],
    default: 'Elite Access'
  },
  message: {
    type: String,
    required: [true, 'Please add a message'],
    trim: true,
    maxlength: [1000, 'Message cannot exceed 1000 characters']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Inquiry', InquirySchema);
