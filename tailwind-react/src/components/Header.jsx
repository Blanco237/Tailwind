import React, { useState } from 'react'

import logo from '../assets/images/logo.svg'
import icon from '../assets/images/icon-hamburger.svg'


import DropdownItem from '../partials/DropdownItem'

const Header = () => {


  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className='absolute top-0 left-0 w-full bg-transparent items-center flex flex-row justify-around gap-4 py-4 pt-14'>
        <img src={logo} className='w-max' />
        <nav className={`${showMenu? 'show':'hide'} mb-[-12rem] ml-[-3.5rem] show-bg`}>
            <ul className=' flex-col md:flex-row items-center gap-4 z-10 md:text-white text-dark-blue justify-between md:text-lg md:flex text-2xl '>
                { [ {title: 'Product', links: ['Overview','Pricing','Marketplace','Features','Integrations']},
                    {title: 'Company', links: ['About','Team','Careers','Blog',]},
                    {title: 'Connect', links: ['Contact Us','Newsletter','LinkedIn']},
                   ].map((item,index) => <DropdownItem item={item}/>
                   ) }
            </ul>
        </nav>
        <nav className={`${showMenu? 'show':'hide'} md:text-white text-dark-blue gap-4 md:text-lg text-2xl cursor-pointer relative md:flex md:flex-row flex-col mb-[-30rem] ml-[-14rem] z-[5] spacing`}>
        <button className=' px-5 py-1'>Login</button>
            <button className='rounded-3xl px-5 py-2 transition duration-300 ease-linear bg-white text-light-red font-semibold hover:bg-light-red hover:text-white'>Sign Up</button>
        </nav>
        <img src={icon} className='w-max flex md:hidden' onClick={() => setShowMenu(!showMenu)}/>
    </header>
  )
}

export default Header