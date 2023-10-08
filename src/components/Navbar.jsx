import React, { useState } from 'react';
import {AiOutlineMenu,AiOutlineClose} from "react-icons/ai"

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);
    const toggleMenu = () => {
        setOpen(!isOpen);

    }
    
  return (
      <nav className='container  p-4 mx-auto  h-24 max-w-[1320px]  '>
          <div className="flex justify-between items-center">
        <h1 className='text-3xl text-[#00df9a]'>REACT.</h1>
        <h1>{ console.log(isOpen)}</h1>
              <div  onClick={toggleMenu} className="md:hidden text-white">
                  {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
              </div>
            
        <div className={`mt-14 md:mt-0  md:flex md:justify-center md:items-center md:static md:w-auto md:border-none ${isOpen ? "fixed left-0 top-0 h-full w-[70%] border-r border-r-gray-900 bg-[#000300] ease-out duration-500":" fixed left-[-100%]"} `}>
          <ul className="md:flex justify-center items-center text-white uppercase md:capitalize p-4 md:p-0 ">
                <li className="p-2 border-b border-gray-600 md:border-none">Home</li>
                <li className="p-2 border-b border-gray-600 md:border-none">Company</li>
                <li className="p-2 border-b border-gray-600 md:border-none">Resources</li>
                <li className="p-2 border-b border-gray-600 md:border-none">About</li>
                <li className="p-2 border-b border-gray-600 md:border-none">Contact</li>
          </ul>
        </div>
             
        </div>

      
    </nav>
  )
}

export default Navbar;
