import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['accordion-multi-form-item'],
  actions: {
    select() {
      this.sendAction('selectTaskAction', this.get('task'));
    },
    remove() {
      this.sendAction('removeTaskAction', this.get('task'));
    },
    benchmark() {
      console.time('old-actions-benchmark');
      for (let i = 0; i < 10000; i++) {
        this.sendAction('selectTaskAction', this.get('task'));
      }
      console.timeEnd('old-actions-benchmark');
    }
  }
});
