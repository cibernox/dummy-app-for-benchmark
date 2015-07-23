import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  age: DS.attr('number'),
  tall: DS.attr('boolean'),
  email: DS.attr('string')
});
