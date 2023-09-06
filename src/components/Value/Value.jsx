import React, { useState } from 'react'
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel, AccordionItemState } from 'react-accessible-accordion'
import "react-accessible-accordion/dist/fancy-example.css"
import { MdOutlineArrowDropDown, mdOutlineArrowDropDown } from 'react-icons/md'
import './Value.css'
import data from '../../utils/accordion'

const Value = () => {

  return (
      <section className="v-wrapper" id='values'>
          <div className="paddings innerWidth flexCenter v-container">
              <div className="v-left">
                  <div className="image-cont">
                      <img src="./value.png" alt="" />
                  </div>
              </div>
              <div className="flexColStart v-right">
                <span className='orangeText'>Our Value</span>
                <span className='primaryText'>Value We Give To YOu</span>
                  <span className='secondaryText'>We always are always ready to help by providing the best services for you.<br />
                      We beleive a good place to live can make your life better</span>
                  <Accordion className='accordion' allowMultipleExpanded={false} preExpanded={[0]}>
                      {data.map((item, i) => {
    
                 
                          return (<AccordionItem className={`accordionItem expanded`} key={i} uuid={i} >
                              <AccordionItemHeading>
                                  <AccordionItemButton className='accordionButton flexCenter'>
                                      <div className='flexCenter icon'>{item.icon}</div>
                                      <span className='primaryText'>{item.heading}</span>
                                      <div className="flexCenter icon">
                                          <MdOutlineArrowDropDown size={20} />
                                      </div>
                                  </AccordionItemButton>
                              </AccordionItemHeading>
                              <AccordionItemPanel>
                                  <p className='secondaryText'>{item.detail}</p>
                              </AccordionItemPanel>
                          </AccordionItem>)
                      })}
                  </Accordion>
              </div>
          </div>
    </section>
  )
}

export default Value