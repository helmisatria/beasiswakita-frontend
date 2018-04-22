import React, { Component } from 'react';
import { Grid, Button, Input } from 'semantic-ui-react';

import { NavLink } from 'react-router-dom';

import Header from '../Header/v2';
import FooterBottom from '../Footer/Bottom';

import '../../dist/css/login.css';

export default class Login extends Component {
  state = {

  }

  componentDidMount() {
    window.scrollTo(0, 0);
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
                  <Input fluid />
                  <p className="login inputLabel">Password</p>
                  <Input fluid />

                  <p className="login subtitle forgot">Lupa password?</p>

                  <Button fluid className="login btn">Login</Button>

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
