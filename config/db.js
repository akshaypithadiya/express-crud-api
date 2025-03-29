const mongoose = require('mongoose');
require('dotenv').config({ path: './env' });

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.oqhyykg.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
    );
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('Database connection failed:', error);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
