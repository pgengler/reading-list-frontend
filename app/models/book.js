import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  authors: DS.hasMany('author'),
  readOn: DS.attr('utcDate'),
  note: DS.attr('string'),
  lists: DS.hasMany('list')
});
