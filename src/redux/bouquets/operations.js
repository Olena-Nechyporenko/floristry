import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://floristry-backend.onrender.com/api/';

export const fetchBouquets = createAsyncThunk(
  'bouquets/fetchBouquets',
  async (_, { rejectWithValue }) => {
    try {
      const bouquets = await axios.get('/bouquets');
      return bouquets.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const getBouquetById = createAsyncThunk(
  'bouquets/getBouquetById',
  async (bouquetId, { rejectWithValue }) => {
    try {
      const bouquet = await axios.get(`/bouquets/${bouquetId}`);
      return bouquet.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
