import React, { useState } from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { Link } from 'react-router-dom';
import './sidebar.css';
import { IconContext } from 'react-icons';
import { SlGraduation } from "react-icons/sl";
import { GoPeople } from "react-icons/go";
import { Modal } from 'react-bootstrap';
import { Image, Button } from 'react-bootstrap';
// import "../style.css"
import 'animate.css';
import { Container, Row, Col, Card } from "react-bootstrap";
import { TbTargetArrow } from "react-icons/tb";
import { VscFeedback } from "react-icons/vsc";
import { MdMiscellaneousServices } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";
import { SiGoogleclassroom } from "react-icons/si";
import { GiClassicalKnowledge } from "react-icons/gi";
import { FaChalkboardTeacher } from "react-icons/fa";
import Prestasi from '../Prestasi/Prestasi';
import { FaBars } from "react-icons/fa6";
import { IoStatsChartSharp } from "react-icons/io5";
import { PiSubtitlesFill } from "react-icons/pi";
import { HiIdentification } from "react-icons/hi";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import schoolimg from "../../assets/image/sekolah.jpg";
import gbrschool from "../../assets/image/school.jpg";
import line from '../../assets/image/line.png';
import me from "../../assets/image/me.JPG";
import ps from "../../assets/image/jurusan/PS.jpeg";
import pplg from "../../assets/image/jurusan/PPLG.jpeg";
import dkv from "../../assets/image/jurusan/DKV.jpeg";
import tjkt from "../../assets/image/jurusan/TJKT.jpeg";
import LK from "../../assets/image/jurusan/LK.jpeg";
import { motion } from 'framer-motion';

