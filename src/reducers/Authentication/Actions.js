/**
 * Authentication action list
 */

export const actions = {
  loginRequest: (state, { params }) =>
    state.merge({
      params,

      error: false,
      fetching: true,
      message: null
    }),

  loginSuccess: state =>
    state.merge({
      error: false,
      fetching: false,
      message: null
    }),

  loginFailure: (state, { message }) =>
    state.merge({
      error: true,
      fetching: false,
      message
    }),
};

// src/reducers/Authentication/Actions.js
