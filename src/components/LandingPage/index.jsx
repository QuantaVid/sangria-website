import React from 'react';
import '../styles/components.css';
import logo from '../assets/sangria.svg';
import 'react-slideshow-image/dist/styles.css'
import playstoreLogo from '../assets/playstore.png';


const LandingPage = () => {

    return (
        <div className="landinPage__container">
            <div className="landingPage__top">
                <div className="content">
                    <h1 className="font-face-gm">Sangria App</h1>
                    <span id="description">
                    Sangria App lets you explore the world business and technology news in a fun and easy way. 
                    Content on Sangria has been carefully selected and crafted to serve you better. What are you waiting for? Explore the world with Sangria.
                    </span>
                    <button>
                        <img src={playstoreLogo} alt="Google Playstore Logo" id="playstoreLogo" />
                        <span>Get it on google play</span>
                    </button>
                </div>
                <div className="logo">
                    <img src={logo} alt="Sangria app logo" className="landingPage__logo" />
                </div>
            </div>
        </div>
    )
}

export default LandingPage