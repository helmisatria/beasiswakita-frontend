import React from 'react';

import '../../dist/css/board_header.css';

export default ({ title, subtitle }) => (
  <div id="boardContainer">
    <div id="boardMiniContainer">
      <i className="large heart outline icon" />
      <div className="board_headerTextContainer">
        <span className="board_headerTitle">{title}</span>
        <span className="board_headerSubTitle">{subtitle}</span>
      </div>
    </div>
    <i className="big plus circle icon" />
  </div>
);
