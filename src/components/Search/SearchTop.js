import React from 'react';
import { Select, Grid, Button } from 'semantic-ui-react';

const options = [
  { key: 'page', text: 'Semua Beasiswa', value: 'page' },
  { key: 'org', text: 'All of them', value: 'org' },
  { key: 'site', text: 'Go to the bars', value: 'site' },
];

export default () => (
  <Grid stackable columns={2} id="search_gridInputTop">
    <Grid.Column computer={13} id="search_inputTop">
      <div>
        <div className="ui right action left icon large input fluid">
          <i className="search icon" />

          <input type="text" placeholder="Search..." />
          <Select compact placeholder="Semua Beasiswa" options={options} />
        </div>
      </div>
    </Grid.Column>
    <Grid.Column computer={3} id="search_cariBtnContainer">
      <Button fluid className="search_cariBtn">Cari Beasiswa</Button>
    </Grid.Column>
  </Grid>

);
