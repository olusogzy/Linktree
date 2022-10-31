import React from 'react';
import Ingressive from './images/ingressive.png'
import './App.css'


function Footer() {
    return(
        <div className='footer'>
          <div className='footer-container'>
            <h2>Zuri.Internship</h2>
            <p>HNG Internship 9 FrontEnd</p>
            <img src={Ingressive} alt='alt'></img>
          </div>
        </div>
    )
}

export default Footer;