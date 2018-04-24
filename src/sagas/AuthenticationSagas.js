/**
 * AuthenticationSagas Sagas
 */

import { call, put } from 'redux-saga/effects';

import { AuthenticationTypes } from '../reducers/AuthenticationRedux';

function* login(api, rootApi, action) {
  const { params } = action;

  const res = yield call(api.post.login, params);

  console.log('====================================');
  console.log(res);
  console.log('====================================');

  if (res.ok) {
    rootApi.setHeader('Authorization', `Bearer ${res.data.data.token}`);
    yield put({
      type: AuthenticationTypes.LOGIN_SUCCESS,
      owner: res.data.data.owner,
    });
  } else {
    yield put({
      type: AuthenticationTypes.LOGIN_FAILURE,
      message: res.message,
    });
  }
}

function* organization(api, rootApi, action) {
  const { params } = action;

  const res = yield call(api.post.register, params);

  if (res.ok) {
    rootApi.setHeader('Authorization', `Bearer ${res.data.data.token}`);
    yield put({
      type: AuthenticationTypes.ORGANIZATION_SUCCESS,
      data: res.data,
    });
  } else {
    yield put({
      type: AuthenticationTypes.ORGANIZATION_FAILURE,
      data: res.message,
    });
  }
}

function* student(api, rootApi, action) {
  const { params } = action;

  const res = yield call(api.post.register, params);

  if (res.ok) {
    rootApi.setHeader('Authorization', `Bearer ${res.data.data.token}`);
    yield put({
      type: AuthenticationTypes.STUDENT_SUCCESS,
      data: res.data,
    });
  } else {
    yield put({
      type: AuthenticationTypes.STUDENT_FAILURE,
      data: res.message,
    });
  }
}

function* current(api, action) {
  const { params } = action;

  const res = yield call(api.get.current, params);

  if (res.ok) {
    yield put({
      type: AuthenticationTypes.GET_USER_SUCCESS,
      data: res.data,
    });
  } else {
    yield put({
      type: AuthenticationTypes.GET_USER_FAILURE,
      data: res.message,
    });
  }
}

export const Authentication = (API) => {
  const { Authentication: api } = API;

  return {
    login: action => login(api, API, action),
    organization: action => organization(api, API, action),
    student: action => student(api, API, action),
    current: action => current(api, action),
  };
};

// src/sagas/AuthenticationSagas.js
