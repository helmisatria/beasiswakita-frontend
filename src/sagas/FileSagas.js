/**
 * FileSagas Sagas
 */

import { call, put } from 'redux-saga/effects';

import { FileTypes } from '../reducers/FileRedux';

function* upload(api, action) {
  const { params } = action;

  const res = yield call(api.post.upload, params);

  if (res.ok) {
    yield put({
      type: FileTypes.UPLOAD_SUCCESS,
      data: res.data,
    });
  } else {
    yield put({
      type: FileTypes.UPLOAD_FAILURE,
      message: res.message,
    });
  }
}

export const File = (API) => {
  const { File: api } = API;

  return {
    upload: action => upload(api, action),
  };
};

// src/sagas/FileSagas.js
