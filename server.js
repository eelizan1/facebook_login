// node command to get access to the express API
var express = require('express');

// create our app
var app = express();

// tell what server we want to use
// express.static exposes a folder name that we want to expose to ther webserver
app.use(express.static('public'));

// start server
app.listen(3000, () => {
  console.log('Express server is up on port 3000');
});
