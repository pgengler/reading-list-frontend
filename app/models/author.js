import DS from 'ember-data';

var Author = DS.Model.extend({
	name: DS.attr('string'),
	books: DS.hasMany('book', { async: true })
});

Author.reopenClass({
	FIXTURES: [
		{ id: 1, name: 'Carlo Collodi', books: [ 1 ] }
	]
});

export default Author;
