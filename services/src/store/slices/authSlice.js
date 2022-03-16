import { createSlice } from '@reduxjs/toolkit';

function initAction (state, actions) {
  state.isLoading = !state.isLoading;
}

function handleAuthSuccessAction (state, actions) {
  state.error = null;
  state.authUser = actions.payload;
  state.isLoading = !state.isLoading;
}

function handleAuthFailureAction (state, actions) {
  state.error = actions.payload;
  state.isLoading = !state.isLoading;
}

export const authSlice = createSlice({
  name: 'authentication',
  initialState: {
    authUser: {},
    isLoading: false,
    error: null,
  },
  reducers: {
    init: initAction,
    handleAuthenticationSuccess: handleAuthSuccessAction,
    handleAuthenticationFailure: handleAuthFailureAction,
  },
});

export const { handleAuthenticationSuccess, handleAuthenticationFailure, init } = authSlice.actions;

export default authSlice.reducer;
