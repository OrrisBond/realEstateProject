import React from 'react'
import './GetStarted.css'
import { NavLink } from 'react-router-dom'

const GetStarted = () => {
  return (
      <section className="g-wrapper">
          <div className="paddings innerWidth g-container">
              <div className="flexColCenter inner-container">
                  <span className='primaryText'>Get Started With Micro Genesis</span>
                  <span className='secondaryText'>Get started and find super attractive prices with us. <br />
                      Find your future home now</span>
                   
                  <NavLink to='property'>
                  <button className='button'>
                      Get Started
                  </button>
                  </NavLink>
              </div>
          </div>
    </section>
  )
}

export default GetStarted