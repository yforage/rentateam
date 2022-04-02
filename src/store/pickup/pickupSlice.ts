import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum PickupOptions {
  delivery = 'delivery',
  pickup = 'pickup',
}

const initialState = PickupOptions.delivery;

const pickupSlice = createSlice({
  name: 'pickup',
  initialState,
  reducers: {
    selectPickup: (state, action: PayloadAction<PickupOptions>) => action.payload,
  },
});

export const { selectPickup } = pickupSlice.actions;

export default pickupSlice.reducer;
