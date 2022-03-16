import React, { Suspense } from 'react';
import { Button } from 'react-bootstrap';
import { handleLoginModalAction } from 'store/actions';
import { useStore } from 'store/store';
import { FA } from '../../components';

const LoginModal = React.lazy(() => import('../../components/modal/login'));

function RenderSuspense ({ children }) {
  return (
    <Suspense fallback={ <div>Loading...</div> }>
      { children }
    </Suspense>
  );
}

export function Header (props) {
  const { currentState: { loginModal, authentication }, dispatcher } = useStore();

  function isLoginModalOpen () {
    dispatcher(handleLoginModalAction());
  }

  function _renderLoginModal () {
    if (loginModal.isLoginModalOpen) {
      return (
        <RenderSuspense fallback={ <div>Loading...</div> }>
          <LoginModal isOpen={ loginModal.isLoginModalOpen } toggle={ isLoginModalOpen } />
        </RenderSuspense>
      );
    }
    return null;
  }

  function _renderProfile () {
    const { authUser } = authentication;
    if (authUser?.name) {
      const name = authUser?.name.match(/\b(\w)/g);
      return (
        <div className="bg-gray-400 border-2 border-gray-500 font-bold rounded-full p-2 text-white">
          { name.join('') }
        </div>
      );
    }
    return (
      <Button variant="outline-secondar" onClick={ isLoginModalOpen }>
        <FA icon={ ['fa', 'fa-sign-in'] } />
      </Button>
    );
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
        { _renderProfile() }
      </div>
      {_renderLoginModal()}
    </div>
  );
}
