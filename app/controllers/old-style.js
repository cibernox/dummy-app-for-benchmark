import Ember from 'ember';

export default Ember.Controller.extend({
  myValue: 'old style',
  codeSample: "{{input value=myValue}}"
});
