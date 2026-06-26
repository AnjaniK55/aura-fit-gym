const mongoose = require('mongoose');

const GuestPassSchema = new mongoose.Schema({
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
    required: [true, 'Please add a phone number'],
    trim: true
  },
  age: {
    type: Number,
    required: [true, 'Please add an age'],
    min: [14, 'Age must be at least 14 years old'],
    max: [100, 'Age cannot exceed 100 years old']
  },
  fitnessGoal: {
    type: String,
    required: [true, 'Please add a fitness goal'],
    trim: true
  },
  visitDate: {
    type: Date,
    required: [true, 'Please add a preferred visit date']
  },
  passId: {
    type: String,
    required: true,
    unique: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('GuestPass', GuestPassSchema);
