import React, { Component } from 'react';
import '../../dist/css/search.css';

import SearchTop from './SearchTop';
import SearchBottom from './SearchBottom';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';

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
          <Header />
          <div id="search_topContainer">
            <h3 className="search_titleTop">Hasil Pencarian</h3>
            <span id="search_countContentFound">302 Beasiswa ditemukan</span>
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
