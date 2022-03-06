import { ApiCore } from '../provider';

const url = '/login';

function AuthenticationService (resource) {
  ApiCore.call(this, resource);
}

export const auth = new AuthenticationService(url);
