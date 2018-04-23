import React, { Component } from 'react';
import { Grid, Button, Card, Icon, Flag } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import TimeIcon from '../../dist/assets/time';

import '../../dist/css/landing_secondContent.css';

export default class SecondContent extends Component {
  state = {

  }

  render() {
    const data = [0, 0, 0, 0];

    return (
      <div id="landing_secondContent">
        <Grid stackable columns={2}>
          <Grid.Column width={13}>
            <h4 id="landing_headerTitle">Akan segera berakhir</h4>
            <p id="landing_headerSubtitle">Beasiswa yang kami sarankan untuk Anda dan sedang deadline</p>
          </Grid.Column>
          <Grid.Column width={3} className="gridColumnRight">
            <Button className="landing_contentBtn" style={{ left: 0 }}>Lihat Semua</Button>
          </Grid.Column>
        </Grid>
        <Grid stackable doubling centered columns={4}>
          {data.map(() => (
            <Grid.Column>
              <Link to="/detilBeasiswa">
                <Card fluid centered link>
                  <Card.Content>
                    <div className="Circle" />
                    <p className="landing_contentSecondTitle">Beasiswa Seni dan Budaya Indonesia 2018</p>
                    <Button className="landing_label">Beasiswa Penuh</Button>
                    <div className="flex center">
                      <Flag name="id" />
                      <span>Indonesia</span>
                    </div>
                  </Card.Content>
                  <Card.Content extra>
                    <span id="search_contentBottomTitle">Sisa Waktu Pendaftaran</span>
                    <div id="search_contentBottomSubtitle" className="landing">
                      <TimeIcon />
                      <span id="search_contentBottomDate" className="landing">20 Hari, 40 Menit, 70 Detik</span>
                      <Icon name="circle" size="small" style={{ color: '#ff9595' }} />
                    </div>
                  </Card.Content>
                </Card>
              </Link>
            </Grid.Column>

            ))}
        </Grid>
      </div>
    );
  }
}
