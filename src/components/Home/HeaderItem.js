import React from 'react';
import { Popup, Icon } from 'semantic-ui-react';

import '../../dist/css/board_header.css';

// Buttons
import Plus from '../../dist/assets/plus';

export default ({ Icon, title, subtitle }) => (
  <div id="boardContainer">
    <div id="boardMiniContainer">
      {Icon}
      <div className="board_headerTextContainer">
        <span className="board_headerTitle">{title}</span>
        <span className="board_headerSubTitle">{subtitle}</span>
      </div>
    </div>
    <Popup
      trigger={<div id="Oval"><Plus /></div>}
      content="Track Beasiswa"
      position="bottom center"
    />
  </div>
);
