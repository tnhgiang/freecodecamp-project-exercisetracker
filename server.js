const app = require('./src/app');
require('dotenv').config();

// Run server
const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});
