const express = require('express');
const app = express();
const cors = require('cors');
const logger = require('morgan');
require('dotenv').config();

app.use(cors());
app.use(logger('dev'));
app.use('/static', express.static(__dirname + '/public'));

// Homepage
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

module.exports = app;
