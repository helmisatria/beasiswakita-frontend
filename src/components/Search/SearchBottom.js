import React, { Component } from 'react';
import { Dropdown, Grid, Button } from 'semantic-ui-react';

import '../../dist/css/search_bottom.css';


export default class SearchBottom extends Component {
  state = {
    isFilterVisible: false,
  }

  handleToggleFilter = () => {
    this.setState(({ isFilterVisible }) => ({
      isFilterVisible: !isFilterVisible,
    }));
  }

  render() {
    const options = [
      { key: 1, text: 'Jenjang Pendidikan', value: 1 },
      { key: 2, text: 'Pilih Wilayah', value: 2 },
      { key: 3, text: 'Pilih Negara', value: 3 },
    ];
    return (
      <div id="search_bottomContainer">
        <Button id="search_bottomTitleTextContainer" onClick={() => this.handleToggleFilter()}>
          <h4 id="search_bottomTitleText">TERAPKAN ADVANCE FILTER</h4>
        </Button>
        {this.state.isFilterVisible && (
          <Grid stackable columns={2} id="search_bottomSelectionContainer">
            <Grid.Column computer={14}>
              <Grid columns="equal" id="search_bottomFilterContainer">
                <Grid.Column style={{ paddingLeft: '14px', paddingRight: 0, margin: 0 }}>
                  <Dropdown compact fluid placeholder="Jenjang Pendidikan" defaultValue={1} selection options={options} />
                </Grid.Column>
                <Grid.Column style={{ paddingLeft: 0, paddingRight: 0, margin: 0 }}>
                  <Dropdown compact fluid placeholder="Pilih Wilayah" defaultValue={2} selection options={options} />
                </Grid.Column>
                <Grid.Column style={{ paddingLeft: 0, paddingRight: 0, margin: 0 }}>
                  <Dropdown compact fluid placeholder="Pilih Negara" defaultValue={3} selection options={options} />
                </Grid.Column>
              </Grid>
            </Grid.Column>
            <Grid.Column computer={2} id="search_filterTextContainer">
              <Button fluid id="search_filterText">Terapkan</Button>
            </Grid.Column>
          </Grid>

        )}
      </div>
    );
  }
}
