import * as React from 'react';
import EventsDiagram from '../src/components/EventsDiagram';
import { storiesOf } from '@storybook/react';
import './EventDiagram.css';

const room = {
  title: 'Ржавый Фред',
  capacity: 7,
  events: [
    {
      title: 'Событие 1',
      dateStart: '2018-01-09T06:30:00.55',
      dateEnd: '2018-01-09T08:45:00.55',
      users: [],
    },
    {
      title: 'Событие 2',
      dateStart: '2018-01-09T09:30:00.55',
      dateEnd: '2018-01-09T11:45:00.55',
      users: [],
    },
    {
      title: 'Событие 3',
      dateStart: '2018-01-09T18:30:00.55',
      dateEnd: '2018-01-09T20:45:00.55',
      users: [],
    }
  ]
};

const lotsOfRooms = [];
for (let i = 0; i < 100; i++) {
  lotsOfRooms.push(room);
}
const floor = [
  {
    floor: 7,
    rooms: lotsOfRooms
  }
];

storiesOf('EventsDiagram', module)
  .add('default', () => (
      <EventsDiagram floors={floor} classes={['EventDiagram-Story']}/>));
