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
    const response = await axios.get('/api/categories');
    return response.data;
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
    builder.addCase(getCategories.fulfilled, (state, { payload }: PayloadAction<ICategorie[]>) => {
      if (Array.isArray(payload)) {
        state.categories = payload;
      }
    });
  },
});

export const { selectCategorie } = categoriesSlice.actions;

export default categoriesSlice.reducer;
