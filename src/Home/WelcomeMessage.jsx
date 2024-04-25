import welcome_image from '../assets/Image_banner.png'
import React, { useState } from 'react';
import Search from './Search.jsx'


function WelcomeMessage(){


    return(
        <div>
            <div className="welcome-msg-container">
                <div className="welcome-msg-txt">
                   
                    <h1 className="title">Find A Job That Matches Your Passion.</h1>
                    <p className="msg">Hand-picked opportunities to work from home, remotely, freelance, full-time, part-time, contract and internships.</p>
                </div>
                <div className='img-container'>
                    <img className="img" src={welcome_image} alt="image"></img>
                </div>
                <div className='search-container'>
                  <Search/>
                </div>
                
            </div>
            
        </div>
       
    );
}

export default WelcomeMessage