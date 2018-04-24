/**
 * File Redux
 */

import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

import { types } from './File/Types';
import { reducers } from './File/Reducers';
import { actions } from './File/Actions';

const prefix = 'FILE_';

const { Types, Creators } = createActions(types, { prefix });

export const FileTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  error: false,
  fetching: false,
  message: null,
});

export const reducer =
  createReducer(INITIAL_STATE, reducers(Types, actions));

// src/reducers/FileRedux.js
