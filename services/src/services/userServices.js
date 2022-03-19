import { ApiCore } from '../provider';

const url = 'users';
function UserServices (resource) {
  ApiCore.call(this, resource);

  this.createAccount = function (data) {
    return this.post(data);
  };
}

export const users = new UserServices(url);
