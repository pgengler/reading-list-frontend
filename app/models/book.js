import DS from 'ember-data';

export default DS.Model.extend({
  position: DS.attr('number'),
  title: DS.attr('string'),
  authors: DS.hasMany('author', { async: true }),
  list: DS.belongsTo('list')
});
