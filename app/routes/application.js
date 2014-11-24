import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		hasThirdPane: function(val) {
			this.controllerFor('application').set('hasThirdPane', val);
		}
	}
});
