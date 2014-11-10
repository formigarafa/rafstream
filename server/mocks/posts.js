module.exports = function(app) {
  var express = require('express');
  var postsRouter = express.Router();
  postsRouter.get('/', function(req, res) {
    res.send({"posts":[
      {id: 1, kind: 'blog', title: 'ember is cool', body: 'why the heck should we try angularjs?'},
      {id: 2, kind: 'blog', title: 'Rails rocks', body: 'we could have anything in the backend, but we have rails and peace of mind.'},
      {id: 3, kind: 'recipe', title: 'cooking nginx', body: 'a fast server to deliver pipping hot web apps.'}
    ]});
  });
  app.use('/api/posts', postsRouter);
};
