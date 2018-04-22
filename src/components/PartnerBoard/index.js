import React, { Component } from 'react';
import { Button, Grid, Flag, Card, Divider } from 'semantic-ui-react';

import '../../dist/css/partnerBoard.css';

import Header from '../Header';
import Modal from './Modal';

export default class PartnerBoard extends Component {
  state = {
    isOpenModal: false,
  }

  componentDidMount() {
    document.body.style.backgroundColor = '#f1f3f5';
  }

  openModal = () => {
    this.setState({ isOpenModal: true });
  }

  closeModal = () => {
    this.setState({ isOpenModal: false });
  }


  render() {
    const data = [
      {
        title: 'Study Trip Program 2018: Life of Muslims in Germany',
        countryCode: 'de',
        country: 'Germany',
        jenisBeasiswa: 'Beasiswa Penuh',
      },
      {
        title: 'DJARUM Beasiswa Plus 2018/2019 untuk Mahasiswa',
        countryCode: 'id',
        country: 'Indonesia',
        jenisBeasiswa: 'Beasiswa Penuh',
      },
    ];

    return (
      <div>
        <Header dashboard message padding="0 12vw" />
        <Grid stackable id="partnerBoard" columns={2} className="topContainer pBoardPadding">
          <Grid.Column width={13}>
            <h2 id="pBoardTitle">Beasiswa Anda</h2>

          </Grid.Column>
          <Grid.Column width={3}>
            <Button fluid positive id="pBoardBtn" onClick={() => this.openModal()}>Posting Beasiswa</Button>

          </Grid.Column>
        </Grid>

        <Grid className="pBoardPadding" stackable stretched columns={3}>
          {data.map(d => (
            <Grid.Column>
              <Card link fluid id="pBoardCard">
                <Card.Content>
                  <div className="Circle" />
                  <h4 className="pBoard title mini">{d.title}</h4>
                  <span className="ui label pBoard_itemLabel">{d.jenisBeasiswa}</span>
                  <div className="flex center">
                    <Flag name={d.countryCode} />
                    <span>{d.country}</span>
                  </div>
                </Card.Content>
                <Card.Content extra>
                  <Button fluid basic>Lihat Daftar Peserta</Button>
                </Card.Content>
              </Card>
            </Grid.Column>
          ))}
          <Grid.Column>
            <Card fluid link id="pBoardCard" className="card dashed">
              <Card.Content className="content dashed flex center">
                <p className="pBoardCard title dashed">Yuk posting beasiswa baru dan nikmati kemudahannya!</p>
                <p className="pBoardCard subtitle dashed">Gratis tanpa biaya apapun, dijamin!</p>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid>
        <Modal closeModal={this.closeModal} open={this.state.isOpenModal} />
      </div>
    );
  }
}

