import Ember from 'ember';
import User from 'rafstream/models/user';

export default Ember.Route.extend({
  model: function() {
    var currentUserPromise = User.fetchSession();
    return currentUserPromise.then(function(user){
      return Ember.Object.create({currentUser: user});
    });
  }
});
