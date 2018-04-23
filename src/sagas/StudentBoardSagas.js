/**
 * StudentBoardSagas Sagas
 */

import { call, put } from 'redux-saga/effects';

import { StudentBoardTypes } from '../reducers/StudentBoardRedux';

function * create(api, action) {
  const { params } = action;

  const res = yield call(api.post.create, params);

  if (res.ok) {
    yield put({
      type: StudentBoardTypes.CREATE_SUCCESS,
      data: res.data
    });
  } else {
    yield put({
      type: StudentBoardTypes.CREATE_FAILURE,
      message: res.message
    });
  };
}

function * get(api, action) {
  const res = yield call(api.get.boards);

  if (res.ok) {
    yield put({
      type: StudentBoardTypes.GET_SUCCESS,
      data: res.data
    });
  } else {
    yield put({
      type: StudentBoardTypes.GET_FAILURE,
      message: res.message
    });
  };
}

function * update(api, action) {
  const { params } = action;

  const res = yield call(api.put.update, params);

  if (res.ok) {
    yield put({
      type: StudentBoardTypes.UPDATE_SUCCESS,
      data: res.data
    });
  } else {
    yield put({
      type: StudentBoardTypes.UPDATE_FAILURE,
      message: res.message
    });
  };
}

function * change(api, action) {
  const { params, id } = action;

  const res = yield call(api.patch.change, [params, id]);

  if (res.ok) {
    yield put({
      type: StudentBoardTypes.CHANGE_SUCCESS,
      data: res.data
    });
  } else {
    yield put({
      type: StudentBoardTypes.CHANGE_FAILURE,
      message: res.message
    });
  };
}

function * delete(api, action) {
  const { params } = action;

  const res = yield call(api.delete.boards, params);

  if (res.ok) {
    yield put({
      type: StudentBoardTypes.DELETE_SUCCESS,
      data: res.data
    });
  } else {
    yield put({
      type: StudentBoardTypes.DELETE_FAILURE,
      message: res.message
    });
  };
}

export const StudentBoard = (API) => {
  const { StudentBoard:api } = API;

  return {
    create: action => create(api, action),
    get: action => get(api, action),
    update: action => update(api, action),
    change: action => change(api, action),
    delete: action => delete(api, action),
  }
};

// src/sagas/StudentBoardSagas.js
