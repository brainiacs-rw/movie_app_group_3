import React from 'react'
import { BiAlarm, BiStar, BiTimeFive } from 'react-icons/bi';
import movie from '../../Images/image2.jpg'
import { Link } from 'react-router-dom'

function MovieCard() {
  return (
    <div className='w-full flex bg-[#3C4049] cursor-pointer p-2 flex-col rounded-2xl'>
        <div className="flex w-full h-[140px]">
            <img className='min-w-full min-h-full object-cover'
             src={movie} alt="" />
        </div>
        <div className="flex w-full mt-2 items-start justify-between px-3">
            <div className="flex flex-col w-2/3">
                <h1 className="text-lg font-semibold">SpiderMan</h1>
                <p>The fastest man alive in short 
                right on your screen</p>
            </div>
            <div className="flex mt-2 items-center">
                <BiStar className='text-red-600' />
                <BiStar className='text-red-600' />
                <BiStar className='text-red-600' />
                <BiStar className='text-red-300' />
                <BiStar className='text-red-100' />
            </div>
        </div>
        <div className="flex items-center justify-end w-full">
            <BiAlarm className='text-2xl'/>
            <BiTimeFive className='ml-2 text-2xl' />
            <Link to='/preview' className='py-1 px-2 ml-2 bg-red-500'>WATCH</Link>
        </div>
    </div>
  )
}

export default MovieCard