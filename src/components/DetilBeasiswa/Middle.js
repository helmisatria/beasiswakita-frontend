import React from 'react';
import { Icon } from 'semantic-ui-react';

const persyaratan = [
  'Lulusan S1 di berbagai bidang studi, akreditasi Program Studi minimal B.',
  'Lulus ujian masuk Program Pascasarjana UNDIP',
];

export default () => (
  <div>
    <div id="detilPadding">
      <p className="detil title mini">Deskripsi</p>
      <p className="detil content paragraph">
                Hai Beasiswakita user, kali ini ada beasiswa S2 dari Kementerian Pemuda dan Olahraga (Kemenpora) RI yang bekerjasama dengan Program Magister Ilmu Ekonomi dan Stusi Pembangunan Fakultas Ekonomika dan Bisnis Universitas Diponegoro. Beasiswa ini diperuntukkan untuk para pemuda berprestasi diseluruh Indonesia tahun akademik 2018-2019.
        <br />
        <br />
                Para penerima beasiswa akan mendapatkan biaya tanggungan SPP selama empat semester di Program Magister Ekonomi dan Kewirausahaan di Universitas Diponegoro, Semarang. Tertarik untuk mendapatkan beasiswa ini? Ikuti persyaratannya!
      </p>

      <p className="detil title mini">Persyaratan</p>
      {persyaratan.map(syarat => (
        <div className="flex center paddedLeft" style={{ marginBottom: '10px' }}>
          <Icon name="circle" size="small" style={{ color: '#d8d8d8' }} />
          <span className="detil content paragraph">{syarat}</span>
        </div>
      ))}
    </div>
  </div>
);
