import React from 'react';
import axios from 'axios';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { store } from './index';
import { readCookie, setHeaders } from '../services';
import { APP } from '../constants';
// REDUCER
import {
  init as initAction,
  handleAuthenticationSuccess,
} from './slices';
// This is used for services
import apiUtils from '../utils';

const { storageName } = APP;

const BASE_URL = process.env.API_URL_DEV || 'http://localhost:3737/v1';
axios.defaults.baseURL = BASE_URL;
apiUtils.setBaseUrl(BASE_URL);
apiUtils.init();

export function useStore (storeName) {
  const currentState = useSelector(state => state[storeName] || state);
  const dispatcher = useDispatch();
  return { currentState, dispatcher };
}

export function StoreProvider ({ children }) {
  return <Provider store={ store }>{children}</Provider>;
}

export function useIsAuthenticated () {
  const { authUser } = useSelector(state => state.authentication);
  const dispatcher = useDispatch();
  const isCookies = readCookie(storageName.autherizationData);
  if (Object.keys(authUser).length === 0 && isCookies) {
    const data = JSON.parse(isCookies);
    dispatcher(initAction());
    dispatcher(handleAuthenticationSuccess(data));
    setHeaders(data);
  }
}
