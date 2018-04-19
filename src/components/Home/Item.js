import React, { Component } from 'react';
import { Dropdown, Popup } from 'semantic-ui-react';

import Dots from '../../dist/assets/3dots';
import ArrowUpRightIcon from '../../dist/assets/arrow-up-right';

import '../../dist/css/board_item.css';

export default class componentName extends Component {
  state = {

  }

  handleClickDetails = (item) => {
    console.log('DETAIL: ', item);
  }

  handleClickDelete(item) {
    console.log('ITEM: ', item);

    this.props.handleDelete(item);
  }

  render() {
    const { itemSelected, isDisabled } = this.props;

    return (
      <div className={isDisabled && 'item-disabled'}>
        <div className="board_itemTop">
          <span>Nama beasiswa</span>
          <Dropdown icon={<Dots />} direction="left">
            <Dropdown.Menu>
              <Dropdown.Item text="View Details" onClick={() => this.handleClickDetails(itemSelected)} />
              <Dropdown.Item text="Delete" onClick={() => this.handleClickDelete(itemSelected)} />
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <span className="ui label board_itemLabel">Beasiswa Penuh</span>
        <div className="board_itemBottomContainer">
          <div className="board_itemBottom">
            <i className="small flag icon" style={{ opacity: 0.21 }} />
            <span className="board_itemBottomDate">18 May 2018</span>
          </div>
          <div className="board_itemRightBottom">
            {isDisabled && (
              <Popup
                trigger={<div id="upRightIcon"><ArrowUpRightIcon /></div>}
                content="Easy Apply"
                position="bottom center"
              />
            )}
            <div style={{
              margin: 0, padding: '.8em', borderRadius: '10em', backgroundColor: '#ededed',
            }}
            />
          </div>
        </div>
      </div>
    );
  }
}
