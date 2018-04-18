import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// Reducers
// import listPesananReducer from '../reducers/listPesanan';
// import prosesPesananReducer from '../reducers/prosesPesanan';
// import tokoReducer from '../reducers/home';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      // listPesanan: listPesananReducer,
      // toko: tokoReducer,
      // prosesPesanan: prosesPesananReducer,
    }),
    composeEnhancers(applyMiddleware(thunk)),
  );

  return store;
};

// use this when not using compose or redux thunk!
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
/* eslint-enable */
