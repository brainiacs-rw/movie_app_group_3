import React from 'react'
import logo from '../Images/logo.png'
import back from '../Images/back.png'
import Navbar from './Navbar';

function Home() {
  return (
    <div className='w-full text-white flex flex-col home h-screen'>
        <div className="main w-full h-full">
          <Navbar />
          <div className="flex flex-col pl-5">
            <p className="text-2xl font-semibold mt-[10vh]">
              Welcome ____________________________
            </p>
            <h1 className="font-bold text-[4em] w-[60%]">
              Let's make your world  
              with seductive cinema
            </h1>
            <p className='w-[70%]' 
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit cum sunt enim autem, dignissimos ducimus architecto magni consequuntur accusamus nulla dicta magnam error fugit adipisci obcaecati cumque porro ea voluptate.</p>
            <div className="flex mt-[10vh] items-center w-[40%]">
              <button className='w-1/2 border-2 h-[9vh]
              hover:bg-red-800 border-red-800
                px-[10%] py-[2%]'>Login</button>
              <button className='w-1/2 border-2 h-[9vh] ml-4 border-red-800 bg-red-800
                px-[10%] py-[2%]'>Get Started</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home