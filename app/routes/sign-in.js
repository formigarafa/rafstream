import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('session');
  },
  actions: {
    create: function() {
      var route = this;
      this.modelFor('sign_in').save().then(function() {
        route.transitionTo('stream');
      });
    }
  }
});
