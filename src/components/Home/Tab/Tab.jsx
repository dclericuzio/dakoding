import React, {useState} from 'react'
import './Tab.css'
import { FaSpotify, FaCloud, FaMobile, FaPaw } from "react-icons/fa";


const Tab = () => {

    const [click, setClick] = useState("spotify")
    // const handleClick = () => setClick(!click)

  return (
    <div className="tab">
        <div className="tab-container">

            <div className="tab-header">
                <p>DIDORONG OLEH HASIL</p>
                <p>Kami Membantu Klien Kami</p>
            </div>

            <div className="tabs">
                <div className="tabs-header" >

                    <div className={click=="spotify" ? "tabs-icon active" : "tabs-icon"} onClick={()=>setClick("spotify")}>
                        <FaSpotify/> <p>Spotify</p>
                    </div>
                    <div className={click=="cloud" ? "tabs-icon active" : "tabs-icon"} onClick={()=>setClick("cloud")}>
                        <FaCloud/> <p>Cloud</p>
                    </div>
                    <div className={click=="mobile" ? "tabs-icon active" : "tabs-icon"} onClick={()=>setClick("mobile")}>
                        <FaMobile/> <p>Mobile</p>
                    </div>
                    <div className={click=="paw" ? "tabs-icon active" : "tabs-icon"} onClick={()=>setClick("paw")}>
                        <FaPaw/> <p>Paw</p>
                    </div>

                </div>

                <div 
                    className="tabs-indicator" 
                    style={ 
                        click=="spotify" ? {top:'320px'} : {top:'320px'} || 
                        click=="cloud" ? {top:'430px'} : {top:'320px'} || 
                        click=="mobile" ? {top:"540px"} : {top:'320px'} || 
                        click=="paw" ? {top:'650px'} : {top:'320px'}} >
                </div>

                <div className="tabs-content"> 
                    <div className={click=="spotify" ? "tabs-content-item active" : "tabs-content-item"} onClick={()=>setClick("spotify")}>
                        <FaSpotify className='content-icon'/>
                        <h2>Spotify</h2>
                        <p>Spo Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                    <div className={click=="cloud" ? "tabs-content-item active" : "tabs-content-item"} onClick={()=>setClick("cloud")}>
                        <FaCloud className='content-icon'/> 
                        <h2>Cloud</h2>
                        <p>Clo Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                    </div>
                    <div className={click=="mobile" ? "tabs-content-item active" : "tabs-content-item"} onClick={()=>setClick("mobile")}>
                        <FaMobile className='content-icon'/>
                        <h2>Mobile</h2>
                        <p>Mobi Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                    </div>
                    <div className={click=="paw" ? "tabs-content-item active" : "tabs-content-item"} onClick={()=>setClick("paw")}>
                        <FaPaw className='content-icon'/>
                        <h2>Paw</h2>
                        <p>Paw Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                    </div>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Tab