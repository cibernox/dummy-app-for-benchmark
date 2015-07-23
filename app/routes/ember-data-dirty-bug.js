import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.find('contact', 1);
  },

  setupController(controller) {
    this._super(...arguments);
    controller.set('newContact', this.store.createRecord('contact'));
  }
});
