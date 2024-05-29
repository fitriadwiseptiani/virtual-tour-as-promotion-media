import React, { useState, useRef, useEffect } from "react";
import ImageMapper from "react-image-mapper";
import { Grid } from "@material-ui/core";
import { Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import panoramaGallery from "../../PanoramaGallery";
import { pannellum } from '../../pannellum';
import denahsekolah from "../../assets/image/denah/denah-sekolah.png";

const Denah = () => {
    const [currentScene, setCurrentScene] = useState("utama");
    const [imgCoords, setImgCoords] = useState(0);
    const [yaw, setYaw] = useState(0);
    const [pitch, setPitch] = useState(0);
    const panoramaRef = useRef(null);

    const handleHotspotClick = (sceneId, hotspot) => {
        setCurrentScene(sceneId);
        setPitch(hotspot.pitch);
        setYaw(hotspot.yaw);
    }

    useEffect(() => {
        const viewer = pannellum.viewer(panoramaRef.current, {
      type: "equirectangular",
      panorama: panoramaGallery[currentScene]?.image,
      pitch: panoramaGallery[currentScene]?.pitch || 0,
      yaw: panoramaGallery[currentScene]?.yaw || 0,
      hfov: 110,
      autoLoad: true,
      hotSpotDebug: true,
      showZoomCtrl: false,
      hotSpots: panoramaGallery[currentScene].hotSpots.map(hotspot => ({
                ...hotspot,
        pitch: hotspot.pitch,
        yaw: hotspot.yaw,
        type: hotspot.type,
        text: hotspot.text,
        sceneId: hotspot.sceneId,
        targetPitch: hotspot.targetPitch,
        targetYaw: hotspot.targetYaw,
        clickHandlerFunc: (evt) => handleHotspotClick(hotspot.sceneId, hotspot),
      })),
    });

    // Gunakan event `change` untuk mendapatkan nilai pitch dan yaw saat berubah
    viewer.on("change", (e) => {
      const newPitch = e.pitch;
      const newYaw = e.yaw;

      setPitch(newPitch);
      setYaw(newYaw);
    });
        return () => {
            viewer.destroy();
        };
    }, [currentScene]);
  

    const map = {
    name: "my-map",
    areas: [
      {
        name: "utama",
        shape: "circle",
        coords: [24, 120, 5],
        preFillColor: "green",
        text: "utama",
      },

      // lobby
      {
        name: "lobby",
        shape: "circle",
        coords: [50, 98, 5],
        preFillColor: "yellow",
        text: "lobby"
      },

      // sekolah
      {
        name: "sekolah",
        shape: "circle",
        coords: [55, 85, 5],
        preFillColor: "pink",
        text: "sekolah"
      },
      // kepala sekolah
      {
        name: "sekolah",
        shape: "circle",
        coords: [75, 78, 5],
        preFillColor: "red",
      },
      // ruang TU
      {
        name: "selasar_depan",
        shape: "circle",
        coords: [115, 85, 5],
        preFillColor: "orange",
      },
      // Ruang waka
      {
        name: "selasar_1",
        shape: "circle",
        coords: [150, 85, 5],
        preFillColor: "black",
      },
      // Ruang 7
      {
        name: "ruang_tujuh",
        shape: "circle",
        coords: [192, 85, 5],
        preFillColor: "blue",
      },
      {
        name: "ruang_delapan",
        shape: "circle",
        coords: [225, 85, 5],
        preFillColor: "pink",
      },
      // ruang 9
      {
        name: "ruang_9",
        shape: "circle",
        coords: [260, 85, 5],
        preFillColor: "grey",
      },
      // ruang 10
      {
        name: "selasar_10",
        shape: "circle",
        coords: [295, 85, 5],
        preFillColor: "blue",
      },
      
      // kantin
      {
        name: "kantin",
        shape: "circle",
        coords: [490, 85, 5],
        preFillColor: "orange",
      },
      {
        name: "koperasi",
        shape: "circle",
        coords: [540, 80, 5],
        preFillColor: "white",
      },
      {
        name: "mushola",
        shape: "circle",
        coords: [590, 80, 5],
        preFillColor: "orange",
      },
      // uks
      {
        name: "selasar_12",
        shape: "circle",
        coords: [380, 85, 5],
        preFillColor: "red",
      },
      // toilet sebelah uks
      {
        name: "selasar_11",
        shape: "circle",
        coords: [344, 85, 5],
        preFillColor: "violet",
      },
      // lapangan
      {
        name: "lapangan",
        shape: "circle",
        coords: [355, 140, 5],
        preFillColor: "darkgrey",
      },
      // taman
      {
        name: "selasar_taman_1",
        shape: "circle",
        coords: [130, 112, 5],
        preFillColor: "orange",
      },

      // ruang guru
      // guru tkj
      {
        name: "selasar_guru",
        shape: "circle",
        coords: [86, 150, 5],
        preFillColor: "white",
        text: "lobby"
      },
      // guru rpl
      {
        name: "selasar_guru_3",
        shape: "circle",
        coords: [125, 150, 5],
        preFillColor: "pink",
        text: "lobby"
      },
      // ruang penyimpanan
      {
        name: "selasar_guru_4",
        shape: "circle",
        coords: [165, 150, 5],
        preFillColor: "blue",
        text: "lobby"
      },
      // toilet guru
      {
        name: "selasar_guru_4",
        shape: "circle",
        coords: [205, 150, 5],
        preFillColor: "red",
        text: "lobby"
      },
      // toilet siswa
      {
        name: "selasar_4",
        shape: "circle",
        coords: [220, 195, 5],
        preFillColor: "black",
        text: "lobby"
      },
      // lab jepang
      {
        name: "selasar_4",
        shape: "circle",
        coords: [230, 185, 5],
        preFillColor: "green",
        text: "lobby"
      },
      // guru dkv
      {
        name: "selasar_guru_6",
        shape: "circle",
        coords: [62, 205, 5],
        preFillColor: "black",
        text: "lobby"
      },
      // RSG 1 
      {
        name: "selasar_kanan_4",
        shape: "circle",
        coords: [86, 240, 5],
        preFillColor: "red",
        text: "lobby"
      },
      // RSG 2
      {
        name: "selasar_kanan_3",
        shape: "circle",
        coords: [135, 240, 5],
        preFillColor: "green",
        text: "lobby"
      },
      // RSG 3
      {
        name: "selasar_kanan_2",
        shape: "circle",
        coords: [185, 240, 5],
        preFillColor: "magenta",
        text: "lobby"
      },
      // ruang bk
      {
        name: "selasar_perpus_3",
        shape: "circle",
        coords: [283, 190, 5],
        preFillColor: "blue",
        text: "lobby"
      },
      // perpus
      {
        name: "selasar_perpus_2",
        shape: "circle",
        coords: [318, 180, 5],
        preFillColor: "magenta",
        text: "lobby"
      },


      // hotel
      // masuk-hotel
      {
        name: "masuk_hotel",
        shape: "circle",
        coords: [40, 141, 5],
        preFillColor: "purple",
        text: "lobby"
      },


      // lantai 2
      // gym
      {
        name: "gym",
        shape: "circle",
        coords: [85, 513, 5],
        preFillColor: "pink",
        text: "lobby"
      },

      // ruang perawatan
      {
        name: "ruang_perawatan",
        shape: "circle",
        coords: [85, 463, 5],
        preFillColor: "blue",
        text: "lobby"
      },

      // jurusan lk
      {
        name: "jurusan_lk",
        shape: "circle",
        coords: [85, 410, 5],
        preFillColor: "black",
        text: "lobby"
      },

      // ruang perawatan 2
      {
        name: "ruang_perawatan_2",
        shape: "circle",
        coords: [85, 360, 5],
        preFillColor: "orange",
        text: "lobby"
      },
      // ruang kerohanian
      {
        name: "selasar_aula",
        shape: "circle",
        coords: [117, 355, 5],
        preFillColor: "blue",
        text: "lobby"
      },
      // aula
      {
        name: "selasar_aula_2",
        shape: "circle",
        coords: [190, 355, 5],
        preFillColor: "green",
        text: "lobby"
      },
      // gudang
      {
        name: "selasar_aula_4",
        shape: "circle",
        coords: [258, 355, 5],
        preFillColor: "pink",
        text: "lobby"
      },
      // toilet
      {
        name: "selasar_aula_8",
        shape: "circle",
        coords: [290, 355, 5],
        preFillColor: "orange",
        text: "lobby"
      },
      // toilet
      {
        name: "selasar_aula_11",
        shape: "circle",
        coords: [260, 510, 5],
        preFillColor: "black",
        text: "lobby"
      },
      // tkj 1
      {
        name: "selasar_tkj_2",
        shape: "circle",
        coords: [370, 410, 5],
        preFillColor: "blue",
        text: "lobby"
      },
      // tkj 2
      {
        name: "selasar_tkj_4",
        shape: "circle",
        coords: [445, 360, 5],
        preFillColor: "violet",
        text: "lobby"
      },
      // lab tkj 3
      {
        name: "selasar_atas_2_9",
        shape: "circle",
        coords: [355, 275, 5],
        preFillColor: "blue",
      },
      // lab tkj 4
      {
        name: "selasar_atas_2_10",
        shape: "circle",
        coords: [410, 275, 5],
        preFillColor: "magenta",
      },

      // ruang enam
      {
        name: "ruang_enam",
        shape: "circle",
        coords: [320,275, 5],
        preFillColor: "black",
        text: "lobby"
      },

      // ruang lima
      {
        name: "ruang_lima",
        shape: "circle",
        coords: [272, 275, 5],
        preFillColor: "red",
        text: "lobby"
      },

      // ruang empat
      {
        name: "ruang_empat",
        shape: "circle",
        coords: [232, 275, 5],
        preFillColor: "pink",
        text: "lobby"
      },

      // ruang tiga
      {
        name: "ruang_tiga",
        shape: "circle",
        coords: [187, 275, 5],
        preFillColor: "red",
        text: "lobby"
      },

      // ruang dua
      {
        name: "ruang_dua",
        shape: "circle",
        coords: [135, 275, 5],
        preFillColor: "black",
        text: "lobby"
      },

      // ruang satu
      {
        name: "ruang_satu",
        shape: "circle",
        coords: [100, 275, 5],
        preFillColor: "green",
        text: "ruang_satu"
      },
      

      // lantai atas belakang
      // lab mm
      {
        name: "lab_mm",
        shape: "circle",
        coords: [80, 627, 5],
        preFillColor: "blue",
      },
      {
        name: "lab_mm",
        shape: "circle",
        coords: [165, 627, 5],
        preFillColor: "blue",
      },
      // ruang greenscreen
      {
        name: "selasar_belakang_atas_10",
        shape: "circle",
        coords: [250, 627, 5],
        preFillColor: "silver",
      },
      
      // lab dkv
      {
        name: "selasar_belakang_atas_2",
        shape: "circle",
        coords: [82, 710, 5],
        preFillColor: "red",
      },
      {
        name: "selasar_belakang_atas",
        shape: "circle",
        coords: [182, 710, 5],
        preFillColor: "green",
      },

      // lab pplg3
      {
        name: "selasar_belakang_atas_7",
        shape: "circle",
        coords: [440, 637, 5],
        preFillColor: "blue",
      },
      // rpl 4
      {
        name: "selasar_belakang_atas_5",
        shape: "circle",
        coords: [332, 637, 5],
        preFillColor: "black",
      },
      // rung podcast
      {
        name: "selasar_belakang_atas_7",
        shape: "circle",
        coords: [455, 585, 5],
        preFillColor: "grey",
      },
      // lab rpl 2
      {
        name: "selasar_belakang_atas_8",
        shape: "circle",
        coords: [375, 581, 5],
        preFillColor: "yellow",
      },
      // lab rpl 1
      {
        name: "selasar_belakang_atas_10",
        shape: "circle",
        coords: [300, 581, 5],
        preFillColor: "orange",
      },
      
      // daerah belakang
      // ruang tpa 1
      {
        name: "selasar_belakang_11",
        shape: "circle",
        coords: [460, 96, 5],
        preFillColor: "blue",
      },
      // ruang tpa 2
      {
        name: "selasar_belakang_9",
        shape: "circle",
        coords: [500, 96, 5],
        preFillColor: "green",
      },
      // ruang tpa 3
      {
        name: "selasar_belakang_5",
        shape: "circle",
        coords: [598, 88, 5],
        preFillColor: "purple",
      },
      // ruang tpa 4
      {
        name: "selasar_belakang_4",
        shape: "circle",
        coords: [555, 88, 5],
        preFillColor: "black",
      },
      // ruang 12 (dekat mushola)
      {
        name: "selasar_belakang",
        shape: "circle",
        coords: [630, 90, 5],
        preFillColor: "blue",
      },
      // ruang 11
      {
        name: "selasar_belakang_3",
        shape: "circle",
        coords: [630, 48, 5],
        preFillColor: "black",
      },
      // kantin
      {
        name: "kantin_belakang",
        shape: "circle",
        coords: [665, 134, 5],
        preFillColor: "pink",
      },
    ],
    };

  return (
    <>
      <Container fluid className='pano'>
        <Row className="navbar-vt">
          <Link to="/panorama">
            <div className="btn-kembali" style={{fontWeight: "700"}}>Halaman Utama</div>
        </Link>
        </Row>
        <Grid container spacing={3} >
            <Grid item xs={12} md={5} style={{ padding: "20px", marginTop: "80px", justifyItems: "center"}}>
            <ImageMapper
                src={denahsekolah}
                width={700}
            style={{ marginLeft: "3%", padding: "10px", marginTop: "20px"}}
                onImageClick={(evt) =>
                setImgCoords("" + evt.pageX + ", " + evt.pageY)
                }
                onClick={(area) => setCurrentScene(area.name)}
                map={map}
            />
            </Grid>
            <Grid item xs={12} md={7} style={{ padding: "20px", marginTop: "80px", justifyItems: "center"}}>
            <div id="panorama" style={{ width: "100%", height: "500px", }} ref={panoramaRef}
                onMouseup={(evt) => {
                setPitch(
                    panoramaRef.current.getViewer().mouseEventToCoords(evt)[0]
                );
                setYaw(
                    panoramaRef.current.getViewer().mouseEventToCoords(evt)[1]);
            }}
            />
            </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Denah;