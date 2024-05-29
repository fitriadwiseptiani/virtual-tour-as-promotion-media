import React from "react"
import "./Prestasi.css"
import PrestasiList from "./PrestasiList"
import Card from "./Card"

const Prestasi = () => {
  return (
    <>
      <section className='Resume' id='resume'>
        <div className='container top'>
          <div className='heading text-center'>
            <p>Dengan rasa bangga dan semangat prestasi yang luar biasa, berikut adalah daftar pencapaian dan prestasi yang telah berhasil diraih oleh para siswa dalam berbagai kegiatan kompetisi dan pertandingan, mempersembahkan keberhasilan yang telah menghiasi perjalanan mereka.</p>
          </div>
          <div className='content-section mtop d_flex'>
            <div className='left'>
                <h6 className="text-2">Tahun 2023</h6><br/>
              <div className='content grid3'>
                
                {PrestasiList.map((val, id) => {
                  if (val.category === "education") {
                    return <Card key={id} title={val.title} year={val.year} rate={val.rate} desc={val.desc} />
                  }
                })}
              </div>
            </div>
            <div className='right'>
                <br /><br />
                <h6 className="text-2">Tahun 2022</h6><br />
              <div className='content grid3'>
                {PrestasiList.map((val, index) => {
                  if (val.category === "experience") {
                    return <Card key={index} title={val.title} year={val.year} rate={val.rate} desc={val.desc} />
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Prestasi
