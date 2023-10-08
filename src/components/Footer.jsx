import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaInstagram,
    FaGithubSquare,
    FaTwitterSquare

} from 'react-icons/fa'

const Footer = () => {
  return (
      <div className='text-gray-300'>
          <div className='max-w-[1320px]  w-full container  mx-auto  p-14 grid lg:grid-cols-3 gap-8'>
              <div>
                  <h1 className='text-3xl text-[#00df9a]'>REACT.</h1>
                  <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur mollitia expedita
                      asperiores accusantium pariatur nobis qui omnis iusto, rem  magnam libero suscipit amet
                      dolorem itaque accusamus nesciunt reprehenderit. Iusto, soluta.</p>
                  <div className=' flex justify-between md:w-3/4 my-6'>
                      < FaFacebookSquare size={30} />
                      < FaInstagram size={30}/>
                      < FaTwitterSquare  size={30}/>
                      < FaGithubSquare  size={30}/>
                      < FaDribbbleSquare  size={30}/>

                  </div>
              </div>
              <div className="lg:col-span-2 grid grid-cols-2   gap-8 md:gap-x-0  md:flex  justify-between mt-6">
                  <div>
                      <h1 className='font-medium text-gray-400 text-lg'>Solutions</h1>
                      <ul>
                          <li className='py-2 text-sm'>Analytics</li>
                          <li className='py-2 text-sm'>Markerting</li>
                          <li className='py-2 text-sm'>Commers</li>
                          <li className='py-2 text-sm'>Insights</li>
                      </ul>
                  </div>
                  
                  <div>
                      <h1 className='font-medium text-gray-400 text-lg'>Support</h1>
                      <ul>
                          <li className='py-2 text-sm'>Pricing</li>
                          <li className='py-2 text-sm'>Doucmentation</li>
                          <li className='py-2 text-sm'>Guides</li>
                          <li className='py-2 text-sm'>API Status</li>
                      </ul>
                  </div>
                  
              
                  <div>
                      <h1 className='font-medium text-gray-400 text-lg'>Company</h1>
                      <ul>
                          <li className='py-2 text-sm'>About</li>
                          <li className='py-2 text-sm'>Blog</li>
                          <li className='py-2 text-sm'>Jobs</li>
                          <li className='py-2 text-sm'>Preess</li>
                          <li className='py-2 text-sm'>Caressrs</li>

                      </ul>
                  </div>
                  <div>
                      <h1 className='font-medium text-gray-400 text-lg'>Legal</h1>
                      <ul>
                          <li className='py-2 text-sm'>Claim</li>
                          <li className='py-2 text-sm'>Policy</li>
                          <li className='py-2 text-sm'>Terms</li>
                      </ul>
                  </div>
                  
              
                  
              </div>

          </div>
          
     </div>
  )
}

export default Footer