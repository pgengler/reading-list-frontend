import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'ul',
	classNames: [ 'list' ],

	didInsertElement: function() {
		var component = this;
		var $elem = this.$();
		$elem.sortable({
			update: function(event, ui) {
				// Calculate new positions for children
				var positions = { };
				$elem.children().each(function(index) {
					var position = index + 1; // index is 0-based, position is 1-based
					var idAttr = this.attributes.getNamedItem('data-id');
					if (idAttr) {
						var id = idAttr.value;
						positions[id] = position;
					}
				});
				component.sendAction('action', positions);
			}
		});
	}
});
