import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className='main__footer'>
                <div className="leftSide__footer">
                    <div className="leftSide__footer-logo">
                        <div className="footer__logo">
                            food4you
                        </div>
                    </div>
                    <div className="leftSide__content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, illo? Nobis perspiciatis tenetur magnam. Odit illum corporis veniam beatae soluta neque assumenda sint eveniet. Expedita dolores libero ducimus quibusdam eaque.
                    </div>
                </div>
                <div className="rightSide__footer">
                    <div className="location">
                        <ion-icon name="pin" id="location-icon"></ion-icon>
                        <div className="icons-text">DCM Sugar Mill Rupapur, Hardoi</div>
                    </div>
                    <div className="mail">
                        <ion-icon name="mail-open" id="mail-icon"></ion-icon>
                        <div className="icons-text">gagan2020chauhan@gmail.com</div>
                    </div>
                </div>
            </div>

            <div className="copyright">
                Copyright &copy; 2023 Gagan Chauhan. All rights reserved.
            </div>
        </div>
    )
}

export default Footer
