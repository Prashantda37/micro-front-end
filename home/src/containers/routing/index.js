import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Home from '../../pages/home';
import SignUp from '../../pages/signUp';

function Routing () {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/sign-up" element={ <SignUp /> } />
    </Routes>
  );
}

export default Routing;
