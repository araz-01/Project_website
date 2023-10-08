import React from 'react'
import Typed from 'react-typed'

const Hero=()=> {
    return ( 
        <div className='text-white'>
            <div className='max-w-[800px] mt-[-96px]  w-full h-screen mx-auto text-center flex flex-col justify-center p-4 '>

                <p className='uppercase text-[#00df9a] font-bold p-2 '>growing with data anlayics</p>
                <h1 className='text-4xl  md:text-7xl font-bold '>Grow with data </h1>
                <div className="flex justify-center items-center gap-2 py-4">
                    <p className='text-xl md:text-4xl font-bold '>Fast, flexable fimancing for </p>
                    <Typed strings={['BTB','BTC','SASS']} typeSpeed={120} backSpeed={140} loop  className='text-xl md:text-4xl font-bold ' />
                </div>
                <p className='text-xl md:text-2xl font-bold  text-gray-500'>Moniter your data anlayics to increase reveaue for BTB, BTC, & SASS platforms </p>
                <button className='bg-[#00df9a]  w-36 lg:w-[200px] rounded-md px-6 py-3 font-medium my-6  mx-auto text-black'> Get Started</button>


            </div>

        </div>
    )
}

export default Hero