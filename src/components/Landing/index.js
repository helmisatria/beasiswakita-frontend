import React, { Component } from 'react';

import '../../dist/css/landing.css';

import Search from './SearchTop';
import Header from './Header';

export default class LandingPage extends Component {
  state = {

  }

  render() {
    return (
      <div>
        <div id="landing_top">
          <Header />
          <div id="landing_topContainer">
            <h2 id="landing_topTitle">Mencari beasiswa hanya dengan satu klik</h2>
            <p id="landing_topSubtitle">Memperkenalkan Beasiswa kita, portal beasiswa pertama di Indonesia!</p>
            <Search />
          </div>
        </div>
      </div>
    );
  }
}
