const mongoose = require('mongoose');

// User schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model('Users', userSchema);
