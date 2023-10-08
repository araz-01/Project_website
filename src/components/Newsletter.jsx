import React from 'react'

const Newsletter = () => {
    return ( 
        <div className='bg-[#000300] text-white  '>
            <div className='max-w-[1320px]  w-full container  mx-auto  p-14 grid grid-cols-1 lg:grid-cols-3'>
                <div className='lg:col-span-2'>
                    <h1 className='text-xl md:text-4xl font-bold py-2'>Want tips & tricks to optimize your flow ?</h1>
                    <p>Sign up to our newslettet and stay up to date.</p>
                </div>
                <div className="my-4">
                    <div className="flex  flex-col md:flex-row justify-between items-center w-full gap-4">
                        <input type="email" placeholder='Enter Email' className='p-3 flex w-full rounded-md text-black outline-none border-none' />
                        <button className='bg-[#00df9a] w-36 lg:w-[200px] rounded-md px-6 py-3 font-medium my-6  mx-auto text-black'>Notify Me</button>
                    </div>
                    <p>care bout the protection of your data. Read our <span className='text-[#00df9a]'>Privacy Policy</span></p>

                </div>
            </div>     
        </div>
    )
}

export default Newsletter
