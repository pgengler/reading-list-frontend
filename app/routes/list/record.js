import Ember from 'ember';

export default Ember.Route.extend({
	activate: function() {
		this.send('hasThirdPane', true);
	},
	deactivate: function() {
		this.send('hasThirdPane', false);
	}
});
