const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const dotenv = require('dotenv');
const morgan = require('morgan');
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const inquiryRoutes = require('./routes/inquiryRoutes');
const guestPassRoutes = require('./routes/guestPassRoutes');

// Load env vars
dotenv.config();

// Enforce JWT secret check at boot
if (!process.env.JWT_SECRET) {
  console.error('FATAL ERROR: JWT_SECRET environment variable is not defined.');
  process.exit(1);
}

const app = express();

// Request Logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
} else {
  app.use(morgan('combined'));
}

// Security Middlewares
app.use(helmet());

// CORS Configuration
const allowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(',')
  : ['http://localhost:5173', 'http://localhost:3000'];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true
}));

app.use(express.json({ limit: '10kb' }));

// Rate Limiting for Auth Endpoints
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: {
    success: false,
    message: 'Too many authentication attempts. Please try again after 15 minutes.'
  },
  standardHeaders: true,
  legacyHeaders: false
});

// Mount Routes
app.use('/api/auth', authLimiter, authRoutes);
app.use('/api/inquiries', inquiryRoutes);
app.use('/api/guest-passes', guestPassRoutes);

// API Base healthcheck
app.get('/api', (req, res) => {
  res.status(200).json({ success: true, message: 'Welcome to Aura Fit API' });
});

// Detailed API Health Check
app.get('/api/health', (req, res) => {
  const dbState = mongoose.connection.readyState;
  // 0 = disconnected, 1 = connected, 2 = connecting, 3 = disconnecting
  const dbStatusMap = {
    0: 'disconnected',
    1: 'connected',
    2: 'connecting',
    3: 'disconnecting'
  };

  const status = dbState === 1 ? 'UP' : 'DEGRADED';

  res.status(dbState === 1 ? 200 : 500).json({
    status,
    database: dbStatusMap[dbState] || 'unknown',
    uptime: process.uptime(),
    memory: process.memoryUsage(),
    timestamp: new Date().toISOString()
  });
});

// 404 handler for undefined routes
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  if (process.env.NODE_ENV === 'development') {
    console.error(err.stack);
  } else {
    console.error(err.message);
  }
  res.status(500).json({ success: false, message: 'Server Error' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

connectDB();
