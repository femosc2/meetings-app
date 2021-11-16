import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/Sitelayout/App/App';
import store from './store';
import  'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Provider store= { store }>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

