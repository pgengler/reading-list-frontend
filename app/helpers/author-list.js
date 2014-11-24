import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function(book) {
	return book.get('authors').mapBy('name').join(', ');
});
