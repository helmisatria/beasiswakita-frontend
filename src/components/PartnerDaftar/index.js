import React, { Component } from 'react';
import { Grid, Input, Button } from 'semantic-ui-react';
import FormData from 'form-data';

import { connect } from 'react-redux';

import '../../dist/css/partnerDaftar.css';
import Header from '../Header/v3';

import CheckboxIcon from '../../dist/assets/checkbox';
import AuthenticationAction from '../../reducers/AuthenticationRedux';
import FileAction from '../../reducers/FileRedux';

class PartnerDaftar extends Component {
  state = {
    email_address: '',
    password: '',
    password_confirm: '',
    name: '',
    position: '',
    organization_name: '',
    organization_email: '',
    address: '',
    city: '',
    region: '',
    country: '',
    zipcode: '',
    website: '',
    logo: '',
    file: null,
  }

  alreadyRequest = false;

  componentDidMount() {
    document.body.style.backgroundColor = 'white';
    window.scrollTo(0, 0);
  }

  componentWillReceiveProps({
    authentication, file, history, uploadPic,
  }) {
    if (this.alreadyRequest && !authentication.fetching && !authentication.error) {
      this.alreadyRequest = false;

      const formData = new FormData();
      formData.append('file', this.state.file);

      this.props.uploadPic(formData);
    }
  }

  registerOrg = () => {
    const user_data = {
      name: this.state.name,
      position: this.state.position,
      organization_name: this.state.organization_name,
      organization_email: this.state.organization_email,
      address: this.state.address,
      city: this.state.city,
      region: this.state.region,
      country: this.state.country,
      zipcode: this.state.zipcode,
      website: this.state.website,
      logo: this.state.logo,
    };

    const upload = {
      email_address: this.state.organization_email,
      password: this.state.password,
      password_confirm: this.state.password,
      role: this.state.role,
      user_data,
    };

    this.props.registerOrg({
      ...upload,
      role: 'organization',
    });

    this.alreadyRequest = true;
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }


  render() {
    const {
      mail_address,
      password,
      password_confirm,
      name,
      position,
      organization_name,
      organization_email,
      address,
      city,
      region,
      country,
      zipcode,
      website,
      logo,
    } = this.state;

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
            <Input
              className="pDaftar input"
              fluid
              placeholder="contoh: Gema Abriantini"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
            <p className="pDaftar inputLabel">Yayasan/Perusahaan</p>
            <Input
              className="pDaftar input"
              fluid
              placeholder="Business, Inc."
              name="organization_name"
              value={this.state.organization_name}
              onChange={this.handleInputChange}
            />
            <p className="pDaftar inputLabel">Logo Yayasan/Perusahaan</p>
            <Input
              className="pDaftar input"
              type="file"
              fluid
              name="logo"
              onChange={event => this.setState({ file: event.target.files[0] })}
            />
            <p className="pDaftar inputLabel">Email</p>
            <Input
              className="pDaftar input"
              fluid
              placeholder="contoh: gema@mail.com"
              name="organization_email"
              value={this.state.organization_email}
              onChange={this.handleInputChange}
            />
            <p className="pDaftar inputLabel">Password</p>
            <Input
              className="pDaftar input"
              fluid
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
            <Button fluid id="pDaftarSubmitBtn" onClick={this.registerOrg}>Menjadi Partner</Button>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authentication: {
    fetching: state.Authentication.fetching,
    error: state.Authentication.error,
    message: state.Authentication.message,
    data: state.Authentication.data,
  },
  file: {
    fetching: state.File.fetching,
    error: state.File.error,
    message: state.File.message,
    data: state.File.data,
  },
});

const mapDispatchToProps = dispatch => ({
  registerOrg: params => dispatch(AuthenticationAction.organizationRequest(params)),
  uploadPic: params => dispatch(FileAction.uploadRequest(params)),
});


export default connect(mapStateToProps, mapDispatchToProps)(PartnerDaftar);

