import React from 'react';
import {
  Switch,
  Route,
  Routes,
} from 'react-router-dom';
import { useIsAuthenticated } from 'store/store';
import { Header } from '../header';
import { Footer } from '../footer';
import Routing from '../routing';

function AppContainer (props) {
  useIsAuthenticated();

  return (
    <div className="">
      <Header />
      <div className="container pt-6">
        <Routing />
      </div>
      <Footer />
    </div>
  );
}

export default AppContainer;
