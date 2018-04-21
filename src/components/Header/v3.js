import React from 'react';

import { Button, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import Logo from '../../dist/assets/logoBlue.png';

import '../../dist/css/header_v3.css';

export default () => (
  <div id="header_v3">
    <div className="flex center">
      <Link to="/" id="logo">
        <img src={Logo} style={{ height: '34px' }} />
      </Link>
      <span id="header_v3Subtitle">Menjadi Partner</span>
    </div>
    <Grid>
      <Grid.Column only="computer tablet">
        <Link to="/">
          <Button basic>Kembali ke Halaman Utama</Button>
        </Link>
      </Grid.Column>
    </Grid>
  </div>
);
