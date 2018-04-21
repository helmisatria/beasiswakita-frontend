import React, { Component } from 'react';
import '../../dist/css/search.css';

import SearchTop from './SearchTop';
import SearchBottom from './SearchBottom';
import Content from './Content';
import Footer from '../Footer';
import Header from '../Header/v2';

export default class Search extends Component {
  state = {

  }

  componentDidMount() {
    document.body.style.overflowX = 'hidden';
    document.body.style.backgroundColor = '#f1f3f5';
  }

  render() {
    return (
      <div id="search">
        <div className="search_topContainer">
          <div className="search_topContainer gradient">
            <Header />
            <div id="search_topContainer">
              <h3 className="search_titleTop">Hasil Pencarian</h3>
              <span id="search_countContentFound">302 Beasiswa ditemukan</span>
              <SearchTop />
              <SearchBottom />
            </div>
          </div>
        </div>
        <Content />
        <Footer />
      </div>
    );
  }
}
