import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './slices/productSlice';
import loginModalSliceReducer from './slices/loginModalSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    loginModal: loginModalSliceReducer,
  },
});
