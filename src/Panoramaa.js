import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { pannellum } from './pannellum';
import "pannellum/build/pannellum.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import panoramaGallery from './PanoramaGallery'; // Import the panorama data
import "./style.css"
import GuideChimp from 'guidechimp';
import guideChimpPluginBlurredOverlay from 'guidechimp/dist/plugins/blurredOverlay';
import { tour } from './components/Navigation/tourData';
import 'guidechimp/dist/guidechimp.css';
import 'guidechimp/dist/plugins/blurredOverlay.css';
import { Col, Container, Row, Modal } from 'react-bootstrap';
import Menu from './components/Navbar/Menu';
import PanoramaList from './PanoramaList';
import door from "./assets/image/hotspot/door.png"
import circle from "./assets/image/hotspot/circle.png"
import scene from "./assets/image/hotspot/scene.png"
import info from "./assets/image/hotspot/info.png"
import preview from "./assets/image/hotspot/preview.PNG"
import stair from "./assets/image/hotspot/stair.png"
import { IoIosHelpCircle } from "react-icons/io";
import { ChevronUp, ChevronDown, ChevronLeft, ChevronRight, Plus, Dash, Fullscreen, Repeat } from 'react-bootstrap-icons';

const PanoramaViewer = () => { 
    const panoramaRef = useRef(null);
    const [pitch, setPitch] = useState(0);
  const [yaw, setYaw] = useState(0);
  const [hfov, setHfov] = useState(0);
    const [autorotate, setAutorotate] = useState(false);
    const [selectedScene, setSelectedScene] = useState(Object.keys(panoramaGallery)[0]); 
    const [showPetunjukModal, setShowPetunjukModal] = useState(false);
    const navigate = useNavigate();
    const [showPanoramaListModal, setShowPanoramaListModal] = useState(false);
    const [showInformationModal, setShowInformationModal] = useState(false);
    const [informationContent, setInformationContent] = useState("");
const [showImageInfoModal, setShowImageInfoModal] = useState(false);
    useEffect(() => {
    setupGuideChimp();
    const viewer = pannellum.viewer(panoramaRef.current, {
    default: {
        firstScene: selectedScene,
        autoLoad: true,
        showFullscreenCtrl: false,
        showZoomCtrl: false,
        hotSpotDebug: true,
        pitch: panoramaGallery[selectedScene].pitch || 0,
        yaw: panoramaGallery[selectedScene].yaw || 0,
        hfov: panoramaGallery[selectedScene].hfov || 110,
        autoRotate: autorotate ? 1 : 0,
        autoRotateInactivityDelay: 8000,
        compass: true,
        northOffset: 247.5,
      },  
      scenes: {
      ...Object.keys(panoramaGallery).reduce((acc, key) => {
        acc[key] = {
          type: 'equirectangular',
          panorama: panoramaGallery[key].image,
          pitch: panoramaGallery[key].pitch || 0,
          yaw: panoramaGallery[key].yaw || 0,
          hfov: panoramaGallery[key].hfov || 110,
          hotSpots: panoramaGallery[key].hotSpots,
        };
        return acc;
    }, {}),

    },
    });
        
    // kontrol untuk navigasi
    const handlePanUp = () => {
      viewer.setPitch(viewer.getPitch() + 10);
    };
    const handlePanDown = () => {
      viewer.setPitch(viewer.getPitch() - 10);
    };
    const handlePanLeft = () => {
      viewer.setYaw(viewer.getYaw() - 10);
    };
    const handlePanRight = () => {
      viewer.setYaw(viewer.getYaw() + 10);
    };
    const handleZoomIn = () => {
      viewer.setHfov(viewer.getHfov() - 10);
    };
    const handleZoomOut = () => {
      viewer.setHfov(viewer.getHfov() + 10);
    };
    const handleFullscreen = () => {
      viewer.toggleFullscreen();
    };
    const handleAutorotate = () => {
      setAutorotate(!autorotate);
    };

    const panUpButton = document.getElementById('pan-up');
    const panDownButton = document.getElementById('pan-down');
    const panLeftButton = document.getElementById('pan-left');
    const panRightButton = document.getElementById('pan-right');
    const zoomInButton = document.getElementById('zoom-in');
    const zoomOutButton = document.getElementById('zoom-out');
    const fullscreenButton = document.getElementById('fullscreen');
    const autorotateButton = document.getElementById('autorotate');


    panUpButton.addEventListener('click', handlePanUp);
    panDownButton.addEventListener('click', handlePanDown);
    panLeftButton.addEventListener('click', handlePanLeft);
    panRightButton.addEventListener('click', handlePanRight);
    zoomInButton.addEventListener('click', handleZoomIn);
    zoomOutButton.addEventListener('click', handleZoomOut);
    fullscreenButton.addEventListener('click', handleFullscreen);
    autorotateButton.addEventListener('click', handleAutorotate);

    // menampilkan titik pitch dan yaw pada console
    viewer.on('mousedown', (coords) => {
            console.log('Pitch: ' + coords[0] + ', Yaw: ' + coords[1] +
                ', Center Pitch: ' + viewer.getConfig().pitch +
                ', Center Yaw: ' + viewer.getConfig().yaw +
                ', HFOV: ' + viewer.getConfig().hfov);
            setPitch(viewer.getConfig().pitch);
            setYaw(viewer.getConfig().yaw);
    });
            
    return () => {
      viewer.destroy();
    };
    }, [selectedScene, autorotate]);

    // pengaturan guidechimp / bantuan
    const setupGuideChimp = () => {
        GuideChimp.extend(guideChimpPluginBlurredOverlay);
    };
    const startTour = () => {
        const guideChimp = GuideChimp(getTourConfig());
        guideChimp.start();
    };
    const getTourConfig = () => {
        return tour;
    };
    const handleStartTourClick = () => {
        startTour();
    };
    
    // petunjuk
    const handleTogglePetunjukModal = () => {
        setShowPetunjukModal(!showPetunjukModal);
    };
    // data yang akan ditampilkan pada petunjuk
    const hintData = [
    {
        key: 'show1',
        icon: <IoIosHelpCircle />,
        title: 'Petunjuk',
        content: ( 
        <Container style={{ width: "90%" }}>
        {/* Langkah 1: Baca Panduan Awal */}
        <p>1. Ketika pertama kali membuka aplikasi virtual tour, bacalah panduan yang disediakan untuk mengetahui fitur-fitur yang dimiliki oleh aplikasi.</p>
        {/* Langkah 2: Melihat Gambar Panorama */}
        <p>2. Untuk melihat gambar panorama, ikuti langkah-langkah berikut:
            <ul>
                <li>Klik kiri pada mouse.</li>
                <li>Tahan tombol kiri mouse</li>
                <li>Gerakkan mouse sesuai dengan arah gambar panorama yang diinginkan</li>
            </ul>
        </p>
        {/* Langkah 3: Menggunakan Fitur Hotspot */}
        <p>3. Pahami fitur-fitur hotspot pada virtual tour:</p>
            <ul className='list-petunjuk'>
                <li><img src={door} className='gbr_petunjuk' alt='door'/>   : Tanda ini menunjukkan bahwa Anda bisa masuk ke dalam suatu ruangan.</li>
                <li><img src={scene} className='gbr_petunjuk' alt='scene'/>   : Tanda ini menunjukkan bahwa Anda bisa berpindah ke tempat lain sesuai arah panah.</li>
                <li><img src={info} className='gbr_petunjuk' alt='info'/>   : Tanda ini berarti terdapat informasi tambahan mengenai area tempat tersebut.</li>
                <li><img src={circle} className='gbr_petunjuk' alt='circle'/>   : Tanda ini memiliki fungsi yang sama dengan tanda panah sebelumnya.</li>
                <li><img src={preview} className='gbr_petunjuk' alt="preview"/>   : Tanda ini memberikan informasi terkait nama suatu ruangan atau tempat.</li>
                <li><img src={stair} className='gbr_petunjuk' alt='stair'/>   : Tanda ini menunjukkan bahwa gambar akan beralih ke scene tangga.</li>
            </ul>
        {/* Langkah 4: Menikmati Tampilan Lingkungan SMK N 8 Semarang */}
        <p>4. Setelah memahami semua fitur tambahan, selanjutnya Anda dapat menikmati semua tampilan lingkungan dari SMK N 8 Semarang.Setelah memahami semua fitur tambahan, nikmati semua tampilan lingkungan dari SMK N 8 Semarang. Jelajahi ruangan, pindah ke tempat lain, dan temukan informasi tambahan yang menarik.</p>
        {/* Fitur Tambahan */}
        <p style={{fontWeight: "700"}}>Fitur Tambahan</p>
        <p>Pada aplikasi ini Anda juga dapat menikmati beberapa fitur lainnya:</p>
        <ul>
            <li>Gunakan fitur menu untuk informasi tambahan terkait sekolah.</li>
            <li>Gunakan fitur kontrol untuk mengontrol tampilan gambar panorama.</li>
            <li>Gunakan denah sekolah untuk melihat penampakan tampilan panorama sekolah yang dapat diakses melalui denah.</li>
        </ul>
            
        <p style={{fontWeight: "700"}}>Denah Sekolah</p>
            <ol>
                <li>Klik tombol "Denah Sekolah" pada halaman utama.</li>
                <li>Pilih ruangan dengan mengklik icon lingkaran pada keterangan ruangan di denah.</li>
                <li>Tampilan tempat akan muncul di sisi kanan sesuai dengan lokasi yang dipilih.</li>
                <li>Untuk kembali ke halaman utama, klik tombol kembali.</li>
            </ol>
        <p>Dengan mengikuti langkah-langkah ini, Anda dapat mengakses dan menikmati seluruh fitur yang ditawarkan oleh aplikasi virtual tour SMK N 8 Semarang dengan mudah. Selamat mengeksplorasi!</p>
                
            </Container>
        ),
        },
    ];

    // denah
    const handleButtonClick = () => {
        navigate('/denah');
    };

    // panoramalist
    const handleSelectPanorama = (panoramaKey) => {
      setSelectedScene(panoramaKey);
    };

    const handleOpenPanoramaListModal = () => {
    // Filter images based on displayInList property
    const selectedImages = Object.keys(panoramaGallery)
      .filter((sceneKey) => panoramaGallery[sceneKey].displayInPreview)
      .map((sceneKey) => panoramaGallery[sceneKey]);
        console.log(selectedImages);
        setShowPanoramaListModal(true);
    };

    const handleClosePanoramaListModal = () => {
        setShowPanoramaListModal(false);
    };

    // Untuk berpindah tempat
    const handleSelectChange = (e) => {
        const newSelectedScene = e.target.value;
        setSelectedScene(newSelectedScene);
    };
    
    // Handle klik ikon informasi
    const handleInformationClick = (location) => {
        const content = panoramaGallery[location]?.info?.content;
        if (content) {
            setInformationContent(content);
            setShowInformationModal(true);
        }
    };
    const handleToggleImageInfoModal = () => {
    setShowImageInfoModal(!showImageInfoModal);
};
    
    return (
        <>
            {/* tampilan untuk navbar */}
            <Container fluid className='pano'>
                <Row className="navbar-vt" style={{paddingLeft: "0 !important", paddingRight: "0 !important"}}>
                {/* menu utama */}
                <Col xs={10} md={10}>
                    <Menu />
                </Col>

                {/* bagian petunjuk */}
                <Col xs={1} md={1}>
                    {/* petunjuk */}
                    <div id="petunjuk" className="guide" onClick={handleTogglePetunjukModal} >
                        Petunjuk
                    </div>
                        
                {/* pemetaan data untuk menampilkan isi dari eptunjuk */}
                {hintData.map((hint, index) => (
                <Modal
                    style={{margin: '2% auto', width: '90%'}}
                    key={index}
                    show={showPetunjukModal && hint.key === 'show1'}
                    onHide={handleTogglePetunjukModal}
                    centered
                    aria-labelledby="contained-modal-title-vcenter"
                    >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter" style={{marginLeft: "0", fontSize: "1rem"}}>
                        {hint.icon} {hint.title}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{fontSize: "0.8rem", width: "95%"}}>
                        {hint.content}
                    </Modal.Body>
                    </Modal>
                ))}
                </Col>
        
                {/* fitur bantuan */}
                <Col xs={1} md={1} >
                <div id="startTour" className="help" onClick={handleStartTourClick}>
                    Bantuan
                </div>
                </Col>
                </Row>

                {/* fitur panorama */}
                <div
                id="panorama-button"
                onClick={handleOpenPanoramaListModal}
                >
                Panorama
                </div>
                
                {/* fitur denah */}
                <div id='denah-sekolah' className='menu-tambahan-items' onClick={handleButtonClick} data-guidechimp-exclude>
                    Denah
                </div>

                {/* Panorama list modal */}
                <PanoramaList
                show={showPanoramaListModal}
                onHide={handleClosePanoramaListModal}
                onSelectPanorama={handleSelectPanorama}
                panoramaGallery={panoramaGallery}
                />

                {/* Pilih Tempat */}
                <div id="pilih-tempat">
                    <label htmlFor="sceneSelect">Pilih Tempat : </label>
                    <select id="sceneSelect" value={selectedScene} onChange={handleSelectChange}>
                    {Object.keys(panoramaGallery)
                        .filter((sceneKey) => panoramaGallery[sceneKey].displayInDropdown)
                        .map((sceneKey) => (
                        <option key={sceneKey} value={sceneKey}>
                            {panoramaGallery[sceneKey].text || sceneKey}
                        </option>
                        ))}
                    </select>
                </div>

                {/* informasi gambar */}
                {/* // Tombol untuk menampilkan modal informasi gambar */}
                <div id="image-info-button" onClick={handleToggleImageInfoModal}>
                    Informasi Gambar
                </div>
                
                   <Modal
                    show={showImageInfoModal}
                    onHide={handleToggleImageInfoModal}
                    centered
                    aria-labelledby="contained-modal-title-vcenter"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Informasi Gambar
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {/* Menampilkan informasi gambar berdasarkan selectedScene */}
                        {panoramaGallery[selectedScene] && (
                            <>
                                <p>Gambar merupakan {panoramaGallery[selectedScene].text}.</p>
                                <p>Deskripsi: {panoramaGallery[selectedScene].description}</p>
                                {/* Tambahkan informasi tambahan sesuai kebutuhan */}
                            </>
                        )}
                    </Modal.Body>
                </Modal> 
            </Container>

            {/* tampilan panorama */}
            <div id="panorama" ref={panoramaRef} style={{ width: '100%', height: '100vh' }}></div>  
            
            {/* navigation */}
            <div id="controls" data-guidechimp-exclude>
                <div className="ctrl" id="pan-up">
                    <ChevronUp />
                </div>
                <div className="ctrl" id="pan-down">
                    <ChevronDown />
                </div>
                <div className="ctrl" id="pan-left">
                    <ChevronLeft />
                </div>
                <div className="ctrl" id="pan-right">
                    <ChevronRight />
                </div>
                <div className="ctrl" id="zoom-in">
                    <Plus />
                </div>
                <div className="ctrl" id="zoom-out">
                    <Dash />
                </div>
                <div className="ctrl" id="fullscreen">
                    <Fullscreen />
                </div>
                <div className="ctrl" id='autorotate'>
                    <Repeat />
                </div>
            </div>
        </>      
  );
};

export default PanoramaViewer;
