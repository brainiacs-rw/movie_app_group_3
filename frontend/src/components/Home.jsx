import React from 'react'
import logo from '../Images/logo.png'
import back from '../Images/back.png'
import Navbar from './Navbar';

import Image1 from '../Images/image1.jpg'
import Image2 from '../Images/image2.jpg'
import Image3 from '../Images/image3.jpg'
import Image4 from '../Images/image4.jpg'
import Box from './Home/box'
import MovieType from './Home/movieType';


function Home() {
  return (
    <div className='flex flex-col'>
        <div className="main w-full h-[110vh] text-[#fff]">
          <Navbar />
          <div className="flex flex-col pl-5 h-2/4">
            <p className="text-2xl font-semibold mt-[10vh]">
              Welcome ____________________________
            </p>
            <h1 className="font-bold text-[3em] w-[40%]">
              Let's make your world  
              with seductive<br/> cinema
            </h1>
            <p className='w-[40%]' 
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit cum sunt enim autem, dignissimos ducimus architecto magni consequuntur accusamus nulla dicta magnam error fugit adipisci obcaecati cumque porro ea voluptate.</p>
            <div className="flex mt-[10vh] items-center w-[40%]">
              <button className='w-1/2 border-2 h-[9vh]
              hover:bg-red-800 border-red-800
                px-[10%] py-[2%]'>Login</button>
              <button className='w-1/2 border-2 h-[9vh] ml-4 border-red-800 bg-red-800
                px-[10%] py-[2%]'>Get Started</button>
            </div>
          </div>
          <div className="grid grid-cols-4 w-full px-[5%]"></div>
        </div>
        <div className='bg-[#33363F]'>
        <div className="flex justify-around  w-10/12 -mt-28 ml-28">
<Box image={Image1} title="Spiderman Homecoming" description="Action Movie"/>
<Box image={Image2} title="Batman 4" description="Greatest of All Time"/>
<Box image={Image4} title="Star Wars" description="Galaxy spinning movie"/>
<Box image={Image3} title="Sonic Cartoon" description="Cartoon for Children"/>
        </div>
        <div className='flex justify-around'>
          <h2 className='text-[#fff] text-4xl w-[19%] tracking-wide '>Choose the type of film you like</h2>
          <h3 className='text-[#fff] w-[21%]'>We present various types of movies that you can be interested in. Feel free to choose</h3>
        </div>
          <div className='flex justify-around flex-wrap h-[55vh] mt-10'>
<MovieType type="Action" num="1,300+ Movies"/>
<MovieType type="Action" num="1,300+ Movies"/>
<MovieType type="Action" num="1,300+ Movies"/>
<MovieType type="Action" num="1,300+ Movies"/>
<MovieType type="Action" num="1,300+ Movies"/>
<MovieType type="Action" num="1,300+ Movies"/>
<MovieType type="Action" num="1,300+ Movies"/>
<MovieType type="Action" num="1,300+ Movies"/>
          </div>
          <div className='flex justify-around'>
          <h2 className='text-[#fff] text-4xl w-[19%] tracking-wide '>Choose the type of film you like</h2>
          <h3 className='text-[#fff] w-[21%]'>We present various types of movies that you can be interested in. Feel free to choose</h3>
        </div>
        </div>
        </div>
  )
}

export default Home