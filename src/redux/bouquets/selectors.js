import { createSelector } from '@reduxjs/toolkit';

export const selectAllBouquets = state => state.bouquets.bouquets;
export const selectIsLoading = state => state.bouquets.isLoading;
export const selectFilters = state => state.bouquets.filters;

export const selectFilteredBouquets = createSelector(
  [selectFilters, selectAllBouquets],
  (filters, bouquets) => {
    return bouquets
      .filter(bouquet => {
        if (
          filters.flowerType &&
          !bouquet.composition.includes(filters.flowerType)
        ) {
          return false;
        }
        if (filters.bouquetType && bouquet.type !== filters.bouquetType) {
          return false;
        }
        return true;
      })
      .sort((a, b) => {
        if (filters.price === 'asc') {
          return a.price - b.price;
        } else if (filters.price === 'desc') {
          return b.price - a.price;
        } else {
          return 0;
        }
      });
  }
);
