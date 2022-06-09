import React from 'react'
import phones from '../assets/images/illustration-phones.svg'
import Article from '../partials/Article'

const SectionThree = () => {

    const data = {
        title: 'State of the Art Infrastructure',
        body: 'With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.'
    }

  return (
    <section className='flex md:flex-row flex-col gap-8 bg-svg3 p-11 md:mt-10 mt-32 md:h-[27rem] justify-between items-center rounded-bl-[10rem] rounded-tr-[10rem]'>
        <section name="image-container" className='relative top-0 left-0 md:w-[40%] w-full flex flex-col items-center justify-end md:mt-[8rem] mt-[-10rem]' >
            <img src={phones} className="md:w-[120rem] w-full"/>
        </section>
        <section name="content-container" className='md:w-[50%] md:px-12 w-full px-4 text-center md:text-left'>
            <Article title={data.title} body={data.body} color='white' />
        </section>
    </section>
  )
}

export default SectionThree