import React, { Component } from 'react';
import { Grid, Button, Input } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { NavLink } from 'react-router-dom';

import Header from '../Header/v2';
import FooterBottom from '../Footer/Bottom';

import AuthenticationAction from '../../reducers/AuthenticationRedux';

import '../../dist/css/login.css';

class Login extends Component {
  state = {
    email: '',
    password: '',
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  onLoginRequest = () => {
    this.props.login({
      email_address: this.state.email,
      password: this.state.password,
    });
    this.isRequested = true;
  }

  isRequested = false;

  componentWillReceiveProps({ error, fetching, owner }) {
    if (this.isRequested && !error && !fetching && !!owner) {
      this.props.history.push('/board');
    }
  }

  render() {
    return (
      <div>
        <div id="login">
          <div id="login_container">
            <Header />
            <Grid stackable centered columns={1}>
              <Grid.Column mobile={12} tablet={7} computer={5} width={5}>
                <div className="login contentContainer">
                  <p className="login title">Login</p>
                  <p className="login subtitle">Mauris non tempor quam, et lacinia sapien.</p>

                  <p className="login inputLabel">Email</p>
                  <Input
                    fluid
                    name="email"
                    onChange={this.handleInputChange}
                  />
                  <p className="login inputLabel">Password</p>
                  <Input
                    fluid
                    name="password"
                    onChange={this.handleInputChange}
                  />

                  <p className="login subtitle forgot">Lupa password?</p>

                  <Button
                    fluid
                    className="login btn"
                    onClick={this.onLoginRequest}
                  >Login
                  </Button>

                  <p className="login helpSignup">Belum punya akun?
                    <NavLink to="/daftar" className="daftar">
                      <span> Daftar</span>
                    </NavLink>
                  </p>
                </div>
              </Grid.Column>
            </Grid>
          </div>
        </div>
        <FooterBottom />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  fetching: state.Authentication.fetching,
  error: state.Authentication.error,
  message: state.Authentication.message,
  owner: state.Authentication.owner,
});

const mapDispatchToProps = dispatch => ({
  login: params => dispatch(AuthenticationAction.loginRequest(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

