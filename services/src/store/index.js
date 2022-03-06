import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './slices/productSlice';
import loginModalReducer from './slices/loginModalSlice';
import authReducer from './slices/authSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    loginModal: loginModalReducer,
    authentication: authReducer,
  },
});
