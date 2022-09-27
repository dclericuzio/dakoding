import React from 'react'
import Navbar from '../Navbar/Navbar'
import Head from './Head/Head'
import Logo from './Logo/Logo'
import Tab from './Tab/Tab'
import What from './What/What'
import Why from './Why/Why'
import ServiceCard from './ServicesCard/ServicesCard'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Head/>
        <Logo/>
        <Tab/>
        {/* <What/>
        <ServiceCard/>
        <Why/> */}
    </div>
  )
}

export default Home