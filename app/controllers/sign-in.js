import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    clearErrors: function() {
      this.set('errors', null);
    }
  }
});
