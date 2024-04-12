import { createSlice } from '@reduxjs/toolkit';
import { fetchBouquets, getBouquetById } from './operations';

const bouquetsSlice = createSlice({
  name: 'bouquets',
  initialState: {
    filters: {
      flowerType: '',
      price: '',
      bouquetType: '',
    },
    bouquets: [],
    currentBouquet: {},
    isLoading: false,
    error: null,
  },
  reducers: {
    setFilters(state, action) {
      state.filters.flowerType = action.payload.flowerType;
      state.filters.price = action.payload.price;
      state.filters.bouquetType = action.payload.bouquetType;
    },
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

export const { setFilters } = bouquetsSlice.actions;

export const bouquetsReducer = bouquetsSlice.reducer;
