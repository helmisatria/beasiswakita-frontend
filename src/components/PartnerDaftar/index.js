import React, { Component } from 'react';
import { Grid, Input, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import '../../dist/css/partnerDaftar.css';
import Header from '../Header/v3';

import CheckboxIcon from '../../dist/assets/checkbox';


class PartnerDaftar extends Component {
  state = {

  }

  componentDidMount() {
    document.body.style.backgroundColor = 'white';
    window.scrollTo(0, 0);
  }

  render() {
    const lists = [
      'Manajemen peserta beasiswa partner yang intuitif',
      'Track progress lebih mudah dan efisien',
      'Kirim pesan ke peserta tak perlu ribet lagi!',
      'Temukan calon penerima beasiswa yang cocok dengan cepat',
    ];
    return (
      <div id="pDaftar">
        <div id="partnerPadding" className="header pDaftarMobilePadding">
          <Header />
        </div>
        <div id="partnerPadding">
          <h2 className="pDaftar title pDaftarMobilePadding">Mulai menjadi partner beasiswa</h2>
        </div>
        <Grid stackable columns={2} id="partnerPadding">
          <Grid.Column computer={10} id="pDaftarLeft">
            <p className="pDaftar paraghraph">Setiap hari, lebih dari 20.000 pelajar dan mahasiswa mengunjungi Beasiswakita untuk mencari Beasiswa. Beasiswakita membantu mereka menemukan beasiswa yang tepat dan mudah. Dengan menjadi partner, beasiswa akan tersalur ke orang yang tepat dengan mudah dan terstruktur. Segera tinggalkan cara lama dan jadilah bagian Beasiswakita sekarang juga. </p>
            <p className="pDaftar paraghraph margintop10">Selain itu, Beasiswakita akan membantu partner dalam banyak hal, antara lain:</p>
            <div className="margintop20">
              {lists.map(doc => (
                <div className="flex paddedLeft margintop10">
                  <div style={{ flexShrink: 0, paddingTop: '2px' }}>
                    <CheckboxIcon />
                  </div>
                  <span className="pDaftar paraghraph">{doc}</span>
                </div>
                ))}
            </div>
          </Grid.Column>
          <Grid.Column computer={6}>
            <p className="pDaftar inputLabel">Nama Lengkap</p>
            <Input className="pDaftar input" fluid placeholder="contoh: Gema Abriantini" />
            <p className="pDaftar inputLabel">Yayasan/Perusahaan</p>
            <Input className="pDaftar input" fluid placeholder="Business, Inc." />
            <p className="pDaftar inputLabel">Logo Yayasan/Perusahaan</p>
            <Input className="pDaftar input" type="file" fluid placeholder="Business, Inc." />
            <p className="pDaftar inputLabel">Email</p>
            <Input className="pDaftar input" fluid placeholder="contoh: gema@mail.com" />
            <p className="pDaftar inputLabel">Password</p>
            <Input className="pDaftar input" fluid />
            <Link to="/partnership/board">
              <Button fluid id="pDaftarSubmitBtn">Menjadi Partner</Button>
            </Link>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = {

};


export default connect(mapStateToProps, mapDispatchToProps)(PartnerDaftar);

