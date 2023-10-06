import React from 'react'
import './Image.css'
import DividingImage from '../../assets/corner-image.png'

function Image() {
  return (
    <div className='dividing__image'>
      <img src={DividingImage} alt='image' id='dividing-img' />
    </div>
  )
}

export default Image
