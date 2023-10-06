import React from 'react'
import './Order.css'
import Image1 from '../../assets/item1.png';
import Image2 from '../../assets/item2.png';
import Image3 from '../../assets/item3.png';
import Image4 from '../../assets/dividing-image.png'

function Order() {
  return (
    <div className="order__section">
      <div className="orderSection__content">
        <h1>choose & enjoy</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis harum consectetur commodi eveniet sed officiis placeat? Culpa maiores possimus est ad perspiciatis sit porro hic mollitia. Amet quo magnam quaerat.</p>
      </div>
      <div className="orderSection__items">
        <img src={Image4} id='dividing-image' />
        <div className="items__container">
        <img src={Image1} alt="My Image" />
          <h3>Lorem, ipsum dolor.</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, animi?</p>
          <button className="items__button">order now</button>
        </div>
        <div className="items__container">
        <img src={Image2} alt="My Image" />
          <h3>Lorem, ipsum dolor.</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, animi?</p>
          <button className="items__button">order now</button>
        </div>
        <div className="items__container">
        <img src={Image3} alt="My Image" />
          <h3>Lorem, ipsum dolor.</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, animi?</p>
          <button className="items__button">order now</button>
        </div>
      </div>
    </div>
  )
}

export default Order
