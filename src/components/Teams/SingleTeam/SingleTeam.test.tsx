/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-var-requires */
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { createTestStore } from '../../../store/createTestStore';
import SingleTeam from '.';
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


describe('Single Team', () => {
  beforeEach(() => {
    store = createTestStore();
    jest.clearAllMocks();
  });

  test('Team Renders', async () => {
    const team = render(<Provider store={store}>
      <BrowserRouter><SingleTeam team={newTeam} users={newTeam.members} removeUserFromTeam={jest.fn()}  />
      </BrowserRouter></Provider>);
    const teamHeader = team.getByText('Agile team');
    expect(teamHeader).toBeInTheDocument();
  });
});
