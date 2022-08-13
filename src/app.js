const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
require('dotenv').config();

// Connect to database
require('./exercisetracker/models/index');
const userRoute = require('./exercisetracker/routes/users.route');

// Middleware
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/static', express.static(__dirname + '/public'));

// Homepage
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

// Routers
app.use('/api/', userRoute);

module.exports = app;
