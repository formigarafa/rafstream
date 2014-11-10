import Ember from 'ember';

export default Ember.ArrayController.extend({
  sortAscending: false,
  sortProperties: ['createdAt'],
  filteredList: function(){
    return this.filter(function(item, index) {
      return index <= 19;
    });
  }.property('model.[]')
});
