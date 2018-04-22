#!/usr/bin/env bash

touch ../src/sagas/$1Sagas.js

cat <<EOF >> ../src/sagas/$1Sagas.js
/**
 * $1Sagas Sagas
 */

import { call, put } from 'redux-saga/effects';

import { $1Types } from '../reducers/$1Redux';

export const $1 = (API) => {
  const { $1:api } = API;

  return {

  }
};

// src/sagas/$1Sagas.js
EOF

gsed -i "/\/\/ Redux types/ {
a\import { $1Types } from '../reducers/$1Redux';
}" ../src/sagas/index.js

gsed -i "/\/\/ Sagas functions/ {
a\import { $1 } from './$1Sagas';
}" ../src/sagas/index.js
