/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-var-requires */
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
const axios = require('axios');
import React from 'react';
import { createTestStore } from '../../../store/createTestStore';
import App from '../../Sitelayout/App/App';
import { addUserToMeeting, getMeetingsForPeriod, removeUserFromMeeting } from '../../../utils/http';
import MeetingsList from '.';
import MeetingsCard from './MeetingsCard';
import Search from './Search';
import { TRANSLATIONS } from '../../../resources/translations';
let store: any;
jest.mock('axios');

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
      _id: '123',
      email: 'jane.doe@example.com',
    },
  ],
};

const patchedUser = {
  name: 'testman',
  email: 'test@test.se',
  _id: '23',
};

describe('Meeting list', () => {
  beforeEach(() => {
    store = createTestStore();
    jest.clearAllMocks();
  });

  test('Catch error if user is not excused from meeting', async () => {
    axios.patch.mockRejectedValue(new Error('Fel'));
    try {
      await removeUserFromMeeting('617ffeb62b263a00153a70d3');
    } catch(e: any) {
      expect(e.message).toBe('Fel');
    }

  });

  test('User is excused from meeting', async () => {
    axios.patch.mockResolvedValue(newMeeting);
    try {
      await removeUserFromMeeting('617ffeb62b263a00153a70d3');
    } catch(e: any) {
      expect(e.message).toBe('Fel');
    }
    expect(axios.patch).toHaveBeenCalled();
  });

  test('Add user to meeting', async () => {
    render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>);
    axios.patch.mockResolvedValue(newMeeting);
    try {
      await addUserToMeeting('617ffeb62b263a00153a70d3', patchedUser );
    } catch(e: any) {
      expect(e.message).toBe('Fel');
    }
    expect(axios.patch).toHaveBeenCalled();
  });

  test('Add user to meeting gets error if fails', async () => {
    render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>);
    axios.patch.mockRejectedValue(new Error('Fel'));
    try {
      await addUserToMeeting('617ffeb62b263a00153a70d3', patchedUser );
    } catch(e: any) {
      expect(e.message).toBe('Fel');
    }
    expect(axios.patch).toHaveBeenCalled();
  });

  test('Meetings list is rendered', async () => {
    const component = render(<Provider store={store}><BrowserRouter><MeetingsList /></BrowserRouter></Provider>);
    const meetingsList = component.getByTestId('meetingsList');
    expect(meetingsList).toBeInTheDocument();
  });

  test('Meetings card is rendered', async () => {
    const component = render(<Provider store={store}><BrowserRouter><MeetingsCard meeting={newMeeting}
      users={newMeeting.attendees} excuseYourSelfFromMeeting={jest.fn()} addUserToMeeting={jest.fn()} /></BrowserRouter></Provider>);
    const meetingCardName = component.getByText(newMeeting.name);
    expect(meetingCardName).toBeInTheDocument();
  });


  test('Catch error if get meetings for period fails', async () => {
    axios.get.mockRejectedValue(new Error('Fel'));
    try {
      await getMeetingsForPeriod('ALL' );
    } catch(e: any) {
      expect(e.message).toBe('Fel');
    }

  });

  test('Get meetings for period', async () => {
    axios.get.mockResolvedValue(newMeeting);
    try {
      await getMeetingsForPeriod('ALL');
    } catch(e: any) {
      expect(e.message).toBe('Fel');
    }
    expect(axios.get).toHaveBeenCalled();
  });

  test('Meetings Search is rendered', async () => {
    const component = render(<Provider store={store}><BrowserRouter><Search setMeetings={jest.fn()}/></BrowserRouter></Provider>);
    const MeetingsSearchHeader = component.getByText(TRANSLATIONS.searchForMeetings);
    expect(MeetingsSearchHeader).toBeInTheDocument();
  });
});
