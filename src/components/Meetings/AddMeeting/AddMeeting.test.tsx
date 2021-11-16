/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-var-requires */
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
const axios = require('axios');
import React from 'react';
import { createTestStore } from '../../../store/createTestStore';
import { addMeeting } from '../../../utils/http';
import AddMeeting from '.';
import { TRANSLATIONS } from '../../../resources/translations';
import Attendee from './components/AttendeePicker/Attendee';
let store: any;
jest.mock('axios');

describe('Add Meeting', () => {
  beforeEach(() => {
    store = createTestStore();
    jest.clearAllMocks();
  });

  const newMeeting = {
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
  };

  test('Meeting is created', async () => {
    axios.post.mockResolvedValue([]);
    await addMeeting(newMeeting);
    expect(axios.post).toHaveBeenCalled();
  });

  test('Meeting is not created', async () => {
    axios.post.mockRejectedValue(new Error('Fel'));
    try {
      await addMeeting(newMeeting);
    } catch(e: any) {
      expect(e.message).toBe('Fel');
    }
  });

  test('Add Meeting is rendered', async () => {
    const app = render(<Provider store={store}><BrowserRouter><AddMeeting /></BrowserRouter></Provider>);
    const name = app.getByText(TRANSLATIONS.meetingName);
    expect(name).toBeInTheDocument();
  });

  test('Attendees are rendered', async () => {
    const component = render(<Provider store={store}><BrowserRouter>
      <Attendee email="theEmail@test.se" newMeeting={newMeeting} setNewMeeting={jest.fn()} />
    </BrowserRouter></Provider>);
    const name = component.getByText('theEmail@test.se');
    expect(name).toBeInTheDocument();
  })
  ;});
