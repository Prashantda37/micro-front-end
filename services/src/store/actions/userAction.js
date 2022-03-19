import * as services from '../../services';
import { initUser, handleUserFailure, handleUserSuccess } from '../slices/userSlice';

export function userAction (data) {
  return (dispatch) => {
    dispatch(initUser());
    services.users.createAccount(data).then((res) => {
      dispatch(handleUserSuccess(res.data));
    }).catch(error => dispatch(handleUserFailure(error)));
  };
}
