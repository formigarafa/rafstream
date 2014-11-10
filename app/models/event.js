import DS from 'ember-data';

export default DS.Model.extend({
  actor: DS.attr('string'),
  createdAt: DS.attr('date'),
  activity: DS.attr('string'),
  postId: DS.attr('number'),
  linkable: DS.attr('boolean')
});
