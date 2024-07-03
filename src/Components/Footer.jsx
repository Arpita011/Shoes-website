import React from 'react';
import './Footer.css'
const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section contact">
          
          <h2>
Privacy Policy | Terms of use</h2>
          
        </div>
        <div className="footer-section social">
          <h2>Follow Us-"Elegance_Feet" on</h2>
          <div className="social-icons">
            <a href="#"><img src="https://cdn-icons-png.freepik.com/256/124/124010.png?semt=ais_hybrid" alt="Social icon"/></a>
            <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" alt="Social icon"/></a>
            <a href="#"><img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/x-social-media-black-icon.png" alt="Social icon"/></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Elegance Feet. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
