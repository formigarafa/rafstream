module.exports = function(app) {
  var express = require('express');
  var eventsRouter = express.Router();
  eventsRouter.get('/', function(req, res) {
    res.send({"events":[
      {id: 1, actor: 'rafael', createdAt: "2014-11-09T09:04:27.978Z", activity: 'created', postId: 1, linkable: true},
      {id: 2, actor: 'rafael', createdAt: "2014-11-09T09:04:27.978Z", activity: 'created', postId: 171, linkable: false},
      {id: 3, actor: 'rafael', createdAt: "2014-11-10T09:04:27.978Z", activity: 'updated', postId: 1, linkable: true},
      {id: 4, actor: 'rafael', createdAt: "2014-11-10T09:04:27.978Z", activity: 'deleted', postId: 171, linkable: false},
      {id: 5, actor: 'other guy', createdAt: "2014-11-10T09:04:27.978Z", activity: 'created', postId: 2, linkable: true},
      {id: 6, actor: 'other guy', createdAt: "2014-11-10T09:05:27.978Z", activity: 'created', postId: 3, linkable: true},
      {id: 7, actor: 'other guy', createdAt: "2014-11-10T09:06:27.978Z", activity: 'created', postId: 4, linkable: true}
    ]});
  });
  app.use('/api/events', eventsRouter);
};
