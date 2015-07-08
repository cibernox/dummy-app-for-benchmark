import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['accordion-multi-form-item'],
  actions: {
    select() {
      this.sendAction('selectTaskAction', this.get('task'));
    },
    remove() {
      this.sendAction('removeTaskAction', this.get('task'));
    }
  }
});
