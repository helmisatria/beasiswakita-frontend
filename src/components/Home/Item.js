import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';

import Dots from '../../dist/assets/3dots';

import '../../dist/css/board_item.css';

export default class componentName extends Component {
  state = {

  }

  render() {
    return (
      <div>
        <div className="board_itemTop">
          <span>Nama beasiswa</span>
          <Dropdown icon={<Dots />} direction="left">
            <Dropdown.Menu>
              <Dropdown.Item text="View Details" className="board_itemTopDropdown" />
              <Dropdown.Item text="Delete" />
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <span className="ui label board_itemLabel">Beasiswa Penuh</span>
        <div className="board_itemBottomContainer">
          <div className="board_itemBottom">
            <i className="small flag icon" style={{ opacity: 0.21 }} />
            <span className="board_itemBottomDate">18 May 2018</span>
          </div>
          <div style={{
            margin: 0, padding: '.8em', borderRadius: '10em', backgroundColor: '#ededed',
          }}
          />
        </div>
      </div>
    );
  }
}
