/**
 * Beasiswa Kita main sagas
 */

import { takeLatest, all } from 'redux-saga/effects';

import { apiCreate } from '../services';

// Redux types
import { AuthenticationTypes } from '../reducers/AuthenticationRedux';
import { StudentBoardTypes } from '../reducers/StudentBoardRedux';
import { ScholarshipTypes } from '../reducers/ScholarshipRedux';

// Sagas functions
import { Authentication } from './AuthenticationSagas';
import { StudentBoard } from './StudentBoardSagas';
import { Scholarship } from './ScholarshipSagas';

const api = apiCreate();

export default function* root() {
  yield all([
    // Authentication
    takeLatest(
      AuthenticationTypes.LOGIN_REQUEST,
      Authentication(api).login
    ),

    // Scholarship
    takeLatest(
      ScholarshipTypes.GET_REQUEST,
      Scholarship(api).list,
    ),

    // StudentBoard
    takeLatest(
      StudentBoardTypes.CREATE_REQUEST,
      StudentBoard(api).create
    ),

    takeLatest(
      StudentBoardTypes.GET_REQUEST,
      StudentBoard(api).get
    ),

    takeLatest(
      StudentBoardTypes.UPDATE_REQUEST,
      StudentBoard(api).update
    ),

    takeLatest(
      StudentBoardTypes.CHANGE_REQUEST,
      StudentBoard(api).change
    ),

    takeLatest(
      StudentBoardTypes.DELETE_REQUEST,
      StudentBoard(api).delete
    ),

  ]);
}

// src/sagas/index.js
