import React from 'react';
import axios from 'axios';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { store } from './index';

// this is used for services
import apiUtils from '../utils';
const BASE_URL = process.env.API_URL || 'https://fakestoreapi.com';
axios.defaults.baseURL = BASE_URL;
apiUtils.setBaseUrl(BASE_URL);
apiUtils.init();

export function useStore(storeName) {
  const currentState = useSelector((state) => state[storeName]);
  const dispatcher = useDispatch();
  return { currentState, dispatcher };
}

export function StoreProvider ({children}) {
  return <Provider store={ store }>{children}</Provider>
};