import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './slices/productSlice';
import loginModalReducer from './slices/loginModalSlice';
import authReducer from './slices/authSlice';
import userReducer from './slices/userSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    loginModal: loginModalReducer,
    authentication: authReducer,
    user: userReducer,
  },
});
