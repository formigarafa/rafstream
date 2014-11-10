import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    var appModel = this.modelFor('application');
    var signedIn = !! appModel && appModel.get('currentUser.signedIn');
    if(!signedIn) {
      this.transitionTo('sign_in');
    }
  },
  model: function() {
    return this.store.find('event');
  }
});
