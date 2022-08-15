# Exercise Tracker

This is my solution for the Exercise Tracker project. Instructions for building your project can be found at https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/exercise-tracker

## Notes:

- There are 2 ways to design the database:

  - 2 collection: `Users` and `Exercises`, that follow 1-n relation: we can take the advantage of the mongoose to query desired exercises with ease.
  - 1 collection for `Users` with a field of an array which stores `Exercises` ([Subdocument](https://mongoosejs.com/docs/subdocs.html) or Nested Paths): we must manually derive desired exercise from the array (filter)

  ```js
  // Sub-document
  const exerciseSchema = new mongoose.Schema({
    description: String
    duration: String
    date: Date
  })
  const userSchema = new mongoose.Schema({
    username: String,
    exercises: [exerciseSchema]
  })

  // Nested Paths
  const userSchema = new mongoose.Schema({
    username: String,
    exercises: [{description: String, duration: String, date: Date}]
  })
  ```
