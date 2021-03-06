import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


import '../../dist/css/board_header.css';

// Images
import Logo from '../../dist/assets/logo@3x.png';

// Icons
import SideBarIcon from '../../dist/assets/sidebar';
import MailIcon from '../../dist/assets/mail';
import SearchIcon from '../../dist/assets/search';
import DashboardIcon from '../../dist/assets/dashboard';

export default class Header extends Component {
  state = {

  }

  render() {
    const {
      dashboard, explore, message, board, padding,
    } = this.props;
    return (
      <div id="headerContainer" style={{ padding }}>
        <NavLink to="/">
          <img src={Logo} id="headerLogo" />
        </NavLink>
        {board && (
          <NavLink to="#" style={{ display: 'flex' }}>
            <div className="sidebarContainer">
              <SideBarIcon />
            </div>
            <div id="header_contentContainer">
              <span className="header_contentTitle">Board</span>
              <span className="header_contentSubTitle">Papan status</span>
            </div>
          </NavLink>
        )}
        {dashboard && (
          <NavLink to="#" style={{ display: 'flex' }}>
            <div className="sidebarContainer">
              <DashboardIcon />
            </div>
            <div id="header_contentContainer">
              <span className="header_contentTitle">Dashboard</span>
              <span className="header_contentSubTitle">Beasiswa Anda</span>
            </div>
          </NavLink>
        )}
        {message && (
          <NavLink to="#" style={{ display: 'flex' }}>
            <div className="sidebarContainer disabled">
              <MailIcon />
            </div>
            <div id="header_contentContainer">
              <span className="header_contentTitle">Message</span>
              <span className="header_contentSubTitle">Semua Pesan</span>
            </div>
          </NavLink>
        )}
        {explore && (
          <NavLink to="/search" style={{ display: 'flex' }}>
            <div className="sidebarContainer disabled">
              <SearchIcon />
            </div>
            <div id="header_contentContainer">
              <span className="header_contentTitle">Explore</span>
              <span className="header_contentSubTitle">Cari beasiswa</span>
            </div>
          </NavLink>
        )}
      </div>
    );
  }
}
