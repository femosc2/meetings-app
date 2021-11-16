/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-var-requires */
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { login, registerUser } from '../../../../../../utils/http';
import App from '../../../../App/App';
const axios = require('axios');
import React from 'react';
import { createTestStore } from '../../../../../../store/createTestStore';

let store: any;
jest.mock('axios');

describe('Registration', () => {
  beforeEach(() => {
    store = createTestStore();
    jest.clearAllMocks();
  });

  test('user is registered and logged in after resolved register call', async () => {
    render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>);
    const newUser = {
      email: 'felix@test.se',
      password: 'yungPassWord123!',
      name: 'felix',
    };
    const registerButton = screen.getByText('Register');
    fireEvent.click(registerButton);
    const emailField = screen.getByTestId('emailField');
    const passwordField = screen.getByTestId('passwordField');
    const confirmPasswordField = screen.getByTestId('confirmPasswordField');
    
    fireEvent.change(emailField, {
      target: {
        value: 'felix@test.se',
      },
    });
    fireEvent.change(passwordField, {
      target: {
        value: 'yungPassWord123!',
      },
    });
    fireEvent.change(confirmPasswordField, {
      target: {
        value: 'yungPassWord123!',
      },
    });
    const submitButton = screen.getByText('Submit');
    await axios.post.mockResolvedValue([]);
    await registerUser(newUser);
    fireEvent.click(submitButton);
    expect(axios.post).toHaveBeenCalled();
    
  });
    
  test('user receives error if api call fails', async () => {
    render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>);
    const newUser = {
      email: 'felix@test.se',
      password: 'yungPassWord123!',
      name: 'felix',
    };
    const registerButton = screen.getByText('Register');
    fireEvent.click(registerButton);

    const emailField = screen.getByTestId('emailField');
    const passwordField = screen.getByTestId('passwordField');
    const confirmPasswordField = screen.getByTestId('confirmPasswordField');
    
    fireEvent.change(emailField, {
      target: {
        value: 'felix@test.se',
      },
    });
    fireEvent.change(passwordField, {
      target: {
        value: 'yungPassWord123!',
      },
    });
    fireEvent.change(confirmPasswordField, {
      target: {
        value: 'yungPassWord123!',
      },
    });

    axios.post.mockRejectedValue(new Error('user with this email id already exists'));

    try {
      await registerUser(newUser);
    } catch(e: any) {
      expect(e.message).toBe('user with this email id already exists');
    }
  });
    
});

describe('Login', () => {
  beforeEach(() => {
    store = createTestStore();
    jest.clearAllMocks();
  });
  
  test('login is called once upon submit being clicked', async () => {
    render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>);
    const loginUser = {
      email: 'felixLoginTest@test.se',
      password: 'Felix1234!',
    };
    const loginButton = screen.getByText('Login');
    fireEvent.click(loginButton);
    const emailField = screen.getByTestId('emailField');
    const passwordField = screen.getByTestId('passwordField');
      
    fireEvent.change(emailField, {
      target: {
        value: 'felixLoginTest@test.se',
      },
    });
    fireEvent.change(passwordField, {
      target: {
        value: 'Felix1234!',
      },
    });
      
    const submitButton = screen.getByText('Submit');
      
    fireEvent.click(submitButton);
      
    axios.post.mockResolvedValue({
      data: {
        id: 23,
        email: 'felix@test.se',
      } });
    await login(loginUser);
    expect(axios.post).toHaveBeenCalled();
  });
      
  test('if login fails, user is shown an error', async () => {
    render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>);
    const loginUser = {
      email: 'felixLoginTest@test.se',
      password: 'Felix1234!',
    };
    const loginButton = screen.getByText('Login');
    fireEvent.click(loginButton);
    const emailField = screen.getByTestId('emailField');
    const passwordField = screen.getByTestId('passwordField');
      
    fireEvent.change(emailField, {
      target: {
        value: 'felixLoginTest@test.se',
      },
    });
    fireEvent.change(passwordField, {
      target: {
        value: 'Felix1234!',
      },
    });
      
    const submitButton = screen.getByText('Submit');
      
    fireEvent.click(submitButton);
      
    axios.post.mockRejectedValue(new Error('Login failed.'));
    try {
      await login(loginUser);
    } catch(e: any) {
      expect(e.message).toBe('Login failed.');
    }
    expect(axios.post).toHaveBeenCalled();
  });
});
  
