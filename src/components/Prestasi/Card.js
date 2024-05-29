import React from "react"
import "./Prestasi.css"
import pressleft from "../../assets/image/pres-left.png";
import pressright from "../../assets/image/pres-right.png"

const Card = (props) => {
  return (
    <>
        <div className='box btn_shadow3 text-align-center'>
        <div className='title d-flex justify-content-center align-items-center'>
          <img src={pressleft}/>
          <span style={{textAlign: 'center', fontSize: "0.8rem", fontWeight: "700"}}>{props.rate}</span>
          <img src={pressright} />
            
        </div>
        <div className="text-align-center">
          <br/>
          <p style={{ textAlign: 'center', fontSize: "0.7rem", fontWeight: "500" }}>{props.title}</p>
            <span style={{textAlign: 'center !important', fontSize: "0.8rem", bottom: 0}}>{props.year}</span>
        </div>
      </div>
    </>
  )
}

export default Card
