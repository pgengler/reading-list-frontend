import Ember from 'ember';

export default Ember.ObjectController.extend({
	recordSort: [ 'position' ],
	sortedRecords: Ember.computed.sort('records', 'recordSort'),

	actions: {
		updatePositions: function(positions) {
			var records = this.get('records');
			records.beginPropertyChanges();
			records.forEach(function(record) {
				var id = record.get('id');
				if (positions[id]) {
					record.set('position', positions[id]);
				}
			});
			records.endPropertyChanges();
			records.save();
		}
	}
});
