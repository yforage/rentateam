import { combineReducers } from '@reduxjs/toolkit';

import cart from './cart/cartSlice';
import categories from './categories/categoriesSlice';
import pickup from './pickup/pickupSlice';
import products from './products/productsSlice';

const rootReducer = combineReducers({
  cart,
  categories,
  pickup,
  products,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
