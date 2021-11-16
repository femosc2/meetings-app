import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import LoginOrRegisterForm from './LoginOrRegisterForm';
import { Provider } from 'react-redux';
import store from '../../../../../../store';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

const history = createMemoryHistory();

test('Register form contains the fields email, password and confirm password', () => {

  const form = render(<Provider store={store}><Router history={history}>
    <LoginOrRegisterForm formType="register" />
  </Router></Provider>);
  const emailField = form.getByTestId('emailField');
  const passwordField = form.getByTestId('passwordField');
  const confirmPasswordField = form.getByTestId('confirmPasswordField');

  expect(emailField).toBeInTheDocument();
  expect(passwordField).toBeInTheDocument();
  expect(confirmPasswordField).toBeInTheDocument();
});

test('Register form validates email on submit', () => {

  const form = render(<Provider store={store}><Router history={history}>
    <LoginOrRegisterForm formType="register" />
  </Router></Provider>);
  const submitButton = form.getByTestId('submit');

  const emailField = form.getByTestId('emailField');
  const passwordField = form.getByTestId('passwordField');
  const confirmPasswordField = form.getByTestId('confirmPasswordField');

  fireEvent.change(emailField, {
    target: {
      value: 'felixmorau',
    },
  });
  fireEvent.change(passwordField, {
    target: {
      value: 'asd',
    },
  });
  fireEvent.change(confirmPasswordField, {
    target: {
      value: 'asd',
    },
  });

  fireEvent.submit(submitButton);
  const errorMessage =
   form.getByText('Password needs to include one uppercase character, one special character, one number and at least eight characters');
  expect(errorMessage).toBeInTheDocument();
});

test('Register form validates passwords on submit', () => {

  const form = render(<Provider store={store}><Router history={history}>
    <LoginOrRegisterForm formType="register" />
  </Router></Provider>);
  const submitButton = form.getByTestId('submit');

  const emailField = form.getByTestId('emailField');
  const passwordField = form.getByTestId('passwordField');
  const confirmPasswordField = form.getByTestId('confirmPasswordField');

  fireEvent.change(emailField, {
    target: {
      value: 'felixmorau@gmail.com',
    },
  });
  fireEvent.change(passwordField, {
    target: {
      value: 'asd',
    },
  });
  fireEvent.change(confirmPasswordField, {
    target: {
      value: 'asd',
    },
  });

  fireEvent.submit(submitButton);
  const errorMessage =
   form.getByText('Password needs to include one uppercase character, one special character, one number and at least eight characters');
  expect(errorMessage).toBeInTheDocument();
});

test('Register form makes sure that the passwords are identical', () => {

  const form = render(<Provider store={store}><Router history={history}>
    <LoginOrRegisterForm formType="register" />
  </Router></Provider>);
  const submitButton = form.getByTestId('submit');

  const emailField = form.getByTestId('emailField');
  const passwordField = form.getByTestId('passwordField');
  const confirmPasswordField = form.getByTestId('confirmPasswordField');

  fireEvent.change(emailField, {
    target: {
      value: 'felixmorau@gmail.com',
    },
  });
  fireEvent.change(passwordField, {
    target: {
      value: 'Felix1234!',
    },
  });
  fireEvent.change(confirmPasswordField, {
    target: {
      value: 'Felix1234',
    },
  });

  fireEvent.submit(submitButton);
  const errorMessage = form.getByText('Passwords does not match.');
  expect(errorMessage).toBeInTheDocument();
});

test('Register form works if everything validates.', () => {

  const form = render(<Provider store={store}><Router history={history}>
    <LoginOrRegisterForm formType="register" />
  </Router></Provider>);
  const submitButton = form.getByTestId('submit');

  const emailField = form.getByTestId('emailField');
  const passwordField = form.getByTestId('passwordField');
  const confirmPasswordField = form.getByTestId('confirmPasswordField');

  fireEvent.change(emailField, {
    target: {
      value: 'felixmorau@gmail.com',
    },
  });
  fireEvent.change(passwordField, {
    target: {
      value: 'Felix1234!',
    },
  });
  fireEvent.change(confirmPasswordField, {
    target: {
      value: 'Felix1234!',
    },
  });

  fireEvent.submit(submitButton);
  const errorMessage1 = form.queryByText('Passwords does not match!');
  const errorMessage2 =
  form.queryByText('Password needs to include one uppercase character, one special character, one number and at least eight characters');
  expect(errorMessage1).not.toBeInTheDocument();
  expect(errorMessage2).not.toBeInTheDocument();
});


