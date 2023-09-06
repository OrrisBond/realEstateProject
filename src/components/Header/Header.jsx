import React, { useState } from 'react'
import './Header.css' 
import { BiMenuAltRight } from 'react-icons/bi'
import OutsideClickHandler from
  'react-outside-click-handler'
  import { NavLink } from 'react-router-dom'

const Header = () => {
  const [open, setOpen] = useState(false)

  const toggle = () => {
    setOpen(!open)
  }
  return (
      <section className="h-wrapper">
          <div className="flexCenter innerWidth paddings h-container">
        <img src="./logo.png" alt="logo" width={140} />
        <OutsideClickHandler onOutsideClick={() => { setOpen(false) }}>
              <div className={open ? 'open flexCenter h-menu' : 'flexCenter h-menu'}>
                  <a href="#property">Properties</a>
                  <a href="#values">Our Values</a>
                  <a href="#contact">Contact Us</a>
                  <NavLink to='property'> <button className='button'>
                  <a href=""> Get Started</a>
                  </button></NavLink>
               </div>
          </OutsideClickHandler>
        <div className="menu-icon" >
        <BiMenuAltRight size={50} onClick={toggle}/>
      </div>
      </div>
      
    </section>
  )
}

export default Header