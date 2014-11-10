import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('post');
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
