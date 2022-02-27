import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios';
import apiUtils from './utils';
import { fetchProductsAction } from './store/actions';
import { StoreProvider, useStore } from './store/storeProvider';
const BASE_URL = process.env.API_URL || 'https://fakestoreapi.com';
axios.defaults.baseURL = BASE_URL;
apiUtils.setBaseUrl(BASE_URL);
apiUtils.init();

import "./index.css";

const App = () => {
  const { currentState, dispatcher } = useStore('products');

  return (
    <div className="container">
      <div className="text-2xl">Current State: </div>
      <button onClick={ () => dispatcher(fetchProductsAction()) }>Fetch Products</button>
      {
        currentState?.products.map((item) => {
          return (
            <div key={item.id}>{item.title}</div>
          )
        })
      }
    </div>
  );
};
ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>, 
  document.getElementById("app"));
