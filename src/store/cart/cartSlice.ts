import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { PickupOptions } from 'store/pickup/pickupSlice';
import { IProduct } from 'store/products/types';
import { ISendOrder } from './types';

const initialState: IProduct[] = [];

export const sendOrder = createAsyncThunk(
  'cart/sendOrder',
  async (payload: ISendOrder) => {
    await axios.post('/api/order', payload);
  },
);

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      state.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.splice(state.findIndex((product) => product.id === action.payload), 1);
    },
    filterCart: (state, action: PayloadAction<PickupOptions>) => state.filter((product) => (action.payload === 'delivery' ? product.delivery : true)),
  },
  extraReducers: (builder) => {
    builder.addCase(sendOrder.fulfilled, () => []);
  },
});

export const { addToCart, removeFromCart, filterCart } = cartSlice.actions;

export default cartSlice.reducer;
