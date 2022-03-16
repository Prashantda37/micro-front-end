import { ApiCore } from '../provider';
import { setAuthData, setHeaders } from './authUtilities';

const url = 'login';

function AuthenticationService (resource) {
  ApiCore.call(this, resource);

  this.login = function (data) {
    return this.post(data).then((res) => {
      setHeaders(res.data);
      setAuthData({ ...res.data, domain_issuer: window.location.host });
      return res;
    });
  };
}

export const auth = new AuthenticationService(url);
