#!/usr/bin/env bash

touch "../src/reducers/$1Redux.js"

cat <<EOF >> ../src/reducers/$1Redux.js
/**
 * $1 Redux
 */

import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

import { types } from './$1/Types';
import { reducers } from './$1/Reducers';
import { actions } from './$1/Actions';

const prefix = '$2_';

const { Types, Creators } = createActions(types, { prefix });

export const $1Types = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  error: false,
  fetching: false,
  message: null
});

export const reducer =
  createReducer(INITIAL_STATE, reducers(Types, actions));

// src/reducers/$1Redux.js
EOF


mkdir "../src/reducers/$1"

touch "../src/reducers/$1/Actions.js"
cat <<EOF >> ../src/reducers/$1/Actions.js
/**
 * $1 action list
 */

export const actions = {

};

// src/reducers/$1/Actions.js
EOF

touch "../src/reducers/$1/Reducers.js"
cat <<EOF >> ../src/reducers/$1/Reducers.js
/**
 * $1 reducer list
 */

export const reducers = (types, actions) => ({

});

// src/reducers/$1/Reducers.js
EOF

touch "../src/reducers/$1/Types.js"
cat <<EOF >> ../src/reducers/$1/Types.js
/**
 * $1 types list
 */

export const types = {

}

// src/reducers/$1/Types.js
EOF

gsed -i "/\/\/ Reducers/ {
a\import { reducer as $1 } from '../reducers/$1Redux';
}" ../src/store/configureStore.js

gsed -i "/const reducers = {/a\ \t$1," ../src/store/configureStore.js
