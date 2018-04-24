/**
 * File reducer list
 */

export const reducers = (types, actions) => ({
  [types.UPLOAD_REQUEST]: actions.uploadRequest,
  [types.UPLOAD_SUCCESS]: actions.uploadSuccess,
  [types.UPLOAD_FAILURE]: actions.uploadFailure,
});

// src/reducers/File/Reducers.js
