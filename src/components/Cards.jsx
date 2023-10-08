import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'


const Cards = () => {
  return (
      <div className=' bg-white  '>
          <div className='w-full max-w-[1320px] py-[10rem] bg-white container  mx-auto  px-14 grid grid-cols-1 md:grid-cols-3 gap-8'>
              <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                  <img src={Single} alt="/" className='w-20 object-cover mx-auto  mt-[-3rem] bg-white  ' />
                  <h2 className='text-2xl font-bold text-center py-8'> Single User</h2>
                  <p className='text-center text-4xl font-bold'>$149</p>
                  <div className=' text-center font-medium '>
                      <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                      <p className='py-2 border-b mx-8'>1 Granted User </p>
                      <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                  </div>
                  <button className='text-[#00df9a]  w-36 lg:w-[200px] rounded-md px-6 py-3 font-medium my-6  mx-auto bg-black'>Start Tral</button>
              </div>
              <div className="w-full shadow-xl  bg-gray-100 flex flex-col p-4 my-8 md:my-0 rounded-lg hover:scale-105 duration-300">
                  <img src={Double} alt="/" className='w-20    object-cover mx-auto  mt-[-3rem]  bg-transparent  ' />
                  <h2 className='text-2xl font-bold text-center py-8'> Single User</h2>
                  <p className='text-center text-4xl font-bold'>$149</p>
                  <div className=' text-center font-medium '>
                      <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                      <p className='py-2 border-b mx-8'>1 Granted User </p>
                      <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                  </div>
                  <button className='text-[#00df9a]  w-36 lg:w-[200px] rounded-md px-6 py-3 font-medium my-6  mx-auto bg-black'>Start Tral</button>
              </div><div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                  <img src={Triple} alt="/" className='w-20   object-cover mx-auto  mt-[-3rem]  bg-white  ' />
                  <h2 className='text-2xl font-bold text-center py-8'> Single User</h2>
                  <p className='text-center text-4xl font-bold'>$149</p>
                  <div className=' text-center font-medium '>
                      <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                      <p className='py-2 border-b mx-8'>1 Granted User </p>
                      <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                  </div>
                  <button className='text-[#00df9a]  w-36 lg:w-[200px] rounded-md px-6 py-3 font-medium my-6  mx-auto bg-black'>Start Tral</button>
              </div>
              
          </div>
          
    </div>
  )
}

export default Cards

