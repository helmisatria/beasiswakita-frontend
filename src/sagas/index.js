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

export default function * root () {
  yield all([
    takeLatest(
      AuthenticationTypes.LOGIN_REQUEST,
      Authentication(api).login
    ),

    takeLatest(
      ScholarshipTypes.GET_REQUEST,
      Scholarship(api).list
    ),

  ]);
}

// src/sagas/index.js
