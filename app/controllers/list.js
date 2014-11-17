import Ember from 'ember';

export default Ember.ObjectController.extend({
	bookSort: [ 'position' ],
	sortedBooks: Ember.computed.sort('books', 'bookSort')
});
