import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from '../../../store';

test('renders the app', () => {

  render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>);
  const app = screen.getByTestId('app');
  expect(app).toBeInTheDocument();
});
