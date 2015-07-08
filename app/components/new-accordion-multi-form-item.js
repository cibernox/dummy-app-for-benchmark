import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['accordion-multi-form-item'],
  actions: {
    benchmark() {
      console.time('new-actions-benchmark');
      for (let i = 0; i < 10000; i++) {
        this.attrs.select();
      }
      console.timeEnd('new-actions-benchmark');
    }
  }
});
