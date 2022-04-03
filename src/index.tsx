import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'regenerator-runtime';
import { Provider } from 'react-redux';
import store from 'store/store';

import App from './App';

import './styles/index.scss';
import { getProducts } from 'store/products/productsSlice';
import { getCategories } from 'store/categories/categoriesSlice';

const root = document.getElementById('root');

store.dispatch(getCategories());
store.dispatch(getProducts());

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
