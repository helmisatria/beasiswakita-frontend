/**
 * AuthenticationSagas Sagas
 */

import { call, put } from 'redux-saga/effects';

import { AuthenticationTypes } from '../reducers/AuthenticationRedux';

function * login(api, rootApi, action) {
  const { params } = action;

  const res = yield call(api.post.login, params);

  if (res.ok) {

    rootApi.setHeader('Authorization', `Bearer ${res.data.data.token}`);
    yield put({
      type: AuthenticationTypes.LOGIN_SUCCESS
    });

  } else {
    yield put({
      type: AuthenticationTypes.LOGIN_FAILURE,
      message: res.message
    });
  };
};

export const Authentication = (API) => {
  const { Authentication:api } = API;

  return {
    login: action => login(api, API, action),
  }
};

// src/sagas/AuthenticationSagas.js
