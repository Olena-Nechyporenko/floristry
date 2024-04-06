import { createSlice } from '@reduxjs/toolkit';
import { fetchOrders } from 'redux/orders/operations';
const ordersSlice = createSlice({
  name: 'orders',
  initialState: {
    orders: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchOrders.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.orders = action.payload;
      });
  },
});

export const ordersReducer = ordersSlice.reducer;
