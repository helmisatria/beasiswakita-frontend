/**
 * Scholarship reducer list
 */

export const reducers = (types, actions) => ({
  [types['GET_REQUEST']]: actions.getRequest,
  [types['GET_SUCCESS']]: actions.getSuccess,
  [types['GET_FAILURE']]: actions.getFailure,

  [types['CREATE_REQUEST']]: actions.createRequest,
  [types['CREATE_SUCCESS']]: actions.createSuccess,
  [types['CREATE_FAILURE']]: actions.createFailure,
});

// src/reducers/Scholarship/Reducers.js
