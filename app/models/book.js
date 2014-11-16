import DS from 'ember-data';

var Book = DS.Model.extend({
  title: DS.attr('string'),
  list: DS.belongsTo('list')
});

Book.reopenClass({
  FIXTURES: [
    { id: 1, title: 'Le avventure di Pinocchio', list_id: 1 }
  ]
});

export default Book;
