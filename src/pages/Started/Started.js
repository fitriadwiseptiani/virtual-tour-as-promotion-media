import React from "react"
import "./started.css"
import { Link } from "react-router-dom"
import { ArrowRightCircle } from "react-bootstrap-icons"
import { Col, Container, Row } from "react-bootstrap"
import logovt from "../../assets/image/logo-vt.png"
import smkxunnes from "../../assets/image/smkxunnes.png"
import sekolahhero from "../../assets/image/sekolah_hero.png"

const Started = () => {
  return (
    <>
        <Container>
          <Row>
            <Col xs={12} md={5} lg={5} className="col-left">
              <div>
              <img src={logovt} className="gbr_logo" alt="gambarlogo"/>
            </div>
            <div>
              <h1 className="text-1">
                Selamat Datang di
             </h1>
              <h2 className="text-2">
                SNAPAN
              </h2>
              {/* <h4 className="text-2">
                SMK N 8 SEMARANG
              </h4> */}
              <p className="text-3">Yuk kita jelajahi keajaiban sekolah kita bersama-sama! Temukan sudut-sudut menarik dan rasakan energi positifnya. Mari berpetualang bersama, teman!</p>
      
                 <Link to="./panorama" className="btn-start">
                             <button onClick={() => console.log('connect')} className="btn_shadow_start text-2">Mulai Jelajah <ArrowRightCircle size={25} /></button>
              </Link>
            </div>
            <div className="col-left-bottom">
              <p className="text-kerja text-3">Kerjasama Antara :</p>
              <img src={smkxunnes} className="gbr_smkunnes" alt="gambarsmkxunnes"/>
            </div>
            </Col>
            <Col xs={12} md={7} lg={7} className="col-right">
            <img src={sekolahhero} className="img-hero" alt='' />
            <div className="rect-image"></div>
            </Col>

          </Row>
        </Container>
    </>
  )
}

export default Started
