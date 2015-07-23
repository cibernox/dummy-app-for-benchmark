/*
  This is an example factory definition.

  Create more files in this directory to define additional factories.
*/
import Mirage from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  name: i => `User ${i}`,
  email: i => `person${i}@test.com`,
  age: 20,
  tall: true
});
