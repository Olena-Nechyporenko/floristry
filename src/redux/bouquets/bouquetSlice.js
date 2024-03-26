import { createSlice } from '@reduxjs/toolkit';
import { fetchBouquets, getBouquetById } from './operations';

const bouquetsSlice = createSlice({
  name: 'bouquets',
  initialState: {
    bouquets: [],
    currentBouquet: {},
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchBouquets.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchBouquets.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchBouquets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.bouquets = action.payload;
      })
      .addCase(getBouquetById.pending, state => {
        state.isLoading = true;
      })
      .addCase(getBouquetById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getBouquetById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.currentBouquet = action.payload;
      });
  },
});

export const bouquetsReducer = bouquetsSlice.reducer;
