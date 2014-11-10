import DS from 'ember-data';

export default DS.Model.extend({
  actorName: DS.attr('string'),
  createdAt: DS.attr('date'),
  activity: DS.attr('string'),
  postId: DS.attr('number'),
  linkable: DS.attr('boolean'),
  post: DS.belongsTo('post')
});
