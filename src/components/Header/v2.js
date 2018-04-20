import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

import Logo from '../../dist/assets/logo@3x.png';
import FindIcon from '../../dist/assets/search';
import BookIcon from '../../dist/assets/book-open';

export default ({ isExplore }) => (
  <div id="search_header">
    <div id="search_headerContainer">
      <NavLink to="/">
        <img src={Logo} style={{ height: '34px', marginRight: '45px' }} />

      </NavLink>
      <NavLink to="#" style={{ display: 'flex' }}>
        <div className={`${!isExplore && 'disabled'} sidebarContainer`}>
          <FindIcon />
        </div>
        <div id="search_headerContentContainer">
          <span className="header_contentTitle">Explore</span>
          <span className="header_contentSubTitle">Cari beasiswa</span>
        </div>
      </NavLink>

      <NavLink to="#" style={{ display: 'flex' }}>
        <div className="sidebarContainer disabled">
          <BookIcon />
        </div>
        <div id="search_headerContentContainer">
          <span className="header_contentTitle">Blog</span>
          <span className="header_contentSubTitle">Tips & Trik Mencari Beasiswa</span>
        </div>
      </NavLink>

      <Button id="search_headerPostingBtn">Posting Beasiswa</Button>
    </div>
    <div className="search_headerCornerContainer">
      <NavLink
        to="/login"
        className="search_headerCornerText"
      >
        Login
      </NavLink>
      <NavLink to="/daftar">
        <span className="search_headerCornerText">Daftar</span>
      </NavLink>
    </div>
  </div>
);
