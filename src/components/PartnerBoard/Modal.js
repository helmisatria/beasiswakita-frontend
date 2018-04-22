import React, { Component } from 'react';
import { Button, Modal, Divider, Input, TextArea, Form, Dropdown, Checkbox } from 'semantic-ui-react';
import 'react-dates/initialize';

import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

import '../../dist/css/board_modal.css';

// import CheckboxIcon from '../../dist/assets/checkbox';
import CrossIcon from '../../dist/assets/cross';

const kategoriBeasiswa = [
  { key: 'page', text: 'Beasiswa Atlet', value: 'page' },
  { key: 'penuh', text: 'Beasiswa Penuh', value: 'penuh' },
];

export default class ModalPartnerBoard extends Component {
  state = {
    startDate: null,
    endDate: null,
    focusedInput: null,
  }

  componentDidMount() {
    // document.getElementById('datepickerStart').placeholder = 'hoam';
  }

  render() {
    const { open, closeModal } = this.props;

    const lists = [
      'Kartu Tanda Penduduk (KTP)',
      'Curriculum Vitae (CV)',
      'Transcript Nilai',
      'Nilai TOEFL',
      'Ijazah Terakhir',
      'Surat Keterangan Catatan Kepolisian (SKCK)',
      'Sertifikasi',
    ];

    return (
      <Modal dimmer="inverted" open={open} onClose={closeModal} style={{ top: '52.5vh' }} size="small">
        <Modal.Content image scrolling>
          <Modal.Description>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span id="board_modalTitle">Posting Beasiswa</span>
              <div onClick={closeModal} style={{ cursor: 'pointer' }}>
                <CrossIcon />
              </div>
            </div>
            <p id="board_modalSubtitle">Mauris non tempor quam, et lacinia sapien.</p>
            <Divider />
            <h4 className="board_modalLabel">Nama Beasiswa</h4>
            <Input fluid placeholder="contoh: Beasiswa LPDP 2018" className="board_modalInput" />
            <h4 className="board_modalLabel">Kategori Beasiswa</h4>
            <Dropdown fluid selection options={kategoriBeasiswa} scrolling defaultValue="page" className="board_modalInput" />
            <h4 className="board_modalLabel">Deskripsi</h4>
            <Form className="board_modalInput">
              <TextArea autoHeight rows={4} placeholder="Tambahkan Deskripsi" />
            </Form>
            <h4 className="board_modalLabel">Tempat Beasiswa</h4>
            <Dropdown fluid selection options={kategoriBeasiswa} scrolling defaultValue="page" className="board_modalInput" />
            <h4 className="board_modalLabel">Periode Pendaftaran</h4>
            <DateRangePicker
              startDate={this.state.startDate} // momentPropTypes.momentObj or null,
              startDateId="datepickerStart" // PropTypes.string.isRequired,
              endDate={this.state.endDate} // momentPropTypes.momentObj or null,
              endDateId="datepickerEnd" // PropTypes.string.isRequired,
              onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
              focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
              onFocusChange={focusedInput => this.setState({ focusedInput })}
              openDirection="up"
              customArrowIcon="hingga"
              startDatePlaceholderText="Dimulai"
              endDatePlaceholderText="Berakhir"
              showClearDates
              required
            />
            <div style={{ paddingBottom: '20px' }} />

            <Divider />
            {/* <Grid columns={2}>
              <Grid.Column >
                <Input />
              </Grid.Column>
              <Grid.Column >
                <div className="flex center">
                  <span>Hingga </span>
                  <Input />
                </div>
              </Grid.Column>
            </Grid> */}

            <h4 className="board_modalLabel">Dokumen yang perlu di unggah</h4>
            {lists.map(doc => (
              <div className="flex paddedLeft margintop10">
                <div style={{ flexShrink: 0, paddingTop: '2px' }}>
                  <Checkbox label={doc} />
                </div>
                {/* <span className="pBoard paragraph">{doc}</span> */}
              </div>
            ))}
            <div style={{ paddingBottom: '20px' }} />

          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button positive content="Posting Beasiswa" id="pBoardBtn" onClick={closeModal} />
        </Modal.Actions>
      </Modal>
    );
  }
}
