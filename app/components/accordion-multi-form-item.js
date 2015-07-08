import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['accordion-multi-form-item'],
  actions: {
    selectEntry() {
      this.sendAction('selectTaskAction', this.get('task'));
    },
    deleteEntry() {
      this.sendAction('deleteTaskAction', this.get('task'));
    }
  }
});
