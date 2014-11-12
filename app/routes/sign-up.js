import Ember from 'ember';
import User from 'rafstream/models/user';

export default Ember.Route.extend({
  model: function() {
    return User.create();
  },
  actions: {
    create: function() {
      var route = this;
      var user = this.modelFor('sign_up');
      User.signUp(user.get('email'), user.get('password'), user.get('passwordConfirmation')).then(function(user) {
        console.log('user created', user);
        route.signIn(user);
      }).catch(function(response){
        var errors = response.jqXHR.responseJSON.errors;
        var error_messages = [];
        for(var field in errors) {
          errors[field].map(function(failure) {
            error_messages.push(field + " " + failure);
          });
        }
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
