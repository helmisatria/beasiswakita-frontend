/**
 * Authentication reducer list
 */

export const reducers = (types, actions) => ({
  [types.LOGIN_REQUEST]: actions.loginRequest,
  [types.LOGIN_SUCCESS]: actions.loginSuccess,
  [types.LOGIN_FAILURE]: actions.loginFailure,
});

// src/reducers/Authentication/Reducers.js
