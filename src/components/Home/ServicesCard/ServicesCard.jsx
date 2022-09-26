import './ServicesCard.css'
import webcard from '../../../images/webcard.gif'
import mobile from '../../../images/mobilecard.gif'
import erp from '../../../images/erpcard.gif'
const ServicesCard=()=>{
    return(
        <div className='servicescard-container'>
            <div className='servicescard'>
                <div className='card-content'>
                <img src={webcard}></img>
                <div>
                    Web services 
                </div>
                <div className='card-text'>
                    Situs web modern untuk menarik lebih banyak pelanggan, membedakan dari kompetisi lain dan banyak lagi
                </div>
                </div>
              
                <div>
                <button href='/' className='button home-button'>Cari Tau Lebih</button>
                </div>
            </div>
            <div className='servicescard'>
            <div className='card-content'>

            <img src={mobile}></img>
            <div>
                    Mobile services 
                </div>
                <div className='card-text'>
                    Mobile app yang bisa meningkatkan effisiensi kerja karyawan atau meningkatkan relasi dengan customer
                </div>
                </div>
                <div>
                <button href='/' className='button home-button'>Cari Tau Lebih</button>
                </div>
            </div>
            <div className='servicescard'>
                <div className='card-content'>
                <img src={erp}></img>
            <div>
                    ERP services 
                </div>
                <div className='card-text'>
                    Sebuah alat pembantu untuk akurasi inventori, pembukuan yang akurat dan banyak lagi
                </div>
                </div>
            
                <div>
                <button href='/' className='button home-button'>Cari Tau Lebih</button>
                </div>
            </div>
        </div>
    )
}
export default ServicesCard