import React from "react";
import ReactDOM from "react-dom";
import { StoreProvider } from 'store/store';
import "./index.scss";
import { NavigationBar } from './components';
import { Products } from 'components/app'; 

const App = () => {
  
  return  (
    <div className="mt-2 px-6">
      <div className="text-3xl">Logo</div>
      <NavigationBar />
      <Products />
    </div>
  )
};
ReactDOM.render(<StoreProvider><App /></StoreProvider>, document.getElementById("app"));