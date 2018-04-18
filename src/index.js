import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import AppRouter from './router/AppRouter';

import './dist/css/index.css';

const store = configureStore();

const Jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(Jsx, document.getElementById('root'));
