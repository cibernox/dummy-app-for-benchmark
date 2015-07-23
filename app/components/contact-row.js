import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',

  dirtyAttributes: Ember.computed('contact.{name,age}', 'contact.isSaving', function() {
    const contact = this.get('contact');
    console.log('dirtyAttributes recomputed');
    if (contact.get('isDirty')) {
      return JSON.stringify(contact.changedAttributes());
    } else {
      return "{}";
    }
  })
});
