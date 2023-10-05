import React from 'react'
import './Home.css'
import Navbar from '../../components/navbar/Navbar'
import Main from '../../components/main/Main'
import Form from '../../components/reservation/Form'
import Order from '../../components/foodorder/Order'
import Footer from '../../components/footer/Footer'
import Discover from '../../components/discover/Discover'

function Home() {
  return (
    <div>
      <div className='section__1'>
        <Navbar />
        <Main />
      </div>
      <div className='section__2'>
        <Order />
      </div>
      <div className='section__3'>
        <Discover />
      </div>
      <div className='section__4'>
      <Form />
      </div>

      <Footer />
    </div>
  )
}

export default Home
