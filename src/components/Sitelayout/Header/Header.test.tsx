import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './index';
import { Provider } from 'react-redux';
import store from '../../../store';

test('renders an header', () => {
  render(<Provider store={store}><BrowserRouter><Header /></BrowserRouter></Provider>);
  const header = screen.getByTestId('header');
  expect(header).toBeInTheDocument();
});
