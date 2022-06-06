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
    <footer className='flex flex-row gap-12 justify-between px-64 py-28 bg-deep-dark text-white rounded-tr-[10rem]'>
        <div className='w-[10%]'>
            <img  className='w-full' src={logo} alt="logo" />
        </div>
        {
            data.map((item, index) => {
                return <div className='flex flex-col gap-8'>
                    <h3 className='text-xl font-medium'>{item.title}</h3>
                    <ul className='flex flex-col gap-4 text-gray-blue text-xl'>
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