import React from 'react'
import './Head.css'

const Head = () => {
  return (
    <div className="head">
      <div className="head-wrapper">
        <div className="head-left">
            <p>Bangun Aplikasi</p>
            <p>yang Mengubah Organisasi Anda Bersama</p>
            <p>Dakoding</p>
            <p style={{color:'var(--lima-color)'}}>Berdayakan tim Anda dengan teknologi yang dibuat khusus untuk mendorong efisiensi dan pertumbuhan.</p>
            <button href='/' className='button head-button'>Pelajari lebih lanjut</button>
        </div>

        {/* <div className="home-right">
            <img src={home1} alt="right pic"/>
        </div> */}

      </div>
    </div>
  )
}

export default Head