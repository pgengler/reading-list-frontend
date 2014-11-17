import DS from 'ember-data';

var List = DS.Model.extend({
  name: DS.attr('string'),
  books: DS.hasMany('book', { async: true })
});

List.reopenClass({
  FIXTURES: [
    { id: 1, name: 'My reading list', books: [ 1, 2 ] }
  ]
});

export default List;
