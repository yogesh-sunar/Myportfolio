import React from 'react'
import logo from "../../assets/logo.png"

const Navbar = () => {
  return (
    <>
        <nav className=" w-full mx-auto  fixed top-0 left-0 shadow-xl shadow-black-5 bg-white " >
      <div className="max-w-7xl flex mx-auto items-center justify-between py-1 ">
       <img className='h-20 w-20 rounded-full bg-blue-100' src={logo} alt="" />
         <ul className="flex gap-6" >
            <li className="text-[18px] font-medium hover:cursor-pointer hover:text-blue-600 hover:scale-105 transition-all duration-300"  >About</li>
            <li className="text-[18px] font-medium hover:cursor-pointer hover:text-blue-600 hover:scale-105 transition-all duration-300"  >Gallery</li>
            <li className="text-[18px] font-medium hover:cursor-pointer hover:text-blue-600 hover:scale-105 transition-all duration-300"   >Blogs</li>
            <li className="text-[18px] font-medium hover:cursor-pointer hover:text-blue-600 hover:scale-105 transition-all duration-300 " >Services</li>
            <li className="text-[18px] font-medium hover:cursor-pointer hover:text-blue-600 hover:scale-105 transition-all duration-300 " >Contact</li>
         </ul>
      </div>
   </nav>
    </>
  )
}

export default Navbar