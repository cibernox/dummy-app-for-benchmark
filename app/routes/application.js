import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    this.store.push({
      data: {
        type: 'homework',
        id: 1,
        attributes: {
          title: 'Homework for the next week'
        },
        relationships: {
          trays: {
            data: [
              { type: 'tray', id: 1 },
              { type: 'tray', id: 2 }
            ]
          }
        }
      },
      included: [
        {
          type: 'tray',
          id: 1,
          attributes: {
            title: 'Maths'
          },
          relationships: {
            tasks: {
              data: [
                { type: 'task', id: 1 },
                { type: 'task', id: 2 },
                { type: 'task', id: 3 }
              ]
            }
          }
        },
        {
          type: 'tray',
          id: 2,
          attributes: {
            title: 'Maths'
          },
          relationships: {
            tasks: {
              data: [
                { type: 'task', id: 4 },
                { type: 'task', id: 5 }
              ]
            }
          }
        },
        {
          type: 'task',
          id: 1,
          attributes: {
            title: '2+2',
            description: 'Lorem ipsum'
          }
        },
        {
          type: 'task',
          id: 2,
          attributes: {
            title: '3/5',
            description: 'Lorem ipsum'
          }
        },
        {
          type: 'task',
          id: 3,
          attributes: {
            title: '2^32',
            description: 'Lorem ipsum'
          }
        },
        {
          type: 'task',
          id: 4,
          attributes: {
            title: 'Waterloo battle',
            description: 'Lorem ipsum'
          }
        },
        {
          type: 'task',
          id: 5,
          attributes: {
            title: 'Roman empire',
            description: 'Lorem ipsum'
          }
        },
      ]
    });
  }
});
