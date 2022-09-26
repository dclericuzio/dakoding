import React from 'react'
import './App.css'
// import {Navbar, Home, What, Why} from './components/Home'
import Home from './components/Home/Home'
import Services from './components/Services/Services'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (

    <>
    <Routes>
      <Route path ='/' element={<Home/>}/>
      <Route path ='/Services' element={<Services/>}/>
    </Routes>
    </>
    
  );
}

export default App;
