import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Grid, Icon, Dropdown, Divider } from 'semantic-ui-react';

import Logo from '../../dist/assets/logo@3x.png';
import FindIcon from '../../dist/assets/search';
import BookIcon from '../../dist/assets/book-open';

import '../../dist/css/header.css';

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
      <Grid>
        <Grid.Column only="tablet computer">
          <Button id="search_headerPostingBtn">Posting Beasiswa</Button>
        </Grid.Column>
      </Grid>
    </div>
    <div className="search_headerCornerContainer">
      <Grid>
        <Grid.Column only="tablet computer">
          <NavLink
            to="/login"
          >
            <span className="search_headerCornerText login">Login</span>
          </NavLink>
          <NavLink to="/daftar">
            <span className="search_headerCornerText">Daftar</span>
          </NavLink>
        </Grid.Column>
      </Grid>
    </div>
    <Grid>
      <Grid.Column only="mobile" id="hamburgerHeader">
        <Dropdown
          trigger={
            <div className="sidebarContainer hamburger">
              <Icon name="sidebar" size="large" style={{ margin: 0, color: 'white' }} />
            </div>
          }
          icon={null}
          direction="left"
        >
          <Dropdown.Menu>
            <Dropdown.Item>
              <Button id="search_headerPostingBtn">Posting Beasiswa</Button>
            </Dropdown.Item>
            <Divider fitted />
            <Dropdown.Item>
              <NavLink
                to="/login"
              >
                <span>Login</span>
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item>
              <NavLink to="/daftar">
                <span>Daftar</span>
              </NavLink>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Grid.Column>

    </Grid>
  </div>
);
