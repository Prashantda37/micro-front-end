import axios from 'axios';

/** @param {string} resource */
/** @param {object} config */

export const getAll = (resource, config = {}) => {
  return axios.get(`${resource}`, config);
};

/** @param {string} resource */
/** @param {string} id */
/** @param {object} config */

export const getSingle = (resource, id, config = {}) => {
  return axios.get(`/${resource}/${id}`, config);
};

/** @param {string} resource */
/** @param {object} body */

export const post = (resource, data = {}, options = {}) => {
  return axios.post(`/${resource}`, data, options.config);
};

/** @param {string} resource */
/** @param {object} data */

export const put = (resource, data = {}, options = {}) => {
  const resourceUrl = options?.resourceID
    ? `${resource}/${options.resourceID}`
    : resource;

  return axios.put(`/${resourceUrl}`, data, options.config);
};

/** @param {string} resource */
/** @param {object} data */

export const patch = (resource, data = {}, options = {}) => {
  const resourceUrl = options?.resourceID
    ? `${resource}/${options.resourceID}`
    : resource;

  return axios.patch(`/${resourceUrl}`, data, options.config);
};

/** @param {string} resource */
/** @param {string} id */

export const remove = (resource, data = {}, config = {}) => {
  const resourceUrl = config?.resourceID
    ? `${resource}/${config.resourceID}`
    : resource;

  return axios.delete(`/${resourceUrl}`, data);
};
