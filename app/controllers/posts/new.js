import Ember from 'ember';

export default Ember.ObjectController.extend({
  optionsForKind: function() {
    return ['Blog', 'Recipe', 'Review'];
  }.property()
});
