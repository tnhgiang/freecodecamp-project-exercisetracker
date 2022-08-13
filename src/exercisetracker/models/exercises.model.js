const mongoose = require('mongoose');

// Exercise schema
const exerciseSchema = new mongoose.Schema({
  userId: {
    type: mongoose.ObjectId,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  date: Date,
});

module.exports = mongoose.model('Exercises', exerciseSchema);
