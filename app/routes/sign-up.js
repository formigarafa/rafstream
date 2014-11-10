import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('user');
  },
  actions: {
    create: function() {
      var route = this;
      this.modelFor('sign_up').save().then(function() {
        route.transitionTo('stream');
      });
    }
  }
});
