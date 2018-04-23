/**
 * StudentBoard Redux
 */

import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

import { types } from './StudentBoard/Types';
import { reducers } from './StudentBoard/Reducers';
import { actions } from './StudentBoard/Actions';

const prefix = 'STUDENT_BOARD_';

const { Types, Creators } = createActions(types, { prefix });

export const StudentBoardTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  error: false,
  fetching: false,
  message: null
});

export const reducer =
  createReducer(INITIAL_STATE, reducers(Types, actions));

// src/reducers/StudentBoardRedux.js
