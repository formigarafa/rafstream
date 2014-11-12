import Ember from 'ember';

export default Ember.Route.extend({
  deactivate: function() {
    var post = this.modelFor('post');
    if(post.get('isDirty')) {
      post.rollback();
    }
  },

  actions: {
    update: function() {
      var route = this;
      this.modelFor('post').save().then(function() {
        route.transitionTo('post');
      });
    }
  }
});
