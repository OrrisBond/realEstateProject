import React from 'react';
import Banner from '../components/Banner';
import HouseList from '../components/HouseList';
import Footer from '../components/Footer/Footer';
const Home = () => {
  return  <div className='max-w-[1440px] mx-auto bg-white '>
    <div className='min-h-[100px]'>
        <Banner />
        <HouseList/>
    </div>
    <Footer/>
  </div>

  
};

export default Home;
