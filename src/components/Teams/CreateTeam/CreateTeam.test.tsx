/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-var-requires */
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
const axios = require('axios');
import React from 'react';
import { createTeam } from '../../../utils/http';
import { createTestStore } from '../../../store/createTestStore';
import CreateTeam from '.';
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


describe('Create Team', () => {
  beforeEach(() => {
    store = createTestStore();
    jest.clearAllMocks();
  });

  test('Catch error team is not created', async () => {
    axios.post.mockRejectedValue(new Error('Fel'));
    try {
      await createTeam(newTeam);
    } catch(e: any) {
      expect(e.message).toBe('Fel');
    }

  });

  test('Team is created', async () => {
    axios.post.mockResolvedValue(newTeam);
    try {
      await createTeam(newTeam);
    } catch(e: any) {
      expect(e.message).toBe('Fel');
    }
    expect(axios.post).toHaveBeenCalled();
  });

  test('Create team renders', async () => {
    const component = render(<Provider store={store}><BrowserRouter><CreateTeam setTeams={jest.fn()}
      users={newTeam.members}/></BrowserRouter></Provider>);
    axios.post.mockResolvedValue(newTeam);
    const createTeam = component.getByTestId('createTeam');
    expect(createTeam).toBeInTheDocument();
  });
});
