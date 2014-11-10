module.exports = function(app) {
  var express = require('express');
  var sessionsRouter = express.Router();
  sessionsRouter.get('/', function(req, res) {
    res.send({"sessions":[]});
  });
  app.use('/api/sessions', sessionsRouter);
};
