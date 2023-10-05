import React from 'react'
import './Main.css'

function Main() {
    return (
        <div className="hero__container">
            <div className="hero__leftcontent">
                <div className="textCursive">
                    Are You Hungry?
                </div>
                <div className="textCartoon">
                    do<span>n</span>t wait!
                </div>
                <div className="textSimple">
                    let start to order food now
                </div>
                <div className="dividingLine"></div>
                <div className="leftContent__cal">
                    <div className="left__cal">
                        <h3>this monday</h3>
                        <h3>happy hours</h3>
                    </div>
                    <div className="cal">
                        1+1=3
                    </div>
                </div>
                <button className="hero__container-btn">
                    order now
                </button>
            </div>
            <div className='bg__image'>
                <div className='image'></div>
            </div>
        </div>
    )
}

export default Main
