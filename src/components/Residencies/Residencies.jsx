import React from 'react'
import './Residenceis.css'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import "swiper/css"
import { sliderSettings } from '../../utils/common'
import { useContext } from 'react'
import { HouseContext } from '../HouseContextProvider'
import {BiBed , BiBath , BiArea} from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { housesData } from '../../data'


const Residencies = () => {
   
    const houser = housesData.slice(0,8)
    console.log(houser)
  return (
      <section className='r-wrapper' id='property'>
          <div className="paddings innerWidth r-container">
              <div className="r-head flexColCenter">
                  <span className='orangeText'>Best Choices</span>
                  <span className='primaryText'>Popular Residencies</span>
              </div>
              <Swiper {...sliderSettings} >
                  <SliderButtons />
                  
                  {houser.map((house, i) => (
                      <SwiperSlide key={i}>
                          <Link to={`/property/${house.id}`} key={i}>
                          <div className=" flexColStart r-card">
                              <img src={house.image} alt='home' />
                              <span className='secondaryText r-price'>
                                  <span style={{color:'orange'}}>$</span>
                                  <span>{house.price }</span>
                              </span>
                              {/* <span className='primaryText'>{card.name}</span> */}
                              <span className='primaryText'>{house.address}</span>
    <div className='flex gap-x-4 my-4'> 

    <div className=' flex items-center text-gray-600 gap-1'>
      <div className='text-[20px]'><BiBed /></div>
      <div>{house.bedrooms}</div>
    </div>
    <div className='flex items-center text-gray-600 gap-1'>
      <div className='text-[20px]'><BiBath /></div>
      <div>{house.bathrooms}</div>
    </div>
    <div className='flex items-center text-gray-600 gap-1'>
      <div className='text-[20px]'><BiArea /></div>
      <div>{house.surface}</div>
                                  </div>
        </div>
                              </div>
                              </Link>
                      </SwiperSlide>
                  ))}
              </Swiper>
          </div>
    </section>
  )
}


export default Residencies


const SliderButtons = () => {
    const swiper = useSwiper()
    return (
        <div className=' cont-buttons'>
            <Link to='/property'><a  className='a-button'href="">See All</a></Link>
            <div className='flexCenter r-buttons'>
            <button onClick={()=>swiper.slidePrev()}>&lt;</button>
<button onClick={()=>swiper.slideNext()}>&gt;</button>
</div>
        </div>
    )
}