/**
 * StudentBoard reducer list
 */

export const reducers = (types, actions) => ({
  [types.GET_REQUEST]: actions.getRequest,
  [types.GET_SUCCESS]: actions.getSuccess,
  [types.GET_FAILURE]: actions.getFailure,

  [types.CREATE_REQUEST]: actions.createRequest,
  [types.CREATE_SUCCESS]: actions.createSuccess,
  [types.CREATE_FAILURE]: actions.createFailure,

  [types.UPDATE_REQUEST]: actions.updateRequest,
  [types.UPDATE_SUCCESS]: actions.updateSuccess,
  [types.UPDATE_FAILURE]: actions.updateFailure,

  [types.CHANGE_REQUEST]: actions.changeRequest,
  [types.CHANGE_SUCCESS]: actions.changeSuccess,
  [types.CHANGE_FAILURE]: actions.changeFailure,

  [types.DELETE_REQUEST]: actions.deleteRequest,
  [types.DELETE_SUCCESS]: actions.deleteSuccess,
  [types.DELETE_FAILURE]: actions.deleteFailure,

});

// src/reducers/StudentBoard/Reducers.js
