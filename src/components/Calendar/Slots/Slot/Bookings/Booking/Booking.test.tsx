/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-var-requires */
import {  render, RenderResult } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
const axios = require('axios');
import React from 'react';
import { createTestStore } from '../../../../../../store/createTestStore';
import { login } from '../../../../../../utils/http';
import Booking from '.';
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

describe('Booking' , () => {
  let store;
  let app: RenderResult<typeof import('C:/reactrepo/Felix/project/client/node_modules/@testing-library/dom/types/queries'), HTMLElement>;
  beforeEach(() => {
    store = createTestStore();
    jest.clearAllMocks();
    app = render(<Provider store={store}><BrowserRouter><Booking meeting={meetings[0]} borderColor='fff' /></BrowserRouter></Provider>);
    axios.post.mockResolvedValue('123');
    login(loginUser);
  });

  test('Booking renders with right info', () => {
    const header = app.getByText('Twitter marketing campaign');
    expect(header).toBeInTheDocument();
  });
},
);
