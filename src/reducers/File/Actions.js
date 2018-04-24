/**
 * File action list
 */

export const actions = {
  uploadRequest: (state, { params }) =>
    state.merge({
      params,

      error: false,
      fetching: true,
      message: null,
    }),

  uploadSuccess: (state, { data }) =>
    state.merge({
      data,

      error: false,
      fetching: false,
      message: null,
    }),

  uploadFailure: (state, { message }) =>
    state.merge({
      error: true,
      fetching: false,
      message,
    }),
};

// src/reducers/File/Actions.js
