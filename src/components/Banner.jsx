import React from 'react';
import Image from '../assets/img/house-banner.png'
import Search from '../components/Search'
import { Link } from 'react-router-dom';
import { BiSolidLeftArrowAlt } from 'react-icons/bi';

const Banner = () => {
  return <section className='h-full max-h-[640px] mb-8 xl:mb-24 w-[90%] ml-auto mr-auto'>
     <Link to='/'>
         <button className='flex items-center border border-orange-400 py-2 px-4 mt-5 text-orange-500 text-[15px] mb-10 mr-auto ml-auto justify-center  w-10/12'  > <BiSolidLeftArrowAlt className='text-[20px]'/> Click Me To Go Back</button>
      </Link>
    <div className='flex flex-col lg:flex-row'>
      <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
      <h1 className='text-4xl lg:text-[58px] font-semibold leading-none mb-6'>
        <span className='text-violet-700 colorOrange'>Rent</span> Your Dream House With Us
      </h1>
      <p className='max-w-[480px] mb-8'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis natus blanditiis unde tenetur hic debitis excepturi dolores magnam! Ipsum nobis veniam quo ipsa sapiente omnis atque eaque in quae illo.
      </p>
      </div>
      <div className='hidden flex-1 lg:flex justify-end items-end'>
        <img src={Image} alt="" />
      </div>
    </div>
    <Search/>
  </section>;
};

export default Banner;
