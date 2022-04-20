import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { IProduct } from './types';

const initialState: IProduct[] = [];

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async () => {
    const response = await axios.get('/products');
    if (response.statusText === 'OK') {
      return response.data;
    }
    return response.statusText;
  },
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, { payload }) => payload);
  },
});

export default productsSlice.reducer;
