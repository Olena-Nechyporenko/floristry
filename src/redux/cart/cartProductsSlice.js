import { createSlice } from '@reduxjs/toolkit';

const cartProductsSlice = createSlice({
  name: 'cartProducts',
  initialState: {
    products: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    addToCart(state, action) {
      state.products.push(action.payload);
    },

    removeFromCart(state, action) {
      state.products = state.products.filter(
        product => product._id !== action.payload
      );
    },

    increaseQuantity(state, action) {
      const { _id } = action.payload;
      const productToUpdate = state.products.find(
        product => product._id === _id
      );
      productToUpdate.quantity++;
      return state;
    },
    changeQuantity(state, action) {
      const { productId, quantity } = action.payload;
      console.log(action.payload);
      const updatedProducts = state.products.map(product => {
        if (product._id === productId) {
          return { ...product, quantity };
        }
        return product;
      });
      return { ...state, products: updatedProducts };
    },
    removeAllFromCart(state, action) {
      state.products = [];
    },
  },
});

export const cartProductsReducer = cartProductsSlice.reducer;
export const {
  addToCart,
  removeFromCart,
  changeQuantity,
  increaseQuantity,
  removeAllFromCart,
} = cartProductsSlice.actions;
