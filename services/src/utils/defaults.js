import axios from 'axios';

export function init () {
  interceptors();
  defaults();
}

function interceptors () {
  axios.interceptors.response.use((response) => {
    if (response.status >= 400) {
      throw response;
    } else {
      return response;
    }
  }, (error) => {
    if (error.data) {
      _logError(error);
    }
    return Promise.reject(error);
  });
}

function defaults () {
  axios.defaults.validateStatus = status => status < 400;
}

export function setBaseUrl (url) {
  axios.defaults.baseURL = url;
}

function _logError (error) {
  axios.post('/logging/clientError', error);
}
