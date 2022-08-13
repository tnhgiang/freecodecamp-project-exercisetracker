const mongoose = require('mongoose');
require('dotenv').config();

// Connect to database
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('database connected');
  })
  .catch((error) => {
    console.log(`Database connection error: ${error}`);
  });
