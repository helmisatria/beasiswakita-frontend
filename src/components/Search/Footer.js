import React from 'react';
import { Button } from 'semantic-ui-react';

import '../../dist/css/search_footer.css';

// Icons
import CheckCircleMini from '../../dist/assets/check-circle-mini';
import Logo from '../../dist/assets/logoBlue.png';

export default () => (
  <div id="search_footerContainer">
    <div id="search_footerContent">
      <p id="search_footerTopTitle">
      Apakah kamu tahu? Dengan mendaftar di Beasiswakita, akan memudahkanmu dalam tracking proses pendaftaran beasiswamu
      </p>
      <p id="search_footerTopSubtitle">
        Keuntungannya antara lain:
      </p>
      <div id="search_footerContainerPoints">
        <div className="search_footerPoinContainer">
          <div style={{ flexShrink: 0 }}>
            <CheckCircleMini />
          </div>
          <span className="search_footerPoin">Manajemen pendaftaran beasiswa lebih mudah</span>
        </div>
        <div className="search_footerPoinContainer">
          <div style={{ flexShrink: 0 }}>
            <CheckCircleMini />
          </div>
          <span className="search_footerPoin">Seamless notification untuk kamu yang menggunakan easy apply!</span>
        </div>
        <div className="search_footerPoinContainer">
          <div style={{ flexShrink: 0 }}>
            <CheckCircleMini />
          </div>
          <span className="search_footerPoin">Catat semua proses pencarian beasiswamu</span>
        </div>
        <div className="search_footerPoinContainer">
          <div style={{ visibility: 'hidden' }}>
            <CheckCircleMini />
          </div>
          <span className="search_footerPoin">dan banyak lagi!</span>
        </div>
      </div>
      <Button size="large" id="search_footerBtnDaftar">Daftar Sekarang</Button>
    </div>
    <div id="search_footerContentBottom">
      <div id="search_footerBtmLeft">
        <img src={Logo} style={{ height: '34px', marginRight: '22px' }} />
        <span id="search_footerCredit">© 2018 Beasiswakita. All Rights Reserved</span>
      </div>
      <div>
        <span className="search_footerBtmItem">Privacy Policy</span>
        <span className="search_footerBtmItem">Terms of Service</span>
        <span className="search_footerBtmItem">Contact</span>
      </div>
    </div>
  </div>
);