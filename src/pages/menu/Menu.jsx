import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import './Menu.css'
import Footer from '../../components/footer/Footer'
import Order from '../../components/foodorder/Order'
import Image from '../../components/dividingimage/Image'
import Main from '../../components/main/Main'

function Menu() {
  return (
    <div>
      <div className='section__1'>
        <Navbar />
        <Main />
      </div>
      <div className='dividing__img'>
        <Image />
      </div>
      <div className='section__2'>
        <Order />
      </div>
      <Footer />
    </div>
  )
}

export default Menu
