module.exports = function(app) {
  var express = require('express');
  var postsRouter = express.Router();

  function table(id) {
    var data = [
      {id: 1, kind: 'blog', title: 'ember is cool', body: 'why the heck should we try angularjs?'},
      {id: 2, kind: 'blog', title: 'Rails rocks', body: 'we could have anything in the backend, but we have rails and peace of mind.'},
      {id: 3, kind: 'recipe', title: 'cooking nginx', body: 'a fast server to deliver pipping hot web apps.'},
      {id: 4, kind: 'review', title: 'fine', body: 'everything should be alright.'}
    ]

    return data[id - 1];
  }

  postsRouter.get('/', function(req, res) {
    res.send({"posts":[
      table(1),
      table(2),
      table(3),
      table(4)
    ]});
  });

  postsRouter.get('/:id', function(req, res) {
    if(req.params.id > 10) {
      res.status(404).send('not found');
    }
    else {
      res.send({"post":
        table(req.params.id)
      });
    }
  });

  postsRouter.post('/', function(req, res) {
    res.send({"post":
      {id: 1, kind: 'blog', title: 'saved', body: 'post stored'}
    });
  });

  postsRouter.put('/:id', function(req, res) {
    res.send({"post":
      {id: req.params.id, kind: 'blog', title: 'updated', body: 'post stored, again'}
    });
  });
  app.use('/api/posts', postsRouter);
};
