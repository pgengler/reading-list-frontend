import DS from 'ember-data';

export default DS.Model.extend({
  book: DS.belongsTo('book'),
  list: DS.belongsTo('list'),
  position: DS.attr('number')
});
