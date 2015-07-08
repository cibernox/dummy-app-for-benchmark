import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {
        id: 1,
        title: 'Maths',
        tasks: [
          { id: 1, title: '2+2', description: 'Lorem ipsum' },
          { id: 2, title: '3/5', description: 'Lorem ipsum' },
          { id: 3, title: '2^32', description: 'Lorem ipsum' },
        ]
      },
      {
        id: 2,
        title: 'History',
        tasks: [
          { id: 4, title: 'Waterloo battle', description: 'Lorem ipsum' },
          { id: 5, title: 'Roman empire', description: 'Lorem ipsum' },
        ]
      },
    ]
  }
});
