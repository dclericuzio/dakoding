import React from 'react'
import Navbar from '../Navbar/Navbar'
import Head from './Head/Head'
import What from './What/What'
import Why from './Why/Why'
import ServiceCard from './ServicesCard/ServicesCard'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Head/>
        <ServiceCard/>
        <What/>
        <Why/>
    </div>
  )
}

export default Home