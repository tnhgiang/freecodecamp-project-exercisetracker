const express = require('express');
const router = express.Router();
const { createUser, getAllUsers } = require('../controllers/users.controller');

// Endpoint for creating a new user
router.post('/users', createUser);
// Endpoint for fetching all users
router.get('/users', getAllUsers);

module.exports = router;
