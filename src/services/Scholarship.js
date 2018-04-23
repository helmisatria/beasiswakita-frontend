/**
 * Scholarship services API
 */

export const ScholarshipService = (api) => {
  const get = {
    list: params =>
      api.get('scholarships', params),
  };

  const post = {
    create: params =>
      api.post('scholarships', params),
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

// src/services/Scholarship.js
