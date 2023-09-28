import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Navbar1 from '../../components/navbar/Navbar1'
import './Hero.css'

function Hero() {
  return (
    <div className='hero__container'>
      <Navbar />
      <Navbar1 />
    </div>
  )
}

export default Hero
