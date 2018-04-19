import React, { Component } from 'react';
import { Container, Header, Input, Dropdown, Button, Select, Icon, Grid } from 'semantic-ui-react';

import '../../dist/css/search.css';

import SearchTop from './SearchTop';
import SearchBottom from './SearchBottom';

export default class Search extends Component {
  state = {

  }

  render() {
    return (
      <div id="search">
        <div className="search_topContainer">
          <div className="ui text container" id="search_topContainer">
            <h3 className="search_titleTop">Hasil Pencarian</h3>
            <SearchTop />
            <SearchBottom />
          </div>
        </div>
      </div>
    );
  }
}
