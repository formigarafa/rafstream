import Ember from 'ember';
import User from 'rafstream/models/user';

export default Ember.Route.extend({
  model: function() {
    return User.create();
  },
  actions: {
    create: function() {
      var route = this;
      var user = this.modelFor('sign_in');
      user.constructor.createSession(user.get('email'), user.get('password')).then(function() {
        route.transitionTo('stream');
      });
    }
  }
});
