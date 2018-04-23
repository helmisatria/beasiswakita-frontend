/**
 * ScholarshipSagas Sagas
 */

import { call, put } from 'redux-saga/effects';

import { ScholarshipTypes } from '../reducers/ScholarshipRedux';

function* list(api, action) {
  const { params } = action;

  const res = yield call(api.get.list, params);

  if (res.ok) {
    yield put({
      type: ScholarshipTypes.GET_SUCCESS,
      data: res.data,
    });
  } else {
    yield put({
      type: ScholarshipTypes.GET_FAILURE,
      message: res.message,
    });
  }
}

function* create(api, action) {
  const { params } = action;

  const res = yield call(api.post.create, params);

  if (res.ok) {
    yield put({
      type: ScholarshipTypes.CREATE_SUCCESS,
      data: res.data,
    });
  } else {
    yield put({
      type: ScholarshipTypes.CREATE_FAILURE,
      message: res.message,
    });
  }
}

export const Scholarship = (API) => {
  const { Scholarship: api } = API;

  return {
    list: action => list(api, action),
    create: action => create(api, action),
  };
};

// src/sagas/ScholarshipSagas.js
