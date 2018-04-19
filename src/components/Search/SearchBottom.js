import React from 'react';
import { Menu, Dropdown, Grid, Button } from 'semantic-ui-react';

import '../../dist/css/search_bottom.css';

const options = [
  { key: 1, text: 'Jenjang Pendidikan', value: 1 },
  { key: 2, text: 'Pilih Wilayah', value: 2 },
  { key: 3, text: 'Pilih Negara', value: 3 },
];

export default () => (
  <div id="search_bottomContainer">
    <div id="search_bottomTitleTextContainer">
      <h4 id="search_bottomTitleText">TERAPKAN ADVANCE FILTER</h4>
    </div>
    <Grid stackable columns={2} id="search_bottomSelectionContainer">
      <Grid.Column computer={14}>
        <Grid columns="equal">
          <Grid.Column style={{ paddingRight: 0, margin: 0 }}>
            <Dropdown compact fluid placeholder="Jenjang Pendidikan" defaultValue={1} selection options={options} />
          </Grid.Column>
          <Grid.Column style={{ paddingLeft: 0, paddingRight: 0, margin: 0 }}>
            <Dropdown compact fluid placeholder="Pilih Wilayah" defaultValue={2} selection options={options} />
          </Grid.Column>
          <Grid.Column style={{ paddingLeft: 0, paddingRight: '5px', margin: 0 }}>
            <Dropdown compact fluid placeholder="Pilih Negara" defaultValue={3} selection options={options} />
          </Grid.Column>
        </Grid>
      </Grid.Column>
      <Grid.Column computer={2} style={{ paddingLeft: 0 }}>
        <Button id="search_filterText">Terapkan</Button>
      </Grid.Column>
    </Grid>
  </div>
);
