import React from 'react';
import Logo from '../../dist/assets/logoBlue.png';

export default () => (
  <div id="search_footerContentBottom">
    <div id="search_footerBtmLeft">
      <img src={Logo} style={{ height: '34px', marginRight: '22px' }} />
      <span id="search_footerCredit">© 2018 Beasiswakita. <span className="rights">All Rights Reserved</span></span>
    </div>
    <div id="search_footerBtmRight">
      <span className="search_footerBtmItem">Privacy Policy</span>
      <span className="search_footerBtmItem">Terms of Service</span>
      <span className="search_footerBtmItem">Contact</span>
    </div>
  </div>
);
