import { createSlice } from '@reduxjs/toolkit';

function fetch (state, action) {
  state.products = action.payload
}

export const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    error: null
  },
  reducers: {
    fetchProducts: fetch,
  }
});

export const {  fetchProducts } = productSlice.actions; 

export default productSlice.reducer;
