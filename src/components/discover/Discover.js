import React from 'react'
import './Discover.css'

function Discover() {
    return (
        <div className="discover__section">
            <div className="discoverSection__content">
                <h3>discover</h3>
                <h1>upcoming events</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis harum consectetur commodi eveniet sed officiis placeat? Culpa maiores possimus est ad perspiciatis sit porro hic mollitia. Amet quo magnam quaerat.</p>
            </div>
            <div className="discoverSection__items">
                <div className="leftSide__item">
                    <h3>try it today</h3>
                    <p>most</p>
                    <p>popular</p>
                    <p>pasta</p>

                </div>
                <div className="rightSide__item">
                    <div className="rightSide__item-1">
                        <h3>try it today</h3>
                        <p>more fun</p>
                        <p>more taste</p>
                    </div>
                    <div className="rightSide__item-2">
                        <h3>try it today</h3>
                        <p>fresh & chili</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Discover
