import React from 'react'
import Laptop from '../assets/laptop.jpg'
const Analystics=()=> {
  return (
    <div className='w-full  bg-white   '>
      <div className="max-w-[1320px] container  mx-auto  p-14 grid grid-cols-1 md:grid-cols-2">
        <img src={Laptop} alt="/" className='w-[500px] mx-auto my-4' />
        <div className='flex flex-col justify-center gap-2'>
          <p className='text-[#00df9a] font-bold '>DATA ANALYITCS DASHBOARD</p>
          <h1 className='font-bold  text-3xl md:text-4xl'>Manage Data Analytics Centrally</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, odit, officia quae, rerum a voluptas atque
            aspernatur earum commodi illum dolorum eius necessitatibus officiis! Omnis necessitatibus doloribus quisquam corporis voluptatem!</p>
          <button className='bg-[#00df9a] w-36 lg:w-[200px] rounded-md px-6 py-3 font-medium my-6  mx-auto text-black'> Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Analystics