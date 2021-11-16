/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-var-requires */
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
const axios = require('axios');
import React from 'react';
import { createTestStore } from '../../store/createTestStore';
import { getTeams, getUsers } from '../../utils/http';
import Teams from '.';
let store: any;
jest.mock('axios');

const newTeam = {
  name: 'Agile team',
  shortName: 'agile',
  description: 'Team spreading awareness about Agile practices at Zwiggy',
  members: [
    {
      _id: 'asd123',
      email: 'john.doe@example.com',
    },
    {
      _id: 'aasd123',
      email: 'jane.doe@example.com',
    },
  ],
};


describe('Team', () => {
  beforeEach(() => {
    store = createTestStore();
    jest.clearAllMocks();
  });

  test('Get users fail', async () => {
    render(<Provider store={store}><BrowserRouter><Teams /></BrowserRouter></Provider>);
    axios.get.mockRejectedValue(new Error('Fel'));
    try {
      await getUsers();
    } catch(e: any) {
      expect(e.message).toBe('Fel');
    }
  });

  test('Get Users', async () => {
    render(<Provider store={store}><BrowserRouter><Teams /></BrowserRouter></Provider>);
    axios.get.mockResolvedValue(newTeam.members);
    try {
      await await getUsers();
    } catch(e: any) {
      expect(e.message).toBe('Fel');
    }
    expect(axios.get).toHaveBeenCalled();
  });

  test('Get Teams fail', async () => {
    render(<Provider store={store}><BrowserRouter><Teams /></BrowserRouter></Provider>);
    axios.get.mockRejectedValue(new Error('Fel'));
    try {
      await getTeams();
    } catch(e: any) {
      expect(e.message).toBe('Fel');
    }
  });

  test('Get Teams', async () => {
    render(<Provider store={store}><BrowserRouter><Teams /></BrowserRouter></Provider>);
    axios.get.mockResolvedValue([newTeam]);
    try {
      await getTeams();
    } catch(e: any) {
      expect(e.message).toBe('Fel');
    }
    expect(axios.get).toHaveBeenCalled();
  });
});
