import React, { Component } from 'react';

import Muuri from 'muuri';

import '../../dist/css/home.css';

// Components
import HeaderItem from './HeaderItem';
import Item from './Item';
import Header from './Header';
import Modal from './Modal';

// Icons
import LoveIcon from '../../dist/assets/love';
import PocketIcon from '../../dist/assets/pocket';
import ClockIcon from '../../dist/assets/clock';
import XCircleIcon from '../../dist/assets/x-circle';
import CheckCircleIcon from '../../dist/assets/check-circle';

export default class Home extends Component {
  state = {
    itemSelected: undefined,
    deleteItem: undefined,
    openModal: false,
  }

  componentDidMount() {
    document.body.style.overflowX = 'scroll';

    const itemContainers = [].slice.call(document.querySelectorAll('.board-column-content'));
    const columnGrids = [];
    let boardGrid;

    // Define the column grids so we can drag those
    // items around.
    itemContainers.forEach((container) => {
      // Instantiate column grid.
      const grid = new Muuri(container, {
        items: '.board-item',
        layoutDuration: 400,
        layoutEasing: 'ease',
        dragEnabled: true,
        dragSort() {
          return columnGrids;
        },
        dragSortInterval: 0,
        dragContainer: document.body,
        dragReleaseDuration: 400,
        dragReleaseEasing: 'ease',
        dragStartPredicate(item, event) {
          // Prevent first item from being dragged.
          // console.log(item);

          if (item._element.lastChild.childNodes[0].className === 'item-disabled') {
            return false;
          } else if (event.deltaTime > 165) {
            return true;
          }
          // For other items use the default drag start predicate.
          // return Muuri.ItemDrag.defaultStartPredicate(item, event);
        },
      })
        .on('dragStart', (item) => {
          // Let's set fixed widht/height to the dragged item
          // so that it does not stretch unwillingly when
          // it's appended to the document body for the
          // duration of the drag.
          item.getElement().style.width = `${item.getWidth()}px`;
          item.getElement().style.height = `${item.getHeight()}px`;
        })
        .on('dragReleaseEnd', (item) => {
          // Let's remove the fixed width/height from the
          // dragged item now that it is back in a grid
          // column and can freely adjust to it's
          // surroundings.
          item.getElement().style.width = '';
          item.getElement().style.height = '';
          // Just in case, let's refresh the dimensions of all items
          // in case dragging the item caused some other items to
          // be different size.
          columnGrids.forEach((grid) => {
            grid.refreshItems();
          });
        })
        .on('layoutStart', () => {
          // Let's keep the board grid up to date with the
          // dimensions changes of column grids.
          boardGrid.refreshItems().layout();
        });

      grid.getItems().forEach((item) => {
        item.getElement().addEventListener('click', (event) => {
          this.setState({ itemSelected: item });

          console.log({ delete: this.state.deleteItem });


          console.log('====================================');
          console.log({ item, event });
          console.log('====================================');
        });
      });

      // Add the column grid reference to the column grids
      // array, so we can access it later on.
      columnGrids.push(grid);
    });

    // Instantiate the board grid so we can drag those
    // columns around.
    boardGrid = new Muuri('.board', {
      layoutDuration: 400,
      layoutEasing: 'ease',
      dragEnabled: false,
      dragSortInterval: 0,
      dragStartPredicate: {
        handle: '.board-column-header',
      },
      dragReleaseDuration: 400,
      dragReleaseEasing: 'ease',
      layout: {
        horizontal: true,
      },
    });
  }

  handleDeleteItem = (item) => {
    console.log('handleDelete', item.getGrid().remove(item, { removeElements: true }));
  }

  handleClickAddBeasiswa = () => {
    console.log('hi!');
    this.setState({ openModal: true });
  }

  handleCloseModalAddBeasiswa = () => {
    this.setState({ openModal: false });
  }


  render() {
    const { itemSelected } = this.state;

    return (
      <div>
        <Modal open={this.state.openModal} closeModal={this.handleCloseModalAddBeasiswa} />
        <Header />
        <div className="board">
          <div className="board-column">
            <div className="board-column-header">
              <HeaderItem
                Icon={<LoveIcon />}
                title="Wishlist"
                subtitle="Beasiswa wishlist kamu"
                clickAddBeasiswa={this.handleClickAddBeasiswa}
              />
            </div>
            <div className="board-column-content">
              <div className="board-item"><div className="board-item-content"><Item itemSelected={itemSelected} handleDelete={this.handleDeleteItem} /></div></div>
              <div className="board-item"><div className="board-item-content"><Item itemSelected={itemSelected} handleDelete={this.handleDeleteItem} /></div></div>
              <div className="board-item item-disabled"><div className="board-item-content"><Item isDisabled itemSelected={itemSelected} handleDelete={this.handleDeleteItem} /></div>
              </div>
            </div>
          </div>
          <div className="board-column">
            <div className="board-column-header">
              <HeaderItem
                Icon={<PocketIcon />}
                title="Applied"
                subtitle="Beasiswa yang di apply"
                clickAddBeasiswa={this.handleClickAddBeasiswa}
              />
            </div>
            <div className="board-column-content">
              <div className="board-item"><div className="board-item-content"><Item itemSelected={itemSelected} handleDelete={this.handleDeleteItem} /></div></div>
              <div className="board-item"><div className="board-item-content"><Item itemSelected={itemSelected} handleDelete={this.handleDeleteItem} /></div></div>
              <div className="board-item"><div className="board-item-content"><Item isDisabled itemSelected={itemSelected} handleDelete={this.handleDeleteItem} /></div></div>
              <div className="board-item"><div className="board-item-content"><Item itemSelected={itemSelected} handleDelete={this.handleDeleteItem} /></div></div>
            </div>
          </div>
          <div className="board-column">
            <div className="board-column-header">
              <HeaderItem
                Icon={<ClockIcon />}
                title="In Progress"
                subtitle="Beasiswa yang di apply"
                clickAddBeasiswa={this.handleClickAddBeasiswa}
              />
            </div>
            <div className="board-column-content">
              <div className="board-item"><div className="board-item-content"><Item isDisabled itemSelected={itemSelected} handleDelete={this.handleDeleteItem} /></div></div>
              <div className="board-item"><div className="board-item-content"><Item itemSelected={itemSelected} handleDelete={this.handleDeleteItem} /></div></div>
            </div>
          </div>
          <div className="board-column">
            <div className="board-column-header">
              <HeaderItem
                Icon={<XCircleIcon />}
                title="Rejected"
                subtitle="Beasiswa yang di apply"
                clickAddBeasiswa={this.handleClickAddBeasiswa}
              />
            </div>
            <div className="board-column-content">
              <div className="board-item"><div className="board-item-content"><Item itemSelected={itemSelected} handleDelete={this.handleDeleteItem} /></div></div>
              <div className="board-item"><div className="board-item-content"><Item isDisabled itemSelected={itemSelected} handleDelete={this.handleDeleteItem} /></div></div>
              <div className="board-item"><div className="board-item-content"><Item isDisabled itemSelected={itemSelected} handleDelete={this.handleDeleteItem} /></div></div>
            </div>
          </div>
          <div className="board-column">
            <div className="board-column-header">
              <HeaderItem
                Icon={<CheckCircleIcon />}
                title="Accepted"
                subtitle="Beasiswa yang di apply"
                clickAddBeasiswa={this.handleClickAddBeasiswa}
              />
            </div>
            <div className="board-column-content">
              <div className="board-item"><div className="board-item-content"><Item itemSelected={itemSelected} handleDelete={this.handleDeleteItem} /></div></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
