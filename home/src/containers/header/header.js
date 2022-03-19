import React, { Suspense } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
      <div>
        <Button variant="outline-secondar" onClick={ isLoginModalOpen }>
          Sign In
        </Button>
        <Link to="/sign-up">
          <Button variant="outline-secondar">
            Sign Up
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="border-t-4 border-orange-500 bg-gray-100 p-1">
      <div className="container flex">
        <Link to="/">
          <div className="text-2xl mr-4 text-orange-600">
            Stack
            {' '}
            <span className="font-bold text-black">Overflow</span>
          </div>
        </Link>
        <div className="flex pt-2 text-sm text-gray-500">
          <div className="mr-2">
            About
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
    </div>
  );
}
