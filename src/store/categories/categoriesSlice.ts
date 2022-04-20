import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { ICategorie, ICategories } from './types';

const initialState: ICategories = {
  selected: 1,
  categories: [],
};

export const getCategories = createAsyncThunk(
  'categories/getCategories',
  async () => {
    const response = await axios.get('/categories');
    if (response.statusText === 'OK') {
      return response.data;
    }
    return response.statusText;
  },
);

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    selectCategorie: (state, action: PayloadAction<number>) => {
      state.selected = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCategories.fulfilled, (state, action: PayloadAction<ICategorie[]>) => {
      state.categories = action.payload;
    });
  },
});

export const { selectCategorie } = categoriesSlice.actions;

export default categoriesSlice.reducer;
