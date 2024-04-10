import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://floristry-backend.onrender.com/api/';

export const fetchOrders = createAsyncThunk(
  'orders/fetchOrders',
  async (_, { rejectWithValue }) => {
    try {
      const orders = await axios.get('/orders');
      return orders.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const sendOrder = createAsyncThunk(
  'orders/sendOrder',
  async (currentOrder, { rejectWithValue }) => {
    try {
      const orders = await axios.post('/orders', currentOrder);
      return orders.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
