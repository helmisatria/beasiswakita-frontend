import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


import '../../dist/css/board_header.css';

// Images
import Logo from '../../dist/assets/logo@3x.png';

// Icons
import SideBarIcon from '../../dist/assets/sidebar';
import MailIcon from '../../dist/assets/mail';
import SearchIcon from '../../dist/assets/search';

export default class Header extends Component {
  state = {

  }

  render() {
    return (
      <div id="headerContainer">
        <img src={Logo} id="headerLogo" />
        <NavLink to="#" style={{ display: 'flex' }}>
          <div className="sidebarContainer">
            <SideBarIcon />
          </div>
          <div id="header_contentContainer">
            <span className="header_contentTitle">Board</span>
            <span className="header_contentSubTitle">Papan status</span>
          </div>
        </NavLink>
        <NavLink to="#" style={{ display: 'flex' }}>
          <div className="sidebarContainer disabled">
            <MailIcon />
          </div>
          <div id="header_contentContainer">
            <span className="header_contentTitle">Message</span>
            <span className="header_contentSubTitle">Semua Pesan</span>
          </div>
        </NavLink>
        <NavLink to="/search" style={{ display: 'flex' }}>
          <div className="sidebarContainer disabled">
            <SearchIcon />
          </div>
          <div id="header_contentContainer">
            <span className="header_contentTitle">Explore</span>
            <span className="header_contentSubTitle">Cari beasiswa</span>
          </div>
        </NavLink>
      </div>
    );
  }
}
