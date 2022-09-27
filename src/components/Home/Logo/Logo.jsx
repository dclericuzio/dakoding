import React from 'react'
import './Logo.css'
import logod from '../../../images/logoblue.png'
import a from '../../../images/a.svg'
import b from '../../../images/b.svg'
import c from '../../../images/c.svg'
import d from '../../../images/d.svg'


const Logo = () => {
  return (
    <div className="logo">
        <div className="logo-container">
            <ul>
                <li>
                    <img src={logod} alt="lll"/>
                </li>
                <li>
                    <img src={logod} alt="lll"/>
                </li>
                <li>
                    <img src={logod} alt="lll"/>
                </li>
                <li>
                    <img src={logod} alt="lll"/>
                </li>
                <li>
                    <img src={logod} alt="lll"/>
                </li>
                <li>
                    <img src={logod} alt="lll"/>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Logo