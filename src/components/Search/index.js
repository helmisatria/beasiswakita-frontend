import React, { Component } from 'react';
import { Container, Header, Input, Dropdown, Button, Select, Icon, Grid } from 'semantic-ui-react';

import '../../dist/css/search.css';

import SearchTop from './SearchTop';
import SearchBottom from './SearchBottom';
import Content from './Content';
import Footer from './Footer';

export default class Search extends Component {
  state = {

  }

  componentDidMount() {
    document.body.style.overflowX = 'hidden';
  }

  render() {
    return (
      <div id="search">
        <div className="search_topContainer">
          <div id="search_topContainer">
            <h3 className="search_titleTop">Hasil Pencarian</h3>
            <SearchTop />
            <SearchBottom />
          </div>
        </div>
        <Content />
        <Footer />
      </div>
    );
  }
}
