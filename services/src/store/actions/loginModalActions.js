import * as services from '../../services';
import {
  handleLoginModal,
  init as initAction,
  handleAuthenticationSuccess,
  handleAuthenticationFailure,
} from '../slices';

const { auth } = services;
export function handleLoginModalAction () {
  return (dispatch) => {
    dispatch(handleLoginModal());
  };
}

export function handleLoginAction (credential) {
  return (dispatch) => {
    dispatch(initAction());
    setTimeout(() => {
      dispatch(handleAuthenticationSuccess(credential));
     }, 2000);
    // dispatch(handleAuthenticationSuccess(credential));
    // services
    // console.log(credential, auth)
    // auth.post(credential)
  };
}
