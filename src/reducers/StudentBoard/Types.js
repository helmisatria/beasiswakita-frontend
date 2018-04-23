/**
 * StudentBoard types list
 */

export const types = {
  createRequest: ['params'],
  createSuccess: ['data'],
  createFailure: ['message'],

  getRequest: [null],
  getSuccess: ['data'],
  getFailure: ['message'],

  updateRequest: ['params'],
  updateSuccess: ['data'],
  updateFailure: ['message'],

  changeRequest: ['params', 'id'],
  changeSuccess: ['data'],
  changeFailure: ['message'],

  deleteRequest: ['params'],
  deleteSuccess: ['data'],
  deleteFailure: ['message'],
}

// src/reducers/StudentBoard/Types.js
