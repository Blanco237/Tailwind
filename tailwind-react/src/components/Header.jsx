import React from 'react'

import logo from '../assets/images/logo.svg'


import DropdownItem from '../partials/DropdownItem'

const Header = () => {
  return (
    <header className=' absolute top-0 left-0 w-full bg-transparent items-center flex flex-row justify-around gap-4 py-4 pt-14'>
        <img src={logo} className='w-max' />
        <nav>
            <ul className='flex flex-row items-center gap-4 text-white justify-between text-lg'>
                { [ {title: 'Product', links: ['Overview','Pricing','Marketplace','Features','Integrations']},
                    {title: 'Company', links: ['About','Team','Careers','Blog',]},
                    {title: 'Connect', links: ['Contact Us','Newsletter','LinkedIn']},
                   ].map((item,index) => <DropdownItem item={item}/>
                   ) }
            </ul>
        </nav>
        <nav className='text-white flex gap-4 text-lg cursor-pointer'>
        <button className=' px-5 py-1'>Login</button>
            <button className='rounded-3xl px-5 py-2 transition duration-300 ease-linear bg-white text-light-red font-semibold hover:bg-light-red hover:text-white'>Sign Up</button>
        </nav>
    </header>
  )
}

export default Header