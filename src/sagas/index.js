/**
 * Beasiswa Kita main sagas
 */

import { takeLatest, all } from 'redux-saga/effects';

import { apiCreate } from '../services';

// Redux types
import { ScholarshipTypes } from '../reducers/ScholarshipRedux';

// Sagas functions
import { Scholarship } from './ScholarshipSagas';

const api = apiCreate();

export default function * root () {
  yield all([

    takeLatest(
      ScholarshipTypes.GET_REQUEST,
      Scholarship(api).list
    ),

  ]);
}

// src/sagas/index.js
