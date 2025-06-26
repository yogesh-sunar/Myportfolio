import React, { useState } from 'react'
import logo from "../../assets/logo.png"
import { RxCross2 } from 'react-icons/rx';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
  const [ isMenueopen ,setIsMenuOpen ]=useState(false);
  return (
    <>
    <nav className=" w-full mx-auto  fixed top-0 left-0 shadow-xl shadow-black-5 bg-white z-50 px-10 md:px-4 " >
      <div className="max-w-7xl flex mx-auto items-center justify-between py-1 ">
       <div>
        <img className='h-20 w-20 rounded-full bg-blue-100' src={logo} alt="" />
       </div>

        <div className='md:hidden ' >
          <button onClick={()=>setIsMenuOpen(!isMenueopen)} >

            {
              isMenueopen ? (
                <RxCross2 size={30} />
              ) : (
                <GiHamburgerMenu size={30} />
              )
            }

            
          </button>
        </div>
       
        <ul className=" gap-6 hidden md:flex  " >
            <li className="text-[18px] font-medium hover:cursor-pointer hover:text-blue-600 hover:scale-105 transition-all duration-300"  >About</li>
            <li className="text-[18px] font-medium hover:cursor-pointer hover:text-blue-600 hover:scale-105 transition-all duration-300"  >Gallery</li>
            <li className="text-[18px] font-medium hover:cursor-pointer hover:text-blue-600 hover:scale-105 transition-all duration-300"   >Blogs</li>
            <li className="text-[18px] font-medium hover:cursor-pointer hover:text-blue-600 hover:scale-105 transition-all duration-300 " >Services</li>
            <li className="text-[18px] font-medium hover:cursor-pointer hover:text-blue-600 hover:scale-105 transition-all duration-300 " >Contact</li>
        </ul>
      </div>
      {
        isMenueopen && (
        <ul className=" items-center justify-center flex-col md:hidden " >
            <li className="text-[18px] font-medium hover:cursor-pointer hover:text-blue-600 hover:scale-105 transition-all duration-300"  >About</li>
            <li className="text-[18px] font-medium hover:cursor-pointer hover:text-blue-600 hover:scale-105 transition-all duration-300"  >Gallery</li>
            <li className="text-[18px] font-medium hover:cursor-pointer hover:text-blue-600 hover:scale-105 transition-all duration-300"   >Blogs</li>
            <li className="text-[18px] font-medium hover:cursor-pointer hover:text-blue-600 hover:scale-105 transition-all duration-300 " >Services</li>
            <li className="text-[18px] font-medium hover:cursor-pointer hover:text-blue-600 hover:scale-105 transition-all duration-300 " >Contact</li>
        </ul>
        )
      }
   </nav>
    </>
  )
}

export default Navbar