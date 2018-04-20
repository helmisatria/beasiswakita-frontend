import React from 'react';
import { Button, Modal, Divider, Input, TextArea, Form, Dropdown } from 'semantic-ui-react';

import '../../dist/css/board_modal.css';

import CrossIcon from '../../dist/assets/cross';

const kategoriBeasiswa = [
  { key: 'page', text: 'Beasiswa Atlet', value: 'page' },
  { key: 'penuh', text: 'Beasiswa Penuh', value: 'penuh' },
];

const papanList = [
  { key: 'wishlist', text: 'Wishlist', value: 'wishlist' },
  { key: 'applied', text: 'Applied', value: 'applied' },
  { key: 'inprogress', text: 'In Progress', value: 'inprogress' },
  { key: 'rejected', text: 'Rejected', value: 'rejected' },
  { key: 'accepted', text: 'Accepted', value: 'accepted' },
];

export default ({ open, closeModal }) => (
  <Modal dimmer="inverted" open={open} onClose={closeModal} style={{ top: '52.5vh' }} size="tiny">
    <Modal.Content image scrolling>
      <Modal.Description>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span id="board_modalTitle">Track Beasiswa</span>
          <div onClick={closeModal} style={{ cursor: 'pointer' }}>
            <CrossIcon />
          </div>
        </div>
        <p id="board_modalSubtitle">We've found image associated with your e-mail address.</p>
        <Divider />
        <h4 className="board_modalLabel">Nama Beasiswa</h4>
        <Input fluid placeholder="contoh: Beasiswa LPDP 2018" className="board_modalInput" />
        <h4 className="board_modalLabel">Kategori Beasiswa</h4>
        <Dropdown fluid selection options={kategoriBeasiswa} scrolling defaultValue="page" className="board_modalInput" />
        <h4 className="board_modalLabel">Deskripsi</h4>
        <Form className="board_modalInput">
          <TextArea autoHeight rows={4} placeholder="Tambahkan Deskripsi" />
        </Form>
        <h4 className="board_modalLabel">Letakkan di Papan</h4>
        <Dropdown fluid selection options={papanList} className="board_modalInput" defaultValue="wishlist" compact style={{ marginBottom: '2em' }} />
      </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
      <Button primary content="Track Beasiswa" onClick={this.close} />
    </Modal.Actions>
  </Modal>
);
