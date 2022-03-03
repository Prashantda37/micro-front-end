import React from 'react';
import { Button } from 'react-bootstrap';
import { handleLoginModalAction } from 'store/actions';
import { useStore } from 'store/store';
import { FA, LoginModal } from '../../components';

export function Header (props) {
  const { currentState, dispatcher } = useStore('loginModal');

  function isLoginModalOpen () {
    dispatcher(handleLoginModalAction());
  }

  function _renderLoginModal () {
    if (currentState.isLoginModalOpen) {
      return <LoginModal isOpen={ currentState.isLoginModalOpen } toggle={ isLoginModalOpen } />;
    }
    return null;
  }
  return (
    <div className="flex border-t-2 border-black bg-gray-100 p-1">
      <div className="text-3xl mr-2 text-red-800">
        HotSkill
      </div>
      <div className="flex pt-2 text-sm font-bold text-gray-500">
        <div className="mr-1">
          Categories
        </div>
        <div className="mr-1">
          |
        </div>
        <div>
          Products
        </div>
      </div>
      <div className="ml-auto text-sm">
        <Button variant="secondary" onClick={ isLoginModalOpen }>
          <FA icon={ ['fa', 'user'] } />
        </Button>
      </div>
      {_renderLoginModal()}
    </div>
  );
}
