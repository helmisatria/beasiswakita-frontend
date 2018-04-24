/**
 * Authentication types list
 */

export const types = {
  loginRequest: ['params'],
  loginSuccess: ['owner'],
  loginFailure: ['message'],

  studentRequest: ['params'],
  studentSuccess: ['data'],
  studentFailure: ['message'],

  organizationRequest: ['params'],
  organizationSuccess: ['data'],
  organizationFailure: ['message'],

  getUserRequest: [null],
  getUserSuccess: ['data'],
  getUserFailure: ['message'],
};

// src/reducers/Authentication/Types.js
