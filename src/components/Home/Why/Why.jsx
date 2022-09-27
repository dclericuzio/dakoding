import React from 'react'
import './Why.css'
import Lottie from 'react-lottie';
import webright from '../../../images/webdesign.json';

const Why = () => {

   // lottie right
   const lottieright = {
    loop: true,
    autoplay: true,
    animationData: webright,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="why">
        <div className="why-left">
        <p className='bubble p-why'>KEUNTUNGAN GABUNG DAKODING</p>
        <p>Kenapa Kamu Wajib Ikut</p>
        <p>Program <span>Dakoding?</span></p>
        <p style={{color:'var(--enam-color)'}}>Dakoding adalah Digital Skill Camp kolaborasi mentor Dante Clericuzio dan Kevin Adrian yang telah lulus sarjana di XJTLU </p>
        </div>
        <div className="why-right">
          <Lottie
            options={lottieright}
          /> 
        </div>
    </div>
  )
}

export default Why