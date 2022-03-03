import { createSlice } from '@reduxjs/toolkit';

function handleLogin (state) {
  state.isLoginModalOpen = !state.isLoginModalOpen;
}

export const loginModalSlice = createSlice({
  name: 'loginModal',
  initialState: {
    isLoginModalOpen: false,
  },
  reducers: {
    handleLoginModal: handleLogin,
  },
});

export const { handleLoginModal } = loginModalSlice.actions;

export default loginModalSlice.reducer;
