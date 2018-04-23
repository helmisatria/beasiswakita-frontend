/**
 * StudentBoard services API
 */

export const StudentBoard = (api) => {
  const get = {
    boards: () =>
      api.get('boards')
  };

  const post = {
    create: params =>
      api.post('boards', params)
  };

  const put = {
    update: params =>
      api.put('boards', params)
  };

  const patch = {
    change: (id, params) =>
      api.patch(`boards/${id}/state`, params)
  };

  const _delete = {
    boards: params =>
      api.delete('boards', params)
  };

  return {
    get,
    post,
    put,
    patch,
    delete: _delete
  };
};

// src/services/StudentBoard.js
