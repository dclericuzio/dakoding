import React from 'react'
import './Home.css'
import home1 from '../../images/home1.svg'

const Home = () => {
  return (
    <div className="home" id>
        <div className="home-left">
            <p>Mulai Karir</p>
            <p>Teknologi Bersama</p>
            <p>Dakoding</p>
            <button href='/' className='button home-button'>Pelajari Bootcamp</button>
        </div>

        <div className="home-right">
            <img src={home1} alt="right pic"/>
        </div>

    </div>
  )
}

export default Home