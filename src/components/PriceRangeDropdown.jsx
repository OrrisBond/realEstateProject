import React, { useState, useEffect, useContext } from 'react';
import { RiWallet3Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { Menu } from '@headlessui/react'
import {HouseContext} from './HouseContextProvider'

const PriceRangeDropdown = () => {
  const { price, setPrice, } = useContext(HouseContext)
  const [isOpen, setIsOpen] = useState(false)

  const prices = [
    {
      value:'Price range (any)'
    },
    {
      value: '10000 - 30000'
    },
    {
      value: '30000 - 40000'
    },
    {
      value: '40000 - 50000'
    },
    {
      value: '100000 - 130000'
    },
    {
      value: '100000 - 130000'
    },
    {
      value: '130000 - 160000'
    },
    {
      value: '160000 - 190000'
    },
    {
      value: '190000 - 220000'
    },
    {
      value: '220000 - 250000'
    },
  ]
  return <Menu as='div' className='dropdown relative' >
    <Menu.Button onClick={()=>setIsOpen(!isOpen)} className=' dropdown-btn w-full text-left' >
      <RiWallet3Line className='dropdown-icon-primary' />
      <div className='container-dropdown'>
        <div>
        <div className='text-[15px] font-medium leading-tight'>{price}</div>
        <div className='text-[13px]'>Choose your price </div>
        </div>
        {isOpen ? ( <RiArrowUpSLine className='dropdown-icon-secondary' />
          
          ) : ( <RiArrowDownSLine className='dropdown-icon-secondary'/> )}
      </div>
    </Menu.Button>
    <Menu.Items className='dropdown-menu'>
      {prices.map((price, index) => {
        return (
          <Menu.Item as='li' key={index}
            onClick={()=>setPrice(price.value)}
            className='cursor-pointer hover:text-orange-400 transition'>
            {price.value}
          </Menu.Item>
        )
      })}
    </Menu.Items>
  </Menu>;
};

export default PriceRangeDropdown;
