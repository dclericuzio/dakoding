import React from 'react'
import './What.css'
import Lottie from 'react-lottie';
import webleft from '../../../images/webleft.json';

const What = () => {

    // lottie left
    const lottieleft = {
        loop: true,
        autoplay: true,
        animationData: webleft,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
      };

  return (
    <div className='what'>
        <div className="what-left">
        <Lottie
          options={lottieleft}
        />
        </div>

        <div className="what-right">
            <p className='bubble'>TENTANG DAKODING</p>
            <p>Apa itu <span className='what-brand'>Dakoding?</span></p>
            <p style={{color:'var(--enam-color)'}}>Dakoding merupakan program bootcamp yang bertujuan untuk membantu kamu dalam meningkatkan kompetensi di bidang teknologi. Melalui program ini, kamu berkesempatan untuk dilatih langsung dengan mentor yang kompeten di bidangnya.</p>
        </div>
    </div>
  )
}

export default What
