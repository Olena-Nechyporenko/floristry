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
import { cartProductsReducer } from './cart/cartProductsSlice.js';
import { bouquetsReducer } from './bouquets/bouquetSlice.js';
import { authReducer } from './auth/slice.js';
import { ordersReducer } from './orders/ordersSlice.js';

const cartPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['products', 'currentOrder'],
};

const orderPersistConfig = {
  key: 'orders',
  storage,
  whitelist: ['currentOrder'],
};

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    cartProducts: persistReducer(cartPersistConfig, cartProductsReducer),
    bouquets: bouquetsReducer,
    orders: persistReducer(orderPersistConfig, ordersReducer),
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
