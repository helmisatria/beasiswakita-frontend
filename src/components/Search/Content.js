import React from 'react';
import { Card, Icon, Grid } from 'semantic-ui-react';

import '../../dist/css/search_content.css';

const data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

export default () => (
  <div id="search_contentContainer">
    <span id="search_countContentFound">302 Beasiswa ditemukan</span>

    <Grid stackable doubling columns={4} id="search_allContents">
      {data.map(() => (
        <Grid.Column className="search_colContent">
          <Card fluid>
            <Card.Content id="search_contentInsideContainer">
              <div className="Circle" style={{ marginBottom: '16px' }} />
              <span id="search_contentItemTitle">Beasiswa S2 Kemenpora dan Universitas Diponegoro</span>
              <span className="ui label board_itemLabel">Beasiswa Penuh</span>
            </Card.Content>
            <Card.Content extra>
              <span id="search_contentBottomTitle">Pendaftaran Telah Dibuka</span>
              <div>
                <span id="search_contentBottomDate">23 Juli 2018 - 26 Agustus 2018</span>
              </div>
            </Card.Content>
          </Card>

        </Grid.Column>
      ))}

    </Grid>
  </div>
);
