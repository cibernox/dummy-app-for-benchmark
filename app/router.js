import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('old-style');
  this.route('new-style');
  this.route('old-actions');
  this.route('new-actions');
  this.route('ember-data-dirty-bug');
});

export default Router;
