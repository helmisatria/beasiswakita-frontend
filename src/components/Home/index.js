import React, { Component } from 'react';

import Muuri from 'muuri';

import '../../dist/css/home.css';

export default class Home extends Component {
  state = {

  }

  componentDidMount() {
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
          console.log(item);

          if (item._element.classList[1] === 'lalala') {
            return false;
          }
          // For other items use the default drag start predicate.
          return Muuri.ItemDrag.defaultStartPredicate(item, event);
        },
      })
        .on('dragStart', (item) => {
          // Let's set fixed widht/height to the dragged item
          // so that it does not stretch unwillingly when
          // it's appended to the document body for the
          // duration of the drag.
          console.log(item);
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
      layoutOnResize: true,
      dragReleaseDuration: 400,
      dragReleaseEasing: 'ease',
      layout: {
        horizontal: true,
      },
    });
  }

  render() {
    return (
      <div className="board">
        <div className="board-column todo">
          <div className="board-column-header">To do</div>
          <div className="board-column-content">
            <div className="board-item lalala"><div className="board-item-content"><span>Item #</span>1</div></div>
            <div className="board-item"><div className="board-item-content"><span>Item #</span>2</div></div>
            <div className="board-item"><div className="board-item-content"><span>Item #</span>3</div></div>
            <div className="board-item"><div className="board-item-content"><span>Item #</span>4</div></div>
            <div className="board-item"><div className="board-item-content"><span>Item #</span>5</div></div>
          </div>
        </div>
        <div className="board-column working">
          <div className="board-column-header">Working</div>
          <div className="board-column-content">
            <div className="board-item"><div className="board-item-content"><span>Item #</span>6</div></div>
            <div className="board-item"><div className="board-item-content"><span>Item #</span>7</div></div>
            <div className="board-item"><div className="board-item-content"><span>Item #</span>8</div></div>
            <div className="board-item"><div className="board-item-content"><span>Item #</span>9</div></div>
            <div className="board-item"><div className="board-item-content"><span>Item #</span>10</div></div>
          </div>
        </div>
        <div className="board-column done">
          <div className="board-column-header">Done</div>
          <div className="board-column-content">
            <div className="board-item"><div className="board-item-content"><span>Item #</span>hehe</div></div>
            <div className="board-item"><div className="board-item-content"><span>Item #</span>12</div></div>
            <div className="board-item"><div className="board-item-content"><span>Item #</span>13</div></div>
            <div className="board-item"><div className="board-item-content"><span>Item #</span>14</div></div>
            <div className="board-item"><div className="board-item-content"><span>Item #</span>15</div></div>
          </div>
        </div>
        <div className="board-column done">
          <div className="board-column-header">Done</div>
          <div className="board-column-content">
            <div className="board-item"><div className="board-item-content"><span>Item #</span>11</div></div>
            <div className="board-item"><div className="board-item-content"><span>Item #</span>12</div></div>
            <div className="board-item"><div className="board-item-content"><span>Item #</span>13</div></div>
            <div className="board-item"><div className="board-item-content"><span>Item #</span>14</div></div>
            <div className="board-item"><div className="board-item-content"><span>Item #</span>15</div></div>
          </div>
        </div>
      </div>
    );
  }
}
