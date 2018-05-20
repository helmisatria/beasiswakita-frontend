import React, { Component } from 'react';
import { Grid, Button, Input } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { NavLink } from 'react-router-dom';

import Header from '../Header/v2';

import FooterBottom from '../Footer/Bottom';
import '../../dist/css/daftar.css';

class Daftar extends Component {
  state = {};

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
                <div className="login contentContainer daftar">
                  <p className="login title">Daftar</p>
                  <p className="login subtitle">
                    Mauris non tempor quam, et lacinia sapien.
                  </p>

                  <p className="login inputLabel">Nama Lengkap</p>
                  <Input fluid placeholder="contoh: Gema Abriantini" />
                  <p className="login inputLabel">Email</p>
                  <Input fluid placeholder="contoh: gema@mail.com" />
                  <p className="login inputLabel">Password</p>
                  <Input fluid />

                  <Button fluid className="login btn signup">
                    Daftar
                  </Button>

                  <p className="login helpSignup">
                    Sudah punya akun?
                    <NavLink to="/login" className="daftar">
                      <span> Login</span>
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

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  // getList: () => dispatch(ScholarshipAction.getRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Daftar);
