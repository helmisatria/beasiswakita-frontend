/**
 * Authentication services API
 */

export const Authentication = (api) => {
  const get = {
    current: () =>
      api.get('me')
  };

  const post = {
    login: params =>
      api.post('login', params),
    register: params =>
      api.post('users', params),
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
