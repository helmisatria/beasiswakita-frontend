import React from 'react';

import {
  Route,
  Redirect,
} from 'react-router-dom';

import Auth from './Auth';

export default ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      Auth.authenticate();
      if (Auth.isStudent) {
        return (
          <Component {...props} />
        );
      }
      return (<Redirect to="/login" />);
    }}
  />
);
