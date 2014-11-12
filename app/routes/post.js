import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    destroy: function() {
      var route = this;
      var post = this.modelFor('post');
      post.deleteRecord();
      post.save().then(function() {
        route.transitionTo('posts');
      });
    }
  }
});
