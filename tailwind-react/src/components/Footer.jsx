import React from 'react'

import logo from '../assets/images/logo.svg'


const Footer = () => {

    const data = [
        {
            title: 'Product',
            links: ['Overview', 'Pricing', 'Marketplace', 'Features', 'Integrations']
        },
        {
            title: 'Company',
            links: ['About', 'Team', 'Careers', 'Blog']
        },
        {
            title: 'Connect',
            links: ['Contact Us', 'Newsletter', 'LinkedIn']
        }
    ]
  return (
    <footer className='flex md:flex-row flex-col gap-12 md:justify-between justify-center items-center md:px-64 px-7 py-28 bg-deep-dark text-white rounded-tr-[10rem]'>
        <div className='md:w-[10%] w-full flex justify-center items-center'>
            <img  className='md:w-full w-2/4' src={logo} alt="logo" />
        </div>
        {
            data.map((item, index) => {
                return <div className='flex flex-col gap-8'>
                    <h3 className='text-xl font-medium md:text-left text-center'>{item.title}</h3>
                    <ul className='flex flex-col gap-4 text-gray-blue text-xl md:text-left text-center'>
                        {
                            item.links.map((link, index) => {
                                return <li className='text-lg font-medium hover:underline cursor-pointer'>{link}</li>
                            })
                        }
                    </ul>
                </div>
            }
            
            )
        }
    </footer>
  )
}

export default Footer