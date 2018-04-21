import React from 'react';
import { Button, Grid, Icon, Flag } from 'semantic-ui-react';

import ArrowUpRightIcon from '../../dist/assets/arrow-up-right-big';
import InfoIcon from '../../dist/assets/info';


export default () => (
  <div>

    <div id="detilPadding">
      <Button className="detil label">Beasiswa Penuh</Button>
      <h2 className="detil content title">Beasiswa S2 Kemenpora dan Universitas Diponegoro</h2>
    </div>
    <div id="detilPadding">
      <Grid stackable columns={3}>
        <Grid.Column style={{ paddingTop: 0 }}>
          <div className="flex">
            <Flag name="th" />
            <div id="">
              <p className="detil title mini" id="detil_titleMini">Tempat Beasiswa</p>
              <p className="detil subtitle mini">Thailand</p>
            </div>
          </div>
        </Grid.Column>
        <Grid.Column style={{ paddingTop: 0 }}>
          <div id="">
            <p className="detil title mini" id="detil_titleMini">Status Pendaftaran</p>
            <div className="flex center">
              <p className="detil subtitle mini noMarginBottom">Pendaftaran Dibuka</p>
              <Icon name="circle" size="small" style={{ marginLeft: '7px', color: '#16c172' }} />
            </div>
          </div>
        </Grid.Column>
        <Grid.Column style={{ paddingTop: 0 }}>
          <div id="">
            <p className="detil title mini" id="detil_titleMini">Periode Pendaftaran</p>
            <p className="detil subtitle mini">10 May 2018 - 30 May 2018</p>
          </div>
        </Grid.Column>
      </Grid>
    </div>
    <div id="detilPadding">
      <div className="flex center paddedLeft">
        <span className="detil title mini">Oleh</span>
        <div className="Circle" />
        <span className="detil subtitle mini">Kementerian Pemuda dan Olahraga</span><br />
      </div>
    </div>
    <div id="detilPadding">
      <Grid stackable columns={2}>
        <Grid.Column computer={5} tablet={8}>
          <div className="flex center" id="detil_btnEasyApply">
            <div id="detil_easyApplyLeftBtn">
              <ArrowUpRightIcon />
            </div>
            <span id="detil_easyApplyRightBtn" className="detil title mini">Easy Apply</span>
          </div>
        </Grid.Column>
        <div className="flex center paddedLeft">
          <div>
            <InfoIcon />
          </div>
          <span className="detil subtitle mini">Apply beasiswa ini langsung di Beasiswakita</span><br />
        </div>
      </Grid>
    </div>
  </div>
);
