import React from 'react'
import logo from '../Images/logo.png'
import WIWO from '../Images/WIWO.png'

function Navbar() {
  return (
    <div className='flex items-center px-3 h-[10vh] w-full justify-between'>
        <div className="logo flex">
            <img src={logo} alt="" />
            <img className='scale-50 translate-x-[-30px]' src={WIWO} alt="" />
        </div>
        <div className="flex text-white w-[50%] justify-center">
          <p className='mx-11 cursor-pointer hover:text-pink-800
            duration-300 text-xl font-semibold'>Home</p>
          <p className='mx-11 cursor-pointer hover:text-pink-800
            duration-300 text-xl font-semibold'>Categories</p>
          <p className='mx-11 cursor-pointer hover:text-pink-800
            duration-300 text-xl mr-[20%] font-semibold'>Patnership</p>
        </div>
    </div>
  )
}

export default Navbar