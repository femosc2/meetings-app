/* eslint-disable @typescript-eslint/no-var-requires */
import { render, RenderResult } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
const axios = require('axios');
import React from 'react';
import { createTestStore } from '../../../store/createTestStore';
import { getAllMeetings, login } from '../../../utils/http';
import Calendar from '..';
import CompactSlots from './CompactSlots';
import Slot from './Slot';
import Slots from '.';
jest.mock('axios');

const meetings = [{
  name: 'Twitter marketing campaign',
  description: 'Increasing brand awareness and spreading information about new products',
  date: '2020-10-28',
  startTime: {
    hours: 9,
    minutes: 0,
  },
  endTime: {
    hours: 10,
    minutes: 30,
  },
  attendees: [
    {
      _id: '123',
      email: 'john.doe@example.com',
    },
    {
      _id: '456',
      email: 'jane.doe@example.com',
    },
  ],
}];

const loginUser = {
  email: 'felixLoginTest@test.se',
  password: 'Felix1234!',
};

describe('Load Calendar', () => {
  let store;
  let app: RenderResult<typeof import('C:/reactrepo/Felix/project/client/node_modules/@testing-library/dom/types/queries'), HTMLElement>;
  beforeEach(() => {
    store = createTestStore();
    jest.clearAllMocks();
    app = render(<Provider store={store}><BrowserRouter><Calendar /></BrowserRouter></Provider>);
    axios.post.mockResolvedValue('123');
    login(loginUser);
  });

  test('Meetings are loaded', async () => {
    axios.get.mockResolvedValue(meetings);
    await getAllMeetings();
    expect(axios.get).toHaveBeenCalled();
  },

  );
  test('If Meetings dont load, throw error', async () => {
    axios.get.mockRejectedValue(new Error('Meetings not loaded'));
    try {
      await getAllMeetings();
    } catch(e: any) {
      expect(e.message).toBe('Meetings not loaded');
    }

    expect(axios.get).toHaveBeenCalled();
  },
  );
  test('App shows meetings', async () => {
    axios.get.mockResolvedValue(meetings);
    await getAllMeetings();

    setTimeout(() => {
      const meetingHeader = app.getByText('Twitter marketing campaign');
      expect(meetingHeader).toBeInTheDocument();
    }, 5000);
  },
  );
  test('App show spinner while loading', async () => {
    getAllMeetings().then(() => {
      const spinner = app.getByTestId('spinner');
      expect(spinner).toBeInTheDocument();
    });
  } );

  test('Compact Slots renders', async () => {
    const compactSlots = render(<CompactSlots meetings={meetings} />);
    const compactUl = compactSlots.getByTestId('compactSlots');
    expect(compactUl).toBeInTheDocument();
  } );

  test('Slot renders', async () => {
    const slot = render(<Slot meetings={meetings}/>);
    const slotId = slot.getByTestId('slot');
    expect(slotId).toBeInTheDocument();
  } );

  test('Slots renders', async () => {
    const slots = render(<Slots meetings={meetings}/>);
    const slotsId = slots.getByTestId('slots');
    expect(slotsId).toBeInTheDocument();
  } );
},
);
