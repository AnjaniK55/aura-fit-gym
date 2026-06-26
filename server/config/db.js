const mongoose = require('mongoose');

const connectDB = async (retries = 5, delay = 5000) => {
  for (let i = 1; i <= retries; i++) {
    try {
      const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/gymdb');
      console.log(`MongoDB Connected: ${conn.connection.host}`);

      // Runtime disconnection alerts
      mongoose.connection.on('disconnected', () => {
        console.error('SEVERE: MongoDB disconnected at runtime. Some features may be unavailable.');
      });

      mongoose.connection.on('error', (err) => {
        console.error(`SEVERE: MongoDB runtime error: ${err.message}`);
      });

      return;
    } catch (error) {
      console.error(`MongoDB Connection Attempt ${i} Failed: ${error.message}`);
      if (i === retries) {
        console.error('SEVERE: Max database connection retries reached. The server will continue running but database features will be unavailable.');
        return;
      }
      console.log(`Retrying in ${delay / 1000}s...`);
      await new Promise((resolve) => setTimeout(resolve, delay));
      delay *= 2;
    }
  }
};

module.exports = connectDB;
