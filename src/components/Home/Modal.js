import React from 'react';
import { Button, Modal, Divider, Input, TextArea, Form, Dropdown } from 'semantic-ui-react';

export default ({ open, closeModal }) => (
  <Modal dimmer="inverted" open={open} onClose={closeModal} style={{ top: '52.5vh' }} size="tiny">
    <Modal.Content image>
      <Modal.Description>
        <h3>Track Beasiswa</h3>
        <p>We've found the following gravatar image associated with your e-mail address.</p>
        <Divider />
        <h4>Nama Beasiswa</h4>
        <Input fluid placeholder="contoh: Beasiswa LPDP 2018" />
        <h4>Kategori Beasiswa</h4>
        <Dropdown fluid selection />
        <h4>Deskripsi</h4>
        <Form>
          <TextArea autoHeight rows={4} placeholder="Tambahkan Deskripsi" />
        </Form>
        <h4>Letakkan di Papan</h4>
        <Dropdown fluid selection />
      </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
      <Button primary content="Track Beasiswa" onClick={this.close} />
    </Modal.Actions>
  </Modal>
);
