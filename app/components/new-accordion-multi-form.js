import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    selectTask(task) {
      this.set('selected', task);
    }
  }
});
