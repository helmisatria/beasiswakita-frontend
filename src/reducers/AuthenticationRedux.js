/**
 * Authentication Redux
 */

import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

import { types } from './Authentication/Types';
import { reducers } from './Authentication/Reducers';
import { actions } from './Authentication/Actions';

const prefix = 'AUTHENTICATION_';

const { Types, Creators } = createActions(types, { prefix });

export const AuthenticationTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  error: false,
  fetching: false,
  message: null
});

export const reducer =
  createReducer(INITIAL_STATE, reducers(Types, actions));

// src/reducers/AuthenticationRedux.js
