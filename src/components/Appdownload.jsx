import React from 'react'
import './Appdownload.css'
import appstore from '../assets/app_store.png'
import playstore from '../assets/play_store.png'

const Appdownload = () => {
  return (
    <>
    <div  className="app-download" id="app-download">
        <p>For Better Expereinced Download<br/> QucikBite App</p>
       <div className="app-download-platforms">
        <img src={playstore}/>
        <img src={appstore}/>
       </div>
    </div>
    </>
  )
}

export default Appdownload