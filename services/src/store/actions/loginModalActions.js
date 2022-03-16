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
    auth.login(credential).then((res) => {
      dispatch(handleAuthenticationSuccess(res?.data));
    }).catch((error) => {
      dispatch(handleAuthenticationFailure(error.response.data));
    });
  };
}
