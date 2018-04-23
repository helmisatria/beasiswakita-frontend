/**
 * Authentication reducer list
 */

export const reducers = (types, actions) => ({
  [types.LOGIN_REQUEST]: actions.loginRequest,
  [types.LOGIN_SUCCESS]: actions.loginSuccess,
  [types.LOGIN_FAILURE]: actions.loginFailure,

  [types.STUDENT_REQUEST]: actions.studentRequest,
  [types.STUDENT_SUCCESS]: actions.studentSuccess,
  [types.STUDENT_FAILURE]: actions.studentFailure,

  [types.ORGANIZATION_REQUEST]: actions.organizationRequest,
  [types.ORGANIZATION_SUCCESS]: actions.organizationSuccess,
  [types.ORGANIZATION_FAILURE]: actions.organizationFailure,

  [types.GET_USER_REQUEST]: actions.getUserRequest,
  [types.GET_USER_SUCCESS]: actions.getUserSuccess,
  [types.GET_USER_FAILURE]: actions.getUserFailure,

});

// src/reducers/Authentication/Reducers.js
