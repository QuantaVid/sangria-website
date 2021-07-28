import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer__main">
            <div className="footer__left">
                <span>&#169; Copyright {new Date().getFullYear()} Sangria App</span>
            </div>
            <div className="footer__right">
                <Link to="/terms-of-service">Terms of service</Link>
                <span>&</span>
                <Link to="/privacy-policy">Privacy Policy</Link>
            </div>
        </div>
    )
}

export default Footer;