import Ember from 'ember';

const { computed } = Ember;

export default Ember.Controller.extend({
  queryParams: ['tab'],
  tab: 0,

  // Lifecycle hooks
  init() {
    this._super(...arguments);
    this.deletedTasksByTray = new Map();
  },

  // CPs
  selectedTask: computed.oneWay('selectedTray.tasks.firstObject'),
  selectedTray: computed('tab', 'model.trays', function() {
    return this.get('model.trays').objectAt(this.get('tab'));
  }),

  // Actions
  actions: {
    removeTaskFromTray(tray, task) {
      tray.get('tasks').removeObject(task);
      const deletedTasks = this.deletedTasksByTray.get(tray);
      if (!deletedTasks) {
        this.deletedTasksByTray.set(tray, [task]);
      } else {
        deletedTasks.pushObject(task);
      }
    },

    confirm() {
      for (let [_, tasks] of this.deletedTasksByTray) {
        tasks.forEach(t => this.store.unloadRecord(t));
      }
      this.deletedTasksByTray.clear();
    },

    rollback() {
      this.get('model').rollbackAttributes();
      for (let [tray, tasks] of this.deletedTasksByTray) {
        tray.get('tasks').pushObjects(tasks);
      }
      this.deletedTasksByTray.clear();
    }
  }
});
