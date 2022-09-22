import React, {useState} from 'react'
import './Navbar.css'
import {FaBars, FaTimes} from 'react-icons/fa'
import { Squash as Hamburger } from 'hamburger-react'
import logo from '../../images/logoblue.png'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

  return (
    <div className="header">
        <nav className='navbar'>

            <a href="/" className='logo'>
                <img src={logo} alt="logo" />
            </a>

            <div className="hamburger" onClick={handleClick}>
                {/* {click ? (<FaTimes size={30} style={{color: '#2A76F8'}}/>) : <FaBars size={30} style={{color:'#2A76F8'}}/>} */}
                <Hamburger color='#2A76F8'/>
            </div>

            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className='nav-item'>
                    <a href="/">Home</a> 
                </li>
                <li className='nav-item'>
                    <a href="/">Services</a> 
                </li>
                <li className='nav-item'>
                    <a href="/">Courses</a> 
                </li>
                <li className='nav-item'>
                    <a href="/">About</a> 
                </li>
                <li className='nav-item'>
                    <a href="/">Portfolio</a> 
                </li>
               {
                click 
                ? 
                (<button href='/' className='buttontwo button-active'>Masuk</button>)
                :
               null
                }
               {
                click 
                ? 
                (<button href='/' className='buttonthree button-active'>Daftar</button>)
                :
               null
                }
                
            </ul>
            <div className="butt">
                <button href='/' className='buttontwo nav-button-left'>Masuk</button>
                <button href='/' className='buttonthree nav-button-right'>Daftar</button>
            </div>
           
        </nav>
    </div>
  )
}

export default Navbar