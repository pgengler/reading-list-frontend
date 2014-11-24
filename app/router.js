import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index', { path: '/' }, function() {
    this.route('list', { path: 'list/:list_id' }, function() {
      this.route('record', { path: 'record/:record_id' });
    });
  });
});

export default Router;
