import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="logo"><Link to="/">Elegance Feet</Link></div>
        <nav>
          <ul>
            <li><Link to="/" className="link-hover">Home</Link></li>
            <li><Link to="/shoes" className="link-hover">Product</Link></li>
            <li><Link to="/about" className="link-hover">About</Link></li>
            <li><Link to="/contact" className="link-hover">Contact Us</Link></li>
           {/*<li><Link to="/login" className="link-hover">Login</Link></li>*/}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
