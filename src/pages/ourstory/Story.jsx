import React from 'react'
import './Story.css'
import Navbar from '../../components/navbar/Navbar'
import Main from '../../components/main/Main'
import Footer from '../../components/footer/Footer'
import Discover from '../../components/discover/Discover'
import Image from '../../components/dividingimage/Image'

function Story() {
  return (
    <div>
      <div className='section__1'>
        <Navbar />
        <Main />
      </div>
      <div className='dividing__img'>
        <Image />
      </div>
      <div className='section__3'>
        <Discover />
      </div>
      <Footer />
    </div>
  )
}

export default Story
