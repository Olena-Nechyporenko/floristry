import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { cartProductsReducer } from './cartProductsSlice.js';
import { bouquetsReducer } from './bouquets/bouquetSlice.js';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['products'],
};
const persistedContactsReducer = persistReducer(
  persistConfig,
  cartProductsReducer
);

export const store = configureStore({
  reducer: {
    cartProducts: persistedContactsReducer,
    bouquets: bouquetsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);