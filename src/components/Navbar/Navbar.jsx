import React, {useState} from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { Squash as Hamburger } from 'hamburger-react'
import logo from '../../images/logoblue.png'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

  return (
    <div className="header">
        <nav className='navbar'>

            <Link to="/" className='logo'>
                <img src={logo} alt="logo" />
            </Link>

            <div className="hamburger" onClick={handleClick}>
                {/* {click ? (<FaTimes size={30} style={{color: '#2A76F8'}}/>) : <FaBars size={30} style={{color:'#2A76F8'}}/>} */}
                <Hamburger color='#2A76F8'/>
            </div>

            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className='nav-item'>
                    <Link to="/">Home</Link> 
                </li>
                <li className='nav-item'>
                    <Link to="/Services">Services</Link> 
                </li>
                <li className='nav-item'>
                    <Link to="/">Portfolio</Link> 
                </li>
                <li className='nav-item'>
                    <Link to="/">About</Link> 
                </li>
                <li className='nav-item'>
                    <Link to="/">Courses</Link> 
                </li>
                <li className='nav-item'>
                    <button href='/' className='buttonthree nav-button-right'>Contact Us</button>
                    </li>
               {/* {
                click 
                ? 
                (<button href='/' className='buttontwo button-active'>Masuk</button>)
                :
               null
                } */}
               {/* {
                click 
                ? 
                (<button href='/' className='buttonthree button-active'>Daftar</button>)
                :
               null
                } */}
                
            </ul>
            {/* <div className="butt">
                <button href='/' className='buttontwo nav-button-left'>Masuk</button>
                <button href='/' className='buttonthree nav-button-right'>Daftar</button>
            </div> */}
           
        </nav>
    </div>
  )
}


export default Navbar