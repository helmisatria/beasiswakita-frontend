/**
 * Scholarship Redux
 */

import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

import { types } from './Scholarship/Types';
import { reducers } from './Scholarship/Reducers';
import { actions } from './Scholarship/Actions';

const prefix = 'SCHOLARSHIP_';

const { Types, Creators } = createActions(types, { prefix });

export const ScholarshipTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  error: false,
  fetching: false,
  message: null
});

export const reducer =
  createReducer(INITIAL_STATE, reducers(Types, actions));

// src/reducers/ScholarshipRedux.js
