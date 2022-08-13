const express = require('express');
const router = express.Router();
const {
  createExercise,
  getExercises,
} = require('../controllers/exercises.controller');

// Endpoint for creating a new exercise record
router.post('/users/:_id/exercises', createExercise);
// Endpoint for fetching exercise records
router.get('/users/:_id/logs', getExercises);

module.exports = router;
