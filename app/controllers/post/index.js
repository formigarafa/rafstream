import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: ['application'],
  currentUser: Ember.computed.alias('controllers.application.currentUser'),
  isMine: function(){
    return this.get('currentUser.email') === this.get('authorName');
  }.property('currentUser', 'actorName')
});
