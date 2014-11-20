import Ember from 'ember';

export default Ember.ObjectController.extend({
	bookSort: [ 'position' ],
	sortedBooks: Ember.computed.sort('books', 'bookSort'),

	actions: {
		updatePositions: function(positions) {
			var books = this.get('books');
			books.beginPropertyChanges();
			books.forEach(function(book) {
				var id = book.get('id');
				if (positions[id]) {
					book.set('position', positions[id]);
				}
			});
			books.endPropertyChanges();
			books.save();
		}
	}
});
