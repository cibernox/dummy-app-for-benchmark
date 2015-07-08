import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  trays: DS.hasMany('tray', { async: true })
});
