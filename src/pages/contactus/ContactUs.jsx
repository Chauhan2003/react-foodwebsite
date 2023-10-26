import React from 'react'
import './ContactUs.css'
import Navbar from '../../components/navbar/Navbar'
import Main from '../../components/main/Main'
import Form from '../../components/reservation/Form'
import Footer from '../../components/footer/Footer'
import Image from '../../components/dividingimage/Image'

function ContactUs() {
  return (
    <div>
      <div className='section__1'>
        <Navbar />
        <Main />
      </div>
      <div className='dividing__img'>
        <Image />
      </div>
      <div className='section__4'>
      <Form />
      </div>
      <Footer />
    </div>
  )
}

export default ContactUs
