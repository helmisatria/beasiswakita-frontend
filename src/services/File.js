/**
 * File services API
 */

export const File = (api) => {
  const get = {

  };

  const post = {
    upload: params =>
      api.post('uploads', params, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }),
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
    delete: _delete,
  };
};

// src/services/File.js
