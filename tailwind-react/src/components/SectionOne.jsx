import React from 'react'

const SectionOne = () => {
  return (
      <section className='w-full h-[800px] bg-svg rounded-bl-[10rem] flex flex-col justify-center items-center text-white px-10 text-center' >
        
  <h1 className='md:text-[80px] md:font-semibold text-[60px] text-center font-medium '>A modern publishing platform</h1>
  <p className='text-3xl font-thin '>Grow your audience and build your online brand</p>
    <div className='flex flex-row gap-4 text-2xl md:mt-12 mt-20'>
        <button className='rounded-full px-5 py-2 transition duration-300 ease-linear bg-white text-light-red font-semibold hover:bg-light-red hover:text-white'>Start for Free</button>
        <button className='rounded-full px-5 py-2 transition duration-300 ease-linear  text-white border-2 border-white font-semibold hover:bg-white hover:text-light-red'>Learn More</button>
    </div>
  
  
    </section>
  )
}

export default SectionOne