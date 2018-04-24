import React from 'react';
import {
  Redirect,
} from 'react-router-dom';

export default {
  isStudent: false,
  isPartner: false,

  authenticate(cb) {
    // const token = window.localStorage.getItem('token');
    if (this.props.owner.role === 'student') {
      this.isStudent = true;
    } else if (this.props.owner.role === 'organization') {
      this.isPartner = true;
    } else {
      return (<Redirect to="/login" />);
    }
    // jwt.verify(token, jwtKey, (err, user) => {
    //   if (err) {
    //     return (<Redirect to="/login" />);
    //   }
    //   if (user) {
    //     this.isAuthenticated = true;
    //   }
    // });

    setTimeout(cb, 100); // fake async
  },
};
