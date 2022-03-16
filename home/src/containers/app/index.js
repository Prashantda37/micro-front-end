import React from 'react';
import { useIsAuthenticated } from 'store/store';
import { Header } from '../header';

function AppContainer (props) {
  useIsAuthenticated();

  return (
    <div className="">
      <Header />
      App
    </div>
  );
}

export default AppContainer;
