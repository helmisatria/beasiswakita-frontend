/**
 * StudentBoard action list
 */

export const actions = {
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


  updateRequest: (state, { params }) =>
    state.merge({
      params,

      error: false,
      fetching: true,
      message: null
    }),

  updateSuccess: (state, { data }) =>
    state.merge({
      data,

      error: false,
      fetching: false,
      message: null
    }),

  updateFailure: (state, { message }) =>
    state.merge({
      error: true,
      fetching: false,
      message
    }),


  changeRequest: (state, { params, id }) =>
    state.merge({
      id,
      params,

      error: false,
      fetching: true,
      message: null
    }),

  changeSuccess: (state, { data }) =>
    state.merge({
      data,

      error: false,
      fetching: false,
      message: null
    }),

  changeFailure: (state, { message }) =>
    state.merge({
      error: true,
      fetching: false,
      message
    }),


  deleteRequest: (state, { params }) =>
    state.merge({
      params,

      error: false,
      fetching: true,
      message: null
    }),

  deleteSuccess: (state, { data }) =>
    state.merge({
      data,

      error: false,
      fetching: false,
      message: null
    }),

  deleteFailure: (state, { message }) =>
    state.merge({
      error: true,
      fetching: false,
      message
    }),
};

// src/reducers/StudentBoard/Actions.js
