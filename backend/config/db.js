// backend/config/db.js

const mongoose = require('mongoose');
require('dotenv').config(); // Loads environment variables from .env

/**
 * Connects to the MongoDB database using the connection string provided in the .env file.
 */
const connectDB = async () => {
  try {
    // Connect to MongoDB
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // Uncomment the line below if you're using MongoDB versions prior to v6
      // useFindAndModify: false,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
