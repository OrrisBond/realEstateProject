import React from 'react'
import './Contact.css'
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import { HiChatBubbleBottomCenter } from 'react-icons/hi2'
import {GrMail} from 'react-icons/gr'

const Contact = () => {
  return (
      <section className='c-wrapper' id='contact'>
          <div className="paddings innerWidth flexCenter c-container">
              <div className="flexColStart c-left">
                  <span className='orangeText'>Our Contacts</span>
                  <span className='primaryText'>Easy To Contact Us</span>
                  <span className='secondaryText'>We are always ready to help by providing the best services for you. We beleive a good place to live can make your life better</span>

                  <div className="flexColStart contactModes">
                      <div className="flexStart row">
                      <div className="flexColCenter mode">
                          
                          <div className='flexStart'>
                              <div className='flexCenter icon'>
                                  <MdCall size={25}/>
                              </div>
                              <div className="flexColStart detail">
                                  <span className='primaryText'>Call</span>
                                  <span className='secondaryText'>098898018903</span>
                              </div>
                          </div>
                          <div className="flexCenter button">Call Now</div>
                      </div>

                      <div className="flexColCenter mode">
                          
                          <div className='flexStart'>
                              <div className='flexCenter icon'>
                                  <BsFillChatDotsFill size={25}/>
                              </div>
                              <div className="flexColStart detail">
                                  <span className='primaryText'>Chat</span>
                                  <span className='secondaryText'>098898018903</span>
                              </div>
                          </div>
                          <div className="flexCenter button">Chat Now</div>
                      </div>
                      </div>
                

                      <div className="flexStart row">
                      <div className="flexColCenter mode">
                          
                          <div className='flexStart'>
                              <div className='flexCenter icon'>
                                  <GrMail size={25}/>
                              </div>
                              <div className="flexColStart detail">
                                  <span className='primaryText'>Email</span>
                                  <span className='secondaryText'>orris.bot@gmail.com</span>
                              </div>
                          </div>
                          <div className="flexCenter button">Email Us Now</div>
                      </div>

                      <div className="flexColCenter mode">
                          
                          <div className='flexStart'>
                              <div className='flexCenter icon'>
                                  <HiChatBubbleBottomCenter size={25}/>
                              </div>
                              <div className="flexColStart detail">
                                  <span className='primaryText'>Message</span>
                                  <span className='secondaryText'>098898018903</span>
                              </div>
                          </div>
                          <div className="flexCenter button">Message Now</div>
                      </div>
                      </div>
                  </div>
                </div>
              <div className="c-right">
                  <div className='image-cont'>
                      <img src="./contact.jpg" alt="" />
                  </div>
              </div>
          </div>
    </section>
  )
}

export default Contact