// deklarasi tentang jurusan
const Jurusan = ["PS", "PPLG", "DKV", "TJKT", "LK"];
const deskripsiJurusan = {
  PS: {
    nama: [
      "Pekerja sosial"
    ],
    image: [ps],
    tujuan: ["Menyiapkan Tenaga Menengah sebagai Asisten Pekerja sosial untuk Siap Bekerja di Lembaga Sosial serta Memiliki Kepedulian dan Rasa Empati terhadap Masalah Sosial."],
    desc: ["Pekerjaan Sosial adalah suatu profesi yang berbasis praktik dan akademis dalam memberikan pelayanan sosial kepada individu, keluarga, kelompok atau masyarakat yang mengalami permasalahan sosial dan mewujudkan eksistensi sosialnya."],
    kapasitas: ["X PS1: 36 siswa", "X PS2: 36 siswa", "Total: 72 siswa"],
    mapel: ["Informatika", "Dasar-dasar Kejuruan Pekerjaan Sosial", "Intervensi Pelayanan Pekerjaan Sosial pada Penyandang Masalah Sosial", "Kesehatan", "Bahasa Jepang", "Projek Kreatif dan Kewirausahaan"],
    program: ["Penguasaan bahasa Jepang", "Penguasaan bahasa Jepang", "Rangking 1 -3 Keperawatan Sosial SMKN 8 Semarang beasiswa di POLITEK Kesejahteraan Sosial Bandung"],
    fasilitas: ["Lab. Bahasa Jepang", "Lab. Komunikasi seperti ruang sidang kasus, ruang konseling", "Ruang Teater", "Ruang hypno terapi dan ruang kesehatan", "Taman Anak Sejahtera / TPA “ Permata Bunda “", ""],
    dudi: ["BNN (Badan Narkotika Nasional) Provinsi jawa Tengah", "Dinas Sosial Provinsi Jawa Tengah", "Dinas Pendidikan dan Kebudayaaan Prov. Jawa Tengah", "Rumah Sakit Jiwa “Amino Gondo Hutomo” Semarang", "Panti Pelayanan Sosial Swasta di Provinsi Jawa Tengah", "Politeknik Kesejahteraan Sosial (POLTEKESOS) Bandung"],
    mitraBisnis: ["Rumpelsos Lansia Pucang gading Semarang", "PKP “ Margo Widodo  “Semarang", "Rumpelsos Lansia “Wening Werdoyo” Ungaran", "Panti Sosial Bina Remaja Ungaran", "PTNRW “Panganti” Temanggung", "Panti Asuhan “Woro Wiloso” salatiga", "Panti Asuhan “Kumudo Putra – Putri” Magelang", "Panti Khusus Ngudi Rahayu Boja", "Rumah Sakit Jiwa “Amino Gondo Oetomo” Semarang", "SLB Negeri Semarang, SLB Swadaya Semarang", "YPAC Semarang", "Panti lansia “Harapan Asri” Semarang, Panti Werda “Salib Putih” Salatiga"]
  },
  PPLG: {
    nama: [
      "Pengembangan Perangkat Lunak dan Gim"
    ],
    image: [pplg],
    desc: ["Pengembangan Perangkat Lunak dan Gim (PPLG) adalah program keahlian yang mempelajari cara pengembangan perangkat lunak termasuk pembuatan, pemeliharaan, manajemen organisasi pengembangan perangkat lunak dan manajemen kualitas"],
    kapasitas: ["X PPLG1: 36 siswa", "X PPLG 2: 36 siswa", "X PPLG 3: 36 siswa", "Total: 108 siswa"],
    mapel: ["Informatika", "Dasar-dasar Pengembangan Perangkat Lunak dan Gim", "Konsentrasi Rekayasa Perangkat Lunak", "Projek kreatif dan Kewirausahaan", "Robotik"],
    program: ["Robotik dan Android"],
    fasilitas: ["Laboratorium  Androidbotic APPs", "Laboratorium  Pemdas dan PBO", "Laboratorium  Robotik dan IOT", "Laboratorium   Pemograman Web"],
    mitraBisnis: ["Dinustek", "Java Valley Technology", "FIF", "Phapros", "IT Talk", "STIMART AMNI", "UNDIP", "USM", "PIP", "Excellent Komputer", "Indonesia Power", "Bank Mandiri"]
  },
  DKV: {
    nama: [
      "Desain Komunikasi Visual"
    ],
    image: [dkv],
    desc: ["Jurusan Desain Komunikasi Visual (DKV) adalah jurusan yang berfokus pada pengembangan kreativitas dan keterampilan visual untuk menghasilkan komunikasi yang efektif melalui media visual. DKV SMK N 8 Semarang mencakup bidang seperti ilustrasi, fotografi, desain grafis, animasi, dan multimedia."],
    kapasitas: ["X DKV 1: 36 siswa", "X DKV 2: 36 siswa", "X DKV 3: 36 siswa", "Total: 108 siswa"],
    mapel: ["Technopreuneur bidang usaha DKV", "Menciptakan peluang bisnis bidang DKV", "Sketsa dan illustrasi", "Fotografi", "Komputer grafis", "Desainer iklan"],
    program: ["Desain Grafis", "Desain Cetak", "Fotografi", "Videografi"],
    fasilitas: ["Laboratorium Audio", "Laboratorium Editing Video", "Laboratorium Desain Grafis Percetakan", "Laboratorium Animasi", "Ruang Server", "Studio N8TV"],
    mitraBisnis: ["TVku", "Smart Media", "Telkom", "RPA", "Percetakan Swadaya", "Gajah Print", "Rajawali Print", "My foto Club", "Delicious Photography", "Creative Photography"]
  },
  TJKT: {
    nama: [
      "Teknik Jaringan Komputer dan Telekomunikasi"
    ],
    image: [tjkt],
    tujuan: ["TKJ SMKN 8 Semarang memiliki slogan/jargon  'Jaringan Membangun Prestasi' dengan maksud sebagai siswa TKJ harus bisa membangun jaringan yang baik sehingga bisa membuahkan prestasi sesuai apa yang masing-masing siswa harapkan. TKJ SMKN 8 Semarang berkomitmen memberikan layanan pendidikan terbaik dalam mengembangkan kemampuan serta keahlian siswa dibidang IT (Information Technology) khususnya dibidang jaringan."],
    desc: ["Teknik Komputer dan Jaringan merupakan ilmu terkait kemampuan algoritma, dan pemrograman komputer, perakitan komputer, perakitan jaringan komputer, dan pengoperasian perangkat lunak, dan internet. Teknik Komputer dan Jaringan juga membutuhkan pemahaman di bidang teknik listrik, dan ilmu komputer sehingga mampu mengembangkan, dan mengintegrasikan perangkat lunak, dan perangkat keras."],
    kapasitas: ["X TJKT 1: 36 siswa", "X TJKT 2: 36 siswa", "Total: 72 siswa"],
    mapel: ["Informatika", "Dasar-dasar Teknik Jaringan Komputer dan Telekomunikasi", "Konsentrasi Teknik Komputer dan Jaringan", "Projek Kreatif dan Kewirausahaan (IOT)", "Teknologi Layanan Jaringan" ],
    program: ["Internet of Thing (IoT)"],
    fasilitas: ["Laboratorium Jaringan", "Laboratorium Administrasi Sistem Jaringan", "Laboratorium Perakitan Komputer", "Laboratorium Software", "Ruang Server"],
    mitraBisnis: ["Suara Merdeka", "Gmedia", "CK CCTV", "Phapros", "First Media", "STIMART AMNI", "UNDIP", "USM", "PIP", "Excelent Komputer"]
  },
  LK: {
    nama: [
      "Layanan Kesehatan"
    ],
    image: [LK],
    tujuan: ["Menyiapkan Tenaga Menengah sebagai caregiver / pendamping lansia / tenaga pelaksana keperawatan untuk siap bekerja di lembaga sosial atau panti sosial dan masyarakat, instansi kesehatan pemerintah maupun swasta seperti rumah sakit, pukesmas dan balai keperawatan kesehatan serta memiliki kepedulian dan rasa empati terhadap lansia / senior / klien dengan segala permasalahannya"],
    desc: ["Kompetensi keahlian Layanan Kesehatan (LK) adalah Kompetensi keahlian yang berfokus pada pendampingan serta perawatan individu dari segi fisik, emosional, sosial dan spiritual dengan metode caring."],
    kapasitas: ["X LK 1: 36 siswa", "X LK 2: 36 siswa", "Total: 72 siswa"],
    mapel: ["Dasar - dasar Pendapingan Senior", "Informastika", "Kesehatan", "Psikologi, Sosiologi & Antropologi", "Gerontologi dan Gerontik", "Kesehatan Mental Senior", "Komunikasi dan Relasi", "Psikososial Senior", "Konseling Senior", "Terapi Lanjut Senior", "Pemberdayaan Senior", "Produk Kreatif dan Kewirausahaan"],
    program: ["Nursing Assistant", "Domestic elderly care companion", "Escort care of elderly foreigners (japan, australia, south korea)"],
    fasilitas: ["Hypnotherapy (lab. Kesehatan)", "Lab Bahasa Jepang"],
    mitraBisnis: ["Senior living (darmawan park, sentul bogor)", "Rumpelsos pucang gading semarang", "Rumpelsos wening werdoyo ungaran"]
  }
};

