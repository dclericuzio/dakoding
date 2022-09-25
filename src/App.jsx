import React from 'react'
import './App.css'
import {Navbar, Home, What, Why, ServicesCard} from './components'

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <ServicesCard/>
      <What/>
      <Why/>
    </div>
  );
}

export default App;
