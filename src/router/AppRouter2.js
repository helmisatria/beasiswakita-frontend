import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import { connect } from 'react-redux';

// import jwt from 'jsonwebtoken';
// import { jwtKey } from '../config/keys.json';

// import ListPesanan from '../components/ListPesanan';
// import DetilPesanan from '../components/DetilPesanan';
// import ProsesPesanan from '../components/ProsesPesanan';
import Home from '../components/Home';
import Search from '../components/Search';
import Landing from '../components/Landing';
import Login from '../components/Login';
import Daftar from '../components/Daftar';
import DetilBeasiswa from '../components/DetilBeasiswa';
import PartnerDaftar from '../components/PartnerDaftar';
import PartnerBoard from '../components/PartnerBoard';

import AuthenticationAction from '../reducers/AuthenticationRedux';


class AppRouter extends Component {
  state = {
    owner: null,
  }

  componentWillReceiveProps({ owner, error, fetching }) {
    console.log({ owner, error, fetching });

    if (this.isFetchingCurrentUser && !error && !fetching && owner) {
      this.setState({ owner });
      // this.isFetchingCurrentUser = false;
    }
  }

  getCurrentUser = () => {
    this.isFetchingCurrentUser = true;
    console.log('hai!');

    this.props.currentUser();
  }


  isAuthenticated = true;
  isFetchingCurrentUser = false;

  PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) => {
      if (!this.isFetchingCurrentUser) {
        this.getCurrentUser();
      }
      // gimana biar ga asyncronous ?
      if (this.state.owner) {
        return (
          <Component {...props} />
        );
      }
      return (<Redirect to="/login" />);
    }}
    />
  )


  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <this.PrivateRoute path="/board" exact component={Home} />
            <Route path="/search" exact component={Search} />
            <Route path="/" exact component={Landing} />
            <Route path="/login" exact component={Login} />
            <Route path="/daftar" exact component={Daftar} />
            <Route path="/detilBeasiswa" exact component={DetilBeasiswa} />
            <Route path="/partnership" exact component={PartnerDaftar} />
            <Route path="/partnership/board" exact component={PartnerBoard} />
            {/* <PrivateRoute path="/" exact component={Home} />
            <PrivateRoute path="/pesanan" exact component={ListPesanan} />
            <PrivateRoute path="/pesanan/:id" exact component={DetilPesanan} />
            <PrivateRoute path="/prosesPesanan" exact component={ProsesPesanan} /> */}
            <Redirect to="/" />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const Auth = {
  isAuthenticated: false,
  authenticate(cb) {
    // const token = window.localStorage.getItem('token');
    // if (this.props.owner) {
    //   this.isAuthenticated = true;
    // } else {
    //   return (<Redirect to="/login" />);
    // }
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

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      console.log('====================================');
      console.log(props);
      console.log('====================================');
      Auth.authenticate();
      if (Auth.isAuthenticated) {
        return (
          <Component {...props} />
        );
      }
      return (<Redirect to="/login" />);
    }}
  />
);

const mapStateToProps = state => ({
  owner: state.Authentication.owner,
  fetching: state.Authentication.fetching,
  error: state.Authentication.error,
  message: state.Authentication.message,
});

const mapDispatchToProps = dispatch => ({
  currentUser: params => dispatch(AuthenticationAction.getUserRequest(params)),
});


export default connect(mapStateToProps, mapDispatchToProps)(AppRouter);
