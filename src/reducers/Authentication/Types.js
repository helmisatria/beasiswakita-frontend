/**
 * Authentication types list
 */

export const types = {
  loginRequest: ['params'],
  loginSuccess: ['data'],
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
}

// src/reducers/Authentication/Types.js
