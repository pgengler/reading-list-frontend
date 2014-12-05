import Ember from 'ember';

export default Ember.ObjectController.extend({
	actions: {
		saveNote: function() {
			var book = this.get('book');
			if (book.get('isDirty')) {
				book.save();
			}
		}
	}
});
