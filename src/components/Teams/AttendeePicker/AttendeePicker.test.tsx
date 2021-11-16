/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-var-requires */
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
const axios = require('axios');
import React from 'react';
import { addMembertoTeam } from '../../../utils/http';
import { createTestStore } from '../../../store/createTestStore';
import Teams from '..';
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


describe('Add Member to existing team', () => {
  beforeEach(() => {
    store = createTestStore();
    jest.clearAllMocks();
  });

  test('Catch error if member is not created', async () => {
    render(<Provider store={store}><BrowserRouter><Teams /></BrowserRouter></Provider>);
    axios.patch.mockRejectedValue(new Error('Fel'));
    try {
      await addMembertoTeam('asd', newTeam.members[0]);
    } catch(e: any) {
      expect(e.message).toBe('Fel');
    }
  });

  test('Member is added', async () => {
    render(<Provider store={store}><BrowserRouter><Teams /></BrowserRouter></Provider>);
    axios.patch.mockResolvedValue(newTeam);
    try {
      await await addMembertoTeam('asd', newTeam.members[0]);
    } catch(e: any) {
      expect(e.message).toBe('Fel');
    }
    expect(axios.patch).toHaveBeenCalled();
  });
});
