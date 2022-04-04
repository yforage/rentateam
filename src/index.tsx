import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'regenerator-runtime';
import { Provider } from 'react-redux';
import store from 'store/store';

import App from './App';

import './styles/index.scss';

const root = document.getElementById('root');

if (root) {
  ReactDOM
    .createRoot(root)
    .render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>,
    );
}

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept();
}
