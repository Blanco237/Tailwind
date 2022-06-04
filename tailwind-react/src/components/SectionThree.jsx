import React from 'react'
import phones from '../assets/images/illustration-phones.svg'
import Article from '../partials/Article'

const SectionThree = () => {

    const data = {
        title: 'State of the Art Infrastructure',
        body: 'With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.'
    }

  return (
    <section className='flex gap-8 bg-svg3 p-11 mt-10 h-[27rem] justify-between items-center rounded-bl-[10rem] rounded-tr-[10rem]'>
        <section name="image-container" className='relative top-0 left-0 w-[40%] flex flex-col items-center justify-end mt-[8rem]' >
            <img src={phones} className="w-[120rem]"/>
        </section>
        <section name="content-container" className='w-[50%] px-12'>
            <Article title={data.title} body={data.body} color='white' />
        </section>
    </section>
  )
}

export default SectionThree