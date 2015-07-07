import Ember from 'ember';

export default Ember.Controller.extend({
  myValue: 'new style',
  codeSample: '<input type="text" value={{myValue}} oninput={{action (mut myValue) value="target.value"}}>'
});
