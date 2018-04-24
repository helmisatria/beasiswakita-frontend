/**
 * Authentication action list
 */

export const actions = {
  loginRequest: (state, { params }) =>
    state.merge({
      params,

      error: false,
      fetching: true,
      message: null,
    }),

  loginSuccess: (state, { owner }) =>
    state.merge({
      owner,

      error: false,
      fetching: false,
      message: null,
    }),

  loginFailure: (state, { message }) =>
    state.merge({
      error: true,
      fetching: false,
      message,
    }),

  studentRequest: (state, { params }) =>
    state.merge({
      params,

      error: false,
      fetching: true,
      message: null,
    }),

  studentRequest: (state, { data }) =>
    state.merge({
      error: false,
      fetching: false,
      message: null,
    }),

  studentFailure: (state, { message }) =>
    state.merge({
      error: true,
      fetching: false,
      message,
    }),

  organizationRequest: (state, { params }) =>
    state.merge({
      params,

      error: false,
      fetching: true,
      message: null,
    }),

  organizationSuccess: (state, { data }) =>
    state.merge({
      error: false,
      fetching: false,
      message: null,
    }),

  organizationFailure: (state, { message }) =>
    state.merge({
      error: true,
      fetching: false,
      message,
    }),

  getUserRequest: (state, { params }) =>
    state.merge({
      params,

      error: false,
      fetching: true,
      message: null,
    }),

  getUserSuccess: (state, { data }) =>
    state.merge({
      error: false,
      fetching: false,
      message: null,
    }),

  getUserFailure: (state, { message }) =>
    state.merge({
      error: true,
      fetching: false,
      message,
    }),
};

// src/reducers/Authentication/Actions.js
