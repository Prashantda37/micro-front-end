import React from 'react';
import { useStore } from 'store/store';

export function NavigationBar (props) {
  const { currentState } = useStore('products');
  return (
    <nav className="flex bg-blue-500 p-1 px-2 text-white">
      <div className="mr-3">
        Home
      </div>
      <div className="mr-3">
        Products
      </div>
      <div className="mr-3">
        Contact
      </div>
      <div className="ml-auto">
        {/* <i className="fa fa-user-plus"></i>
        {' '}
        Sign In */}
        {/* card (
        {currentState.products.length}
        ) */}
      </div>
    </nav>
  );
}
