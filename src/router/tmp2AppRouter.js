import React, { Component } from 'react';

import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import { connect } from 'react-redux';

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

  componentWillMount() {
    // console.log('====================================');
    // console.log(this.props);
    // console.log('====================================');
    this.props.getCurrent();
  }

  componentWillReceiveProps(nextProps) {
    // console.log('====================================');
    // console.log(nextProps);
    // console.log('====================================');
    if (!nextProps.fetching && !nextProps.error && nextProps.owner) {
      this.setState({ owner: nextProps.owner });
    }
  }

  isStudent = false;
  isPartner = false;

  authenticate = (cb) => {
    if (this.props.owner.role === 'student') {
      this.isStudent = true;
    } else if (this.props.owner.role === 'organization') {
      this.isPartner = true;
    }
    return (<Redirect to="/login" />);
  }

  StudentRoute = () => ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) => {
        this.authenticate();
        if (this.isStudent) {
          return (
            <Component {...props} />
          );
        }
        console.log('====================================');
        console.log(props);
        console.log('====================================');
        props.history.push('/login');
        // return <Redirect to="/login" />;
      }}
    />
  );

  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <this.StudentRoute path="/board" exact component={Home} />
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


const mapStateToProps = state => ({
  owner: state.Authentication.owner,
  fetching: state.Authentication.fetching,
  error: state.Authentication.error,
  message: state.Authentication.message,
});

const mapDispatchToProps = dispatch => ({
  getCurrent: params => dispatch(AuthenticationAction.getUserRequest(params)),
});


export default connect(mapStateToProps, mapDispatchToProps)(AppRouter);
