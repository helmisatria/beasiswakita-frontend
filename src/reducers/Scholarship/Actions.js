/**
 * Scholarship action list
 */

export const actions = {
  getRequest: state =>
    state.merge({
      error: false,
      fetching: true,
      message: null
    }),

  getSuccess: (state, { data }) =>
    state.merge({
      data,

      error: false,
      fetching: false,
      message: null
    }),

  getFailure: (state, { message }) =>
    state.merge({
      error: true,
      fetching: false,
      message
    }),

  createRequest: (state, { params }) =>
    state.merge({
      params, 

      error: false,
      fetching: true,
      message: null
    }),

  createSuccess: (state, { data }) =>
    state.merge({
      data,

      error: false,
      fetching: false,
      message: null
    }),

  createFailure: (state, { message }) =>
    state.merge({
      error: true,
      fetching: false,
      message
    }),
};

// src/reducers/Scholarship/Actions.js
