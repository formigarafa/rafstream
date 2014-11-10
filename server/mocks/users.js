module.exports = function(app) {
  var express = require('express');
  var usersRouter = express.Router();
  usersRouter.get('/', function(req, res) {
    res.send({"users":[]});
  });

  usersRouter.post('/', function(req, res) {
    res.send({"user": {id: 1, email: 'cara@tu.com'}});
  });

  app.use('/api/users', usersRouter);
};
