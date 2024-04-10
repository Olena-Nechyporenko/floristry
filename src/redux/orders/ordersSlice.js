import { createSlice } from '@reduxjs/toolkit';
import { fetchOrders, sendOrder } from 'redux/orders/operations';
const ordersSlice = createSlice({
  name: 'orders',
  initialState: {
    currentOrder: null,
    orders: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    addToOrder(state, action) {
      state.currentOrder = action.payload;
    },
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
      })
      .addCase(sendOrder.pending, state => {
        state.isLoading = true;
      })
      .addCase(sendOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(sendOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.currentOrder = null;
      });
  },
});

export const ordersReducer = ordersSlice.reducer;
export const { addToOrder } = ordersSlice.actions;
