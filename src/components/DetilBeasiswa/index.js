import React, { Component } from 'react';
import { Breadcrumb, Divider, Button, Grid, Flag, Icon } from 'semantic-ui-react';

import CheckboxIcon from '../../dist/assets/checkbox';

import '../../dist/css/detilBeasiswa.css';

import Header from '../Header/v2';
import Top from './Top';
import Middle from './Middle';
import Footer from '../Footer';
import ArrowUpRightIcon from '../../dist/assets/arrow-up-right-big';


export default class DetilBeasiswa extends Component {
  state = {

  }

  componentDidMount() {
    document.body.style.backgroundColor = '#f1f3f5';
    window.scrollTo(0, 0);
  }

  render() {
    const documentsRequired = [
      'Fotocopy Akte Kelahiran',
      'Piagam/ Sertifikat penghargaan prestasi di bidang seni, sosial, IPTEK, dan imtaq.',
      'Surat rekomendasi dari ketua umum DPP/DPD Organisasi Kepemudaan atau Lembaga Masyarakat Berbasis Pemuda tingkat pusat atau tingkat Provinsi/ Kabupaten/ Kota.',
      'Piagam/ sertifikat/ medali atau berupa pengahrgaan lainnya pada olahragawan/ pelatih berprestasi.',
      'Surat Keterangan sehat yang dikeluarkan oleh Rumah Sakit Umum Pemerintah/ Daerah',
      'Surat Keterangan Catatan Kepolisian',
      'Surat Keterangan Bebas Narkoba yang dikeluarkan oleh Badan Narkotika Nasional (BNN) atau Rumah Sakit Umum Pemerintah Daerah.',
      'Surat pernyataan tidak terikat program beasiswa dari pihak lain di atas materai Rp. 6000.',
      'Surat pernyataan bukan Aparatur Sipil Negara di atas materai Rp. 6000.-',
    ];
    return (
      <div>
        <div className="detil background">
          <div className="detil gradient">
            <Header />
          </div>
          <div id="detilContent">
            <Breadcrumb id="detilPadding">
              <Breadcrumb.Section className="disabled">Home</Breadcrumb.Section>
              <Breadcrumb.Divider icon="right chevron" />
              <Breadcrumb.Section className="disabled">Registration</Breadcrumb.Section>
              <Breadcrumb.Divider icon="right chevron" />
              <Breadcrumb.Section active>Personal Information</Breadcrumb.Section>
            </Breadcrumb>
            <Divider fitted />
            <Top />
            <Divider fitted />
            <Middle />
            <Divider fitted />
            <div id="detilPadding">
              <p className="detil title mini" id="detil_documentPerlu">Dokumen yang perlu dipersiapkan</p>
              {documentsRequired.map(doc => (
                <div className="flex paddedLeft margintop10">
                  <div style={{ flexShrink: 0, paddingTop: '2px' }}>
                    <CheckboxIcon />
                  </div>
                  <span className="detil content paragraph">{doc}</span>
                </div>
              ))}
            </div>
            <div id="detilPadding">
              <div id="detilClosing">
                <Grid stackable columns={2}>
                  <Grid.Column computer={10} tablet={9}>
                    <div>
                      <h4 id="detil_closingTitle">Dokumen kamu sudah siap?</h4>
                      <p className="detil subtitle mini">Yuk lakukan pendaftaran dengan menekan tombol easy apply!</p>
                    </div>
                  </Grid.Column>
                  <Grid.Column computer={6} tablet={7}>
                    <div className="flex center" id="detil_btnEasyApply">
                      <div id="detil_easyApplyLeftBtn">
                        <ArrowUpRightIcon />
                      </div>
                      <span id="detil_easyApplyRightBtnClosing" className="detil title mini">Easy Apply</span>
                    </div>
                  </Grid.Column>
                </Grid>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}
