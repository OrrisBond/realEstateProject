import React from 'react'
import './Footer.css'
const Footer = () => {
    return (
        <section className="f-wrapper">
            <div className="paddings innerWidth flexCenter f-container">
                <div className=" f-left">
                    <img src="./logo2.png" alt="" width={150} />
                    <span className='f-text'>
                        Our vision is to provide everyone <br />
                        the best place suitable for them
                    </span>
                </div>
                <div className="f-right flexColStart">
                    <span className='Text'>Address</span>
                    <span className='f-text'>lekki, crescent drive, off osapa london.</span>

                    {/* <div className='flexCenter f-menu'>
                        <span>Property</span>
                        <span>Services</span>
                        <span>Products</span>
                        <span>About Us</span>
                    </div> */}
                </div>
            </div>
      </section>
  )
}

export default Footer