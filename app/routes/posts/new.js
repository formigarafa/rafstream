import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('post');
  },

  deactivate: function() {
    var post = this.modelFor('posts.new');
    if(post.get('isNew')) {
      post.rollback();
    }
  },

  actions: {
    create: function() {
      var route = this;
      this.modelFor('posts.new').save().then(function() {
        route.transitionTo('posts');
      });
    }
  }
});
