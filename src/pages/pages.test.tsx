/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-var-requires */
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import CalendarPage from './Calendar';
import { createTestStore } from '../store/createTestStore';
import MeetingsPage from './Meetings';
import TeamsPage from './Teams';
let store: any;

describe('Pages', () => {
  beforeEach(() => {
    store = createTestStore();
    jest.clearAllMocks();
  });


  test('Calendar Page is rendered', async () => {
    const component = render(<Provider store={store}><BrowserRouter>
      <CalendarPage />
    </BrowserRouter></Provider>);
    const page = component.getByTestId('requireLoginPage');
    expect(page).toBeInTheDocument();
  });

  test('Meetings Page is rendered', async () => {
    const component = render(<Provider store={store}><BrowserRouter>
      <MeetingsPage />
    </BrowserRouter></Provider>);
    const page = component.getByTestId('requireLoginPage');
    expect(page).toBeInTheDocument();
  });

  test('Teams Page is rendered', async () => {
    const component = render(<Provider store={store}><BrowserRouter>
      <TeamsPage />
    </BrowserRouter></Provider>);
    const page = component.getByTestId('requireLoginPage');
    expect(page).toBeInTheDocument();
  })
  ;});
