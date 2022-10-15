import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { IProduct } from './types';

const initialState: IProduct[] = [];

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async () => {
    const response = await axios.get('/api/products');
    return response.data;
  },
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, { payload }) => {
      if (Array.isArray(payload)) return payload;
    });
  },
});

export default productsSlice.reducer;
