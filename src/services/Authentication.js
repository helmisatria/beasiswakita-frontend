/**
 * Authentication services API
 */

export const Authentication = (api) => {
  const get = {
  };

  const post = {
    login: params =>
      api.post('login', params)
  };

  const put = {
  };

  const patch = {
  };

  const _delete = {
  };

  return {
    get,
    post,
    put,
    patch,
    delete: _delete
  };
};

// src/services/Authentication.js
