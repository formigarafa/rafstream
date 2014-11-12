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
      User.signIn(user.get('email'), user.get('password')).then(function(user) {
        console.log('user logged: ', user.getProperties('email'));
        route.signIn(user);
      }).catch(function(response){
        var error_messages = [response.jqXHR.responseJSON.error];
        user.set('errors', error_messages);
      });
    }
  },
  signIn: function(user) {
    var appModel = this.modelFor('application');
    appModel.set('currentUser', user);
    this.transitionTo('stream');
  }
});
