import { createSlice } from '@reduxjs/toolkit';

function initAction (state, actions) {
  state.isLoading = !state.isLoading;
}

function handleUserSuccessAction (state, actions) {
  state.error = null;
  state.user = actions.payload;
  state.isLoading = !state.isLoading;
}

function handleUserFailureAction (state, actions) {
  state.error = actions.payload;
  state.isLoading = !state.isLoading;
}

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {},
    isLoading: false,
    error: null,
  },
  reducers: {
    initUser: initAction,
    handleUserSuccess: handleUserSuccessAction,
    handleUserFailure: handleUserFailureAction,
  },
});

export const { handleUserSuccess, handleUserFailure, initUser } = userSlice.actions;

export default userSlice.reducer;
