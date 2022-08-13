const userModel = require('../models/users.model');
const exerciseModel = require('../models/exercises.model');

const createExercise = (req, res) => {
  const { _id } = req.params;
  const { description, duration, date } = req.body;

  userModel
    .findById(_id)
    .then((user) => {
      if (!user) {
        throw new Error(`Can not found the user of Id: ${_id}`);
      }

      exerciseModel
        .create({
          userId: user._id,
          description: description,
          duration: duration,
          date: date ? new Date(date) : new Date(),
        })
        .then((exercise) => {
          res.send({
            _id: user._id,
            username: user.username,
            date: exercise.date.toDateString(),
            duration: exercise.duration,
            description: exercise.description,
          });
        })
        .catch((error) => {
          handleError(error, rs);
        });
    })
    .catch((error) => {
      handleError(error, res);
    });
};

const getExercises = (req, res) => {
  const { _id } = req.params;
  let { from, to, limit } = req.query;

  from = from ? new Date(from) : new Date(0);
  to = to ? new Date(to) : new Date();
  limit = limit ? limit : 0;

  userModel
    .findById(_id)
    .then((user) => {
      if (!user) {
        throw new Error(`Can not found the user of Id: ${_id}`);
      }

      exerciseModel
        .find({ userId: user._id })
        .where('date')
        .gte(from)
        .lte(to)
        .limit(limit)
        .exec()
        .then((exercises) => {
          exercises = exercises.map((exercise) => {
            return {
              description: exercise.description,
              duration: exercise.duration,
              date: exercise.date.toDateString(),
            };
          });

          res.json({
            username: user.username,
            count: exercises.length,
            _id: user._id,
            log: exercises,
          });
        });
    })
    .catch((error) => {
      handleError(error, res);
    });
};

module.exports = { createExercise, getExercises };
