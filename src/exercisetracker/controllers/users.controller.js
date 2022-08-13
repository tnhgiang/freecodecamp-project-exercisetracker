const userModel = require('../models/users.model');
const handleError = require('../utils/index');

const createUser = (req, res) => {
  const { username } = req.body;
  const newUser = { username: username };
  userModel
    .findOne(newUser)
    .then((user) => {
      if (user) {
        throw new Error('User exists');
      }

      return userModel.create(newUser);
    })
    .catch((error) => {
      handleError(error, res);
    })
    .then((user) => {
      res.status(201).json({ username: user.username, _id: user._id });
    })
    .catch((error) => {
      handleError(error, res);
    });
};

const getAllUsers = (req, res) => {
  // Find all documents
  userModel.find({}).then((users) => {
    users = users.map((user) => {
      return { username: user.username, _id: user._id };
    });

    res.status(200).send(users);
  });
};

module.exports = { createUser, getAllUsers };
