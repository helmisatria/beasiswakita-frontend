import React from 'react';
import { Select, Grid, Button } from 'semantic-ui-react';

const options = [
  { key: 'page', text: 'Semua Beasiswa', value: 'page' },
  { key: 'org', text: 'All of them', value: 'org' },
  { key: 'site', text: 'Go to the bars', value: 'site' },
];

export default () => (
  <Grid stackable columns={2}>
    <Grid.Column computer={14}>
      <div>
        <div className="ui right action left icon input fluid">
          <i className="search icon" />

          <input type="text" placeholder="Search..." />
          <Select compact placeholder="Semua Beasiswa" options={options} />
        </div>
      </div>
    </Grid.Column>
    <Grid.Column computer={2} id="search_cariBtnContainer">
      <Button fluid className="search_cariBtn">Cari</Button>
    </Grid.Column>
  </Grid>

);
