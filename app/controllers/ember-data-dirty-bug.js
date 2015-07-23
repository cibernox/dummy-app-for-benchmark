import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save(contact) {
      contact.save();
    }
  }
});
