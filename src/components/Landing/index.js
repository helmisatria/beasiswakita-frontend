import React, { Component } from 'react';
import { Button, Grid, Icon, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import '../../dist/css/landing.css';

import Search from './SearchTop';
import Header from '../Header/v2';
import SecondContent from './SecondContent';
import ThirdContent from './ThirdContent';
import Footer from '../Footer';

export default class LandingPage extends Component {
  state = {

  }

  componentDidMount() {
    document.body.style.backgroundColor = '#f1f3f5';
  }

  render() {
    return (
      <div>
        <div id="landing_top">
          <div id="landing_topGradientTop">
            <Header isExplore />
            <div id="landing_topContainer">
              <h2 id="landing_topTitle">Mencari beasiswa hanya dengan satu klik</h2>
              <p id="landing_topSubtitle">Memperkenalkan Beasiswa kita, portal beasiswa pertama di Indonesia!</p>
              <Search placeholder="Kata kunci (contoh: Beasiswa Penuh, Beasiswa SMA)" />
            </div>
          </div>
          <div>
            <div id="landing_content">
              <div id="landing_contentFirst">
                <Grid stackable columns={2} id="landing_contentFirstContainer">
                  <Grid.Column width={13}>
                    <h4 id="landing_headerTitle">Featured Beasiswa</h4>
                    <p id="landing_headerSubtitle">Beasiswa yang kami sarankan untuk Anda dan sedang deadline</p>
                  </Grid.Column>
                  <Grid.Column width={3} className="gridColumnRight">
                    <Button className="landing_contentBtn">Lihat Semua</Button>
                  </Grid.Column>
                </Grid>
                <Grid stackable stretched columns={3}>
                  <Grid.Column className="landing_contentImgGridColumn first">
                    <Link to="/detilBeasiswa" className="landing_contentImg img1">
                      <Button className="landing_contentImgBtn">Beasiswa Penuh</Button>
                      <p id="landing_contentImgTitle">Disaster Regeneration Scholarship, University of Westminster</p>
                      <div>
                        <span id="landing_contentImgLengkap">Selengkapnya</span>
                        <Icon color="grey" name="chevron right" />
                      </div>
                    </Link>
                  </Grid.Column>
                  <Grid.Column className="landing_contentImgGridColumn second">
                    <Link to="/detilBeasiswa" className="landing_contentImg img2">
                      <Button className="landing_contentImgBtn">Beasiswa Penuh</Button>
                      <p id="landing_contentImgTitle">Beasiswa Monbukagakusho Jepang 2018/2019</p>
                      <div>
                        <span id="landing_contentImgLengkap">Selengkapnya</span>
                        <Icon color="grey" name="chevron right" />
                      </div>
                    </Link>
                  </Grid.Column>
                  <Grid.Column className="landing_contentImgGridColumn third">
                    <Link to="/detilBeasiswa" className="landing_contentImg img3">
                      <Button className="landing_contentImgBtn">Beasiswa Penuh</Button>
                      <p id="landing_contentImgTitle">Beasiswa S2 di Thailand - Full 2018 - 2019, School of Environment</p>
                      <div>
                        <span id="landing_contentImgLengkap">Selengkapnya</span>
                        <Icon color="grey" name="chevron right" />
                      </div>
                    </Link>
                  </Grid.Column>
                </Grid>
              </div>
            </div>
            <div id="landing_content">
              <SecondContent />
            </div>
            <Divider fitted style={{ margin: '55px 0' }} />
            <div id="landing_content">
              <ThirdContent />
            </div>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}
