import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr('string'),
  kind: DS.attr('string'),
  authorName: DS.attr('string'),
  updatedAt: DS.attr('date'),
  events: DS.hasMany('event')
});
