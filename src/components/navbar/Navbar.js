import React from 'react'
import './Navbar.css'
// import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='nav'>
            <div className='nav__logo'>
                <i class="ri-footprint-fill" id='logo-icon'></i>
                <div className='logo__name'>
                    FOOD4YOU
                </div>
            </div>
            <div className='nav__contact'>
                <div className='contact__info'>
                    <p>EXPRESS DELIVERY</p>
                    <p>1800 258 999</p>
                </div>
                <i class="ri-smartphone-line" id='contact-icon'></i>
            </div>
        </div>
    )
}

export default Navbar
