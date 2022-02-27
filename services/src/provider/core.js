import * as apiProvider from './provider';

export function ApiCore (resource) {
  
  this.getAll = (config = {}) => {
    return apiProvider.getAll(resource, config);
  };

  this.getSingle = (id, config = {}) => {
    return apiProvider.getSingle(resource, id, config);
  };

  this.post = (data = {}, config = {}) => {
    return apiProvider.post(resource, data, config);
  }

  this.put = (data = {}, config = {}) => {
    return apiProvider.put(resource, data, config);
  };

  this.patch = (data = {}, config = {}) => {
    return apiProvider.patch(resource, data, config);
  };

  this.remove = (data = {}, config = {}) => {
    return apiProvider.remove(resource, data, config);
  };

}