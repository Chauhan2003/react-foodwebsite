import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <div className={`navbar ${isMobileNavOpen ? 'mobile-open' : ''}`}>
      <div className='formalInformations'>
        <div className='logo'>
          <ion-icon name="beer" id="logo-icon"></ion-icon>
          <h2>FOOD4YOU</h2>
        </div>
        <div className='contact__info'>
          <div className='info'>
            <p>EXPRESS DELIVERY</p>
            <p>271 999 352</p>
          </div>
          <ion-icon name="phone-portrait" id="info-icon"></ion-icon>
        </div>
      </div>

      <div className='toggle__icon' onClick={toggleMobileNav}>
        <ion-icon name={isMobileNavOpen ? "close-circle" : "add-circle"}></ion-icon>
      </div>

      <div className={`main__nav ${isMobileNavOpen ? 'mobile-open' : ''}`}>
        <Link to="/" className='nav__link' onClick={toggleMobileNav}>Home</Link>
        <Link to="/menu" className='nav__link' onClick={toggleMobileNav}>Menu</Link>
        <Link to="/story" className='nav__link' onClick={toggleMobileNav}>Our Story</Link>
        <Link to="/contact" className='nav__link' onClick={toggleMobileNav}>Contact Us</Link>
        <Link to="/login" className='nav__link login' onClick={toggleMobileNav}>Login</Link>
      </div>
    </div>
  );
}

export default Navbar;