export default function Sidebar () { 
    const [namaJurusan, setnamaJurusan] = useState("PS");

    function clickEventHandler(item) {
        setnamaJurusan(item);
    }

    const [modalsState, setModalsState] = useState({
        show1: false,
        show2: false,
        show3: false,
        show4: false,
        show5: false,
        show6: false,
        show7: false,
    });

    const toggleModal = (modalKey) => {
        setModalsState((prev) => ({ ...prev, [modalKey]: !prev[modalKey] }));
    };


    const modalsData = [
    {
      key: 'show1',
      icon: <AiIcons.AiFillHome />,
      title: 'Profil Sekolah',
      content: (
        <Container style={{ width:"90%" }}>
          <Row>
            <Col xs={12} md={6} className="mb-3 mb-md-0">
              <Image src={schoolimg} alt="School Image" className='school-img'/>
            </Col>
            <Col xs={12} md={6} style={{ textIndent:'1.5em' }}>
                <p style={{ padding: "0 0 0 10px" }}>
                    SMKN 8 Semarang adalah SMK yang menjadi Pusat Keunggulan Center Of Excellence (COE) terletak di pusat Kota Semarang, Jawa Tengah, Indonesia. Sekolah ini memiliki reputasi yang baik dalam menyediakan pendidikan kejuruan berkualitas kepada siswa-siswinya, dibuktikan dengan diraihnya akreditasi A.
                </p>
            </Col>
            </Row>
            <Row>
              <Col style={{ textIndent:'1.5em' }}>
                <p style={{ textAlign: 'justify' }}>
                    Sekolah ini memiliki potensi untuk mengembangkan keseimbangan antara sikap spiritual dan sosial, pengetahuan, serta keterampilan, dan mengaplikasikannya dalam berbagai situasi di sekolah dan masyarakat.
                </p>
                <p style={{ textAlign: 'justify' }}>
                    Sekolah ini menganggap dirinya sebagai bagian dari masyarakat yang memberikan pengalaman belajar kepada siswa. Tujuannya adalah agar siswa dapat mengaplikasikan apa yang mereka pelajari di sekolah ke dalam masyarakat dan memanfaatkan masyarakat sebagai sumber pembelajaran. Sekolah ini memberikan waktu yang cukup bagi siswa untuk mengembangkan berbagai sikap, pengetahuan, dan keterampilan.
                </p>
                <p>
                    Pendekatan pembelajaran di sekolah ini berfokus pada siswa, interaktif (melibatkan guru, siswa, masyarakat, dan lingkungan alam, serta sumber/media lainnya), jejaring, belajar mandiri dan kelompok (berbasis tim), berbasis multimedia, dan penguatan pola pembelajaran ilmu pengetahuan dari berbagai disiplin. Sarana dan prasarana yang ideal, seperti ruang pembelajaran, ruang praktik, dan area terbuka, menjadi pendukung utama dalam menciptakan proses pembelajaran yang baik.          </p>
                <p style={{ textAlign: 'justify' }}>
                    Sebagai sekolah menengah kejuruan, SMK Negeri 8 Semarang bertujuan untuk menyalurkan lulusannya sesuai dengan kompetensi keahliannya. Hal ini dilakukan dengan menjalin kerjasama dengan Dunia Usaha, Dunia Industri, dan Dunia Kerja (DUDIKA) yang relevan.
                </p>
              </Col>
            </Row>
          
        {/* predikat */}
        <Container className='feature' fluid>
          <div className='heading'>
            <h1>Predikat Sekolah</h1>
          </div>
            <div className='content grid'>  
                <div className='box btn_shadow'>
                    <MdMiscellaneousServices />
                    <p>
                        SMK PK (Pusat Keunggulan) Bidang Migrant Service 2021
                    </p>
                </div>
                <div className='box btn_shadow'>
                    <MdMiscellaneousServices />
                    <p>
                        SMK PK (Pusat keunggulan) dengan Skema Pemadagan Dukungan Industri Bidang Migrant Service 2022
                    </p>        
                </div>
          </div>
        </Container>

        {/* Jumlah */}
        <section className='awards padding'>
          <div className='content grid4 mtop'>
              <div className='box'>
                <div className='icon'>
                  <PiStudentBold />
                </div>
                <p>1360</p>
                <p>Siswa</p>
                  </div>
                  <div className='box'>
                <div className='icon'>
                  <SiGoogleclassroom />
                </div>
                <p>38</p>
                <p>Kelas</p>
                  </div>
                  <div className='box'>
                <div className='icon'>
                  <GiClassicalKnowledge />
                </div>
                <p>5</p>
                <p>Jurusan</p>
                  </div>
                  <div className='box'>
                <div className='icon'>
                  <FaChalkboardTeacher />
                </div>
                <p>91</p>
                <p>Guru</p>
              </div>
          </div>
        </section> 
        </Container>
      ),
    },
    {
      key: 'show2',
      icon: <IoIcons.IoIosPaper />,
      title: 'Sejarah Sekolah',
      content: (
        <Container style={{ width:"90%", textIndent: '1.5em' }}>
            <Image src={gbrschool} alt="School" className='gbr-school'/>
                <p style={{ marginTop: "5%" }}>
                  Pada mulanya di kota Semarang hanya ada satu Sekolah Pekerja Sosial Atas (SPSA) yaitu SPSA Semarang yang berlokasi di Jl. Imam bonjol semarang yang berdiri tahun 1961. SPSA adalah sekolah khusus yang mempunya jenjang pendidikan 4 tahun.
                </p>
              <p>
                  SMK Negeri 8 Semarang merupakan salah satu Sekolah Menengah Kejuruan (SMK) di Indonesia yang sejak tahun pelajaran 1994/1995 telah ditunjuk sebagai SMK yang melaksanakan Pendidikan Sistem Ganda (PSG). PSG adalah suatu bentuk penyelenggaraan pendidikan keahlian profesional yang memadukan secara sistematis dan sinkron antara program pendidikan di sekolah dan program penguasaan keahlian yang diperoleh melalui kegiatan bekerja langsung di dunia kerja, terarah untuk mencapai suatu tingkat keahlian profesional tertentu. Pelaksanaannya melalui Praktek Kerja Industri (Prakerin) yang mulai diberlakukan pada siswa tingkat I semester II sebagai masa orientasi kerja/pengenalan kerja dengan jangkawaktu 1 bulan dan tingkat II semester V selama 2 bulan sebagai masa pelatihan kerja dengan dibantu pembimbing di Dunia Usaha/Dunia Industri (DU/DI), masa kerja dengan bimbingan guru dan DU/DI, dengan persiapan tugas akhir sebagai syarat mengikuti Uji Kompetensi oleh LSP (Lembaga Sertifikasi Profesi).
              </p>
              <p>
                  Saat ini SMK Negeri 8 Semarang mempunyai empat jurusan yaitu Pekerjaan Sosial (Peksos), Rekayasa Perangkat Lunak (RPL), Multimedia (MM) dan Teknik Komputer dan Jaringan (TKJ).
              </p>
              <p>
                  Pada Penerimaan Peserta Didik (PPD) tahun 2015, SMKN 8 Semerang membukukan catatan baik. Pendaftar mencapai 1.744 orang. Padahal kuota yang disediakan untuk siswa baru hanya 391 kursi.
              </p>
              <p>
                  Siswa SMKN 8 Semarang juga aktif mengikuti berbagai lomba. Catatan menunjukkan, selama bulan Mei 2014 saja, ada tiga trofi bergengsi yang bisa diboyong ke sekolah. Prestasi siswaSMKN 8 Semarang di antaranya, juara I lomba Fotografi Fasilkom Week Udinus atas nama Prista Inu Kinanti, kelas X Multimedia 1. Risal Fajar meraih juara III pada ajang yang sama. Kemudian juara I lomba fotografi Yamaha Kompas Youth Futsal Walikota Cup 2014 atas nama Chandra Suhada siswa kelas X Multimedia 2.
              </p>
              <p>
                  SMKN 8 Semarang memang tengah mempersiapkan diri menjadi pusat layanan IT di Kota Semarang. Tak hanya para siswa yang membuat kegiatan pengabdian melalui tugas projek. Para guru juga sering membuat kegiatan pelatihan bersama Musyawarah Guru Mata Pelajaran (MGMP) di tingkat Jawa Tengah.
              </p>
        </Container>
      ),
    },
    {
      key: 'show3',
      icon: <TbTargetArrow />,
      title: 'Visi Misi Sekolah',
      content: (
        <Container style={{ width: "95%" }}>
          <ul className="visi-menu">
            <li className='visi-menu-items d-flex'>
              <img src={line} className="garis-visi" alt="garis-visi"/>
              <div className='visi-text'>
                <p>Visi</p></div>
              <div className='visi-desc'>
                <p>Terwujudnya lulusan yang kompeten, berkarakter IDOLA (Inovatif Disiplin Kolaboratif), dan berwawasan lingkungan.</p>
              </div>
            </li>
            <li className='visi-menu-items d-flex'>
              <img src={line} className="garis-visi" alt="garis-visi"/>
              <div className='visi-text'>
                <p>Misi</p>
              </div>
              <div className='visi-desc'>
                <ol className='ol-desc'>
                  <li> Mengembangkan kompetensi abad 21</li>
                  <li> Mengembangkan sekolah yang menyenangkan (GSM)</li>
                  <li> Melaksanakan pembelajaran berbasis CBT (Competency Based Training)</li>
                  <li> Menciptakan iklim belajar yang berakar pada norma agama dan budaya bangsa</li>
                </ol>     
              </div>
            </li>
            <li className='visi-menu-items d-flex'>
              <img src={line} className="garis-visi" alt="garis-visi"/>
              <div className='visi-text'>
                <p>Tujuan Sekolah</p>
              </div>
              <div className='visi-desc'>
                <ol className="ol-desc">
                <li> Menyiapkan peserta didik agar mampu memilih karier dan mengisi lowongan pekerjaan</li>
                <li> Membekali peserta didik dengan kompetensi sesuai dengan Kompetensi Keahlian yang dipilih</li>
                <li> Membentuk watak dan perilaku lulusan yang inovatif disiplin kolaboratif</li>
                <li> Menyiapkan peserta didik agar menjadi manusia produktif dan gigih dalam berkompetisi</li>
                </ol>
              </div>
            </li>
          </ul>
        </Container>
      ),
    },
    {
      key: 'show4',
      icon: <SlGraduation />,
      title: 'Jurusan Sekolah',
      content: (
        <Container style={{ width: "100%" }}>
          <div>
          {Jurusan.map((item) => {
            return (
              <div className="menu-jurusan" key={item}>
                <ul className="jurusan-menu d-flex">
                    <li onClick={() => clickEventHandler(item)} className='jurusan-menu-items jurusan-text text-2'>
                        {item} 
                    </li>
                </ul>
              </div> 
            );
          })}
        </div>

        <div className="titledisplay">
          {/* <h2>{nama}</h2> */}
            {deskripsiJurusan[namaJurusan] && deskripsiJurusan[namaJurusan].nama.map(function (item, index) {
            return (
                <div key={item}>
                <h2 className='text-2 title-jurusan'><br></br><br></br>{item} </h2>
                <Container>
                    <div className='konten-jurusan'>
                    <img
                        src={deskripsiJurusan[namaJurusan].image && deskripsiJurusan[namaJurusan].image[index]}
                        alt={item}
                        className="img-responsive mx-auto d-block"
                        style={{ maxWidth: '40%', height: 'auto' }}
                    />
                    <div className='desc-div'>
                        <p style={{ textIndent: "1.5rem", textAlign: "justify" }}>{deskripsiJurusan[namaJurusan].desc && deskripsiJurusan[namaJurusan].desc[index]}</p>
                        <div className='tujuan-div'>
                        <p style={{ textIndent: "1.5rem", textAlign: "justify" }}>{deskripsiJurusan[namaJurusan].tujuan && deskripsiJurusan[namaJurusan].tujuan[index]}</p>
                        </div>
                    </div>
                    </div>
                    <Row className="mt-3">
                    <Col xs={12} md={6} className="mb-3 mb-md-0">
                        <h3>Mata Pelajaran:</h3>
                        <ul>
                        {deskripsiJurusan[namaJurusan].mapel && deskripsiJurusan[namaJurusan].mapel.map((mapel, mapelIndex) => (
                            <li key={mapelIndex}>
                            {mapel}
                            </li>
                        ))}
                        </ul>
                    </Col>
                    <Col xs={12} md={6}>
                        <h3>Program Unggulan :</h3>
                        <ul>
                        {deskripsiJurusan[namaJurusan].dudi && deskripsiJurusan[namaJurusan].dudi.map((dudi, dudiIndex) => (
                            <li key={dudiIndex}>
                            {dudi}
                            </li>
                        ))}
                        </ul>
                    </Col>
                    </Row>
                    <div className="row mt-3">
                    <h3 className="section-title">Daya Tampung Siswa</h3>
                    {deskripsiJurusan[namaJurusan].kapasitas && deskripsiJurusan[namaJurusan].kapasitas.map((kapasitas, kapasitasIndex) => (
                        <p key={kapasitasIndex}>
                        {kapasitas}
                        </p>
                    ))}
                    
                    <h3 className="section-title">Fasilitas</h3>
                    <ul>
                        {deskripsiJurusan[namaJurusan].fasilitas && deskripsiJurusan[namaJurusan].fasilitas.map((fasilitas, fasilitasIndex) => (
                        <li key={fasilitasIndex}>
                            {fasilitas}
                        </li>
                        ))}
                    </ul>
                    </div>
                    <div className="row mt-3">
                    <h3 className="section-title">Mitra Bisnis</h3>
                    {deskripsiJurusan[namaJurusan].mitraBisnis && deskripsiJurusan[namaJurusan].mitraBisnis.map((mitraBisnis, mitraBisnisIndex) => (
                        <motion.div
                        key={mitraBisnisIndex}
                        className="col-lg-4 col-md-6 mb-4"
                        whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                        >
                        <Card>
                            <Card.Body style={{ padding: "0 !important" }}>
                            <div>
                                <p style={{fontSize: "0.8rem", textAlign: "left", fontWeight: "700"}}>{mitraBisnis}</p>
                            </div>
                            
                            </Card.Body>
                        </Card>
                        </motion.div>
                    ))}
                    </div>
                </Container>
                </div>
            );
            })}
            </div>
        </Container>
      ),
    },
    {
      key: 'show5',
      icon: <TbTargetArrow />,
      title: 'Prestasi Sekolah',
      content: (
        <Container style={{ width: "95%" }}>
          <Prestasi />
        </Container>
      ),
    },
    {
      key: '6',
      icon: <GoPeople />,
      title: 'Tentang Kami',
      content: (
        <Container style={{ width:"90%", textIndent: '1.5em' }}>
            <p>
                Website virtual tour SMKN 8 Semarang adalah suatu platform interaktif yang memperkenalkan secara menyeluruh dan mendetail seluruh fasilitas, lingkungan, dan kegiatan yang ada di SMKN 8 Semarang. Dengan menggunakan teknologi mutakhir, website ini menghadirkan pengalaman visual yang mendekati pengalaman nyata berada di dalam lingkungan sekolah.
            </p>
            <br/>
          <div className='d-flex gap-1 develop-menu'>
          <IoStatsChartSharp />
            <h4 style={{ fontWeight: "700" }}>
                Profil Pengembang
            </h4>
          </div>
          <Row>
            <Col xs={12} md={4} >
              <Image src={me} alt="School Image" rounded className="gbr-about-menu" />
            </Col>
            <Col xs={12} md={8} className='side-left-about'>
                <ul className='about-menu'>
                    <li className='about-menu-items d-flex'>
                        <PiSubtitlesFill />
                        <p>Pendidikan Informatika dan Komputer</p>
                    </li>  
                    <li className='about-menu-items d-flex'>
                        <HiIdentification />
                        <p>5302419027</p>
                    </li>
                    <li className='about-menu-items d-flex'>
                        <SiGmail />
                        <p>fitriadwiseptiani@students.unnes.ac.id</p>
                    </li>
                    <li className='about-menu-items d-flex'>
                        <FaLinkedin />
                        <p>fitriadwi</p>
                    </li> 
                </ul>
            </Col>
            </Row>
          </Container>
      ),
    },
    {
      key: 'show6',
      icon: <VscFeedback />,
      title: 'Feedback',
      content: (
        <Container>
          <Link to="https://bit.ly/AngketResponPenggunaVirtualTour">
            <Button className ="btn-feedback">
            Beri Tanggapan
          </Button>
          </Link>
        </Container>
      ),
    },
  ];

    // fungsi mengatur kerja sidebar
    const handleMenuClick = (modalKey) => {
        closeSidebar(); // Close the sidebar first
        toggleModal(modalKey); // Toggle the modal after closing the sidebar
    };

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(true);
    const closeSidebar = () => setSidebar(false);

    // eksekusi tampilan sidebar
    return (
    <>
      <IconContext.Provider value={{ color: '#EBF0F3' }}>
          <Link to='#' className='menu-bars d-flex'>
            <FaBars onClick={showSidebar} style={{ color: '#fff' }} />
            <p id="fitur-menu" onClick={showSidebar} style={{  }}>Menu</p>
          </Link>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
              <Link to='#' className='navbar-toggle'>
        <AiIcons.AiOutlineClose onClick={closeSidebar} />              </Link>
          
          <ul className='nav-menu-items' onClick={showSidebar}>
            
            {/* <img src={gbrmenu} className="gbr_menu" /> */}
            {modalsData.map((item, index) => (
              <li className='nav-text' key={index}>
                 <Link onClick={() => handleMenuClick(item.key)}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
              </li>
            ))}
          </ul>
        </nav>
      </IconContext.Provider>

      {/* Dynamically render modals based on modalsData state */}
      {modalsData.map((modal, index) => (
        <Modal
          key={index}
          show={modalsState[modal.key]}
          onHide={() => toggleModal(modal.key)}
          centered
          aria-labelledby="contained-modal-title-vcenter"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter" style={{fontsize: "0.9rem"}}>
              {modal.icon} {modal.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {modal.content}
          </Modal.Body>
        </Modal>
      ))}
    </>
  );
}
