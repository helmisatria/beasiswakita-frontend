import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

// Reducers
import { reducer as scholarship } from '../reducers/ScholarshipRedux';

import rootSagas from '../sagas';

// Combine Reducers
const reducers = {
  scholarship,
};

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

export default () => {
  const store = createStore(
    combineReducers(reducers),
    //composeEnhancers(applyMiddleware(thunk)),
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(rootSagas);

  return store;
};

// use this when not using compose or redux thunk!
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
/* eslint-enable */
