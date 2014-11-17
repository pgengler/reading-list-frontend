import DS from 'ember-data';

var Book = DS.Model.extend({
  title: DS.attr('string'),
  authors: DS.hasMany('author', { async: true }),
  list: DS.belongsTo('list')
});

Book.reopenClass({
  FIXTURES: [
    { id: 1, title: 'Le avventure di Pinocchio', authors: [ 1 ], list: 1 },
    { id: 2, title: 'The Name of the Wind', authors: [ 2 ], list: 1 }
  ]
});

export default Book;
