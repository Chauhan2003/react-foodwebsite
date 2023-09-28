import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar1.css';

function Navbar1() {
  // Define a state variable to track the menu state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to close the menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={`nav1__container ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className='nav1'>
        <ul className={`nav1__links ${isMenuOpen ? 'menu-open' : ''}`}>
          <li><Link to='/' className='nav1__link'>HOME</Link></li>
          <li><Link to='/menu' className='nav1__link'>MENU</Link></li>
          <li><Link to='/story' className='nav1__link'>OUR STORY</Link></li>
          <li><Link to='/contact' className='nav1__link'>CONTACT US</Link></li>
          <li><Link to='/login' className='nav1__link'>LOGIN</Link></li>
        </ul>
      </div>

      <div className='toggle__container'>
        <div className={`toggle__add ${isMenuOpen ? 'hidden' : ''}`} onClick={toggleMenu}>
          <i className="ri-add-circle-fill" id='add-icon'></i>
        </div>
        <div className={`toggle__close ${isMenuOpen ? '' : 'hidden'}`} onClick={closeMenu}>
          <i className="ri-close-circle-fill" id='close-icon'></i>
        </div>
      </div>
    </div>
  );
}

export default Navbar1;
