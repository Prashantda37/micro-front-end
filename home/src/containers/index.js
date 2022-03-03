import React from 'react';
import ReactDOM from 'react-dom';
import { StoreProvider } from 'store/store';
import AppContainer from './app';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.scss';

import '../fontsConfig';

// const App = () => {
//   return (
//     <div className="mt-2 px-6">
//       <div className="text-3xl">Logo</div>
//       <NavigationBar />
//       {/* <Products /> */}
//       {/* <LoginModal isOpen /> */}
//     </div>
//   );
// };
ReactDOM.render(
  <StoreProvider>
    <AppContainer />
  </StoreProvider>,
  document.getElementById('app'),
);
