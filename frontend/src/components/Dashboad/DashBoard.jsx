import React from 'react'
import { BiBell, BiCog, BiSearch, BiUser } from 'react-icons/bi';
import MovieCard from './MovieCard';
import SideBar from './SideBar';

function DashBoard() {
  return (
    <div className='flex text-sm fixed h-screen w-full'>
        <SideBar />
        <div className="flex flex-col w-full p-6 bg-[#33363F] text-white">
            <div className="flex w-full items-center justify-between">
                <p className="font-bold text-2xl">Good afternoon, Lysa</p>
                <div className="flex items-center">
                    <BiBell className='text-2xl ml-3 text-white'/>
                    <BiUser className='text-2xl ml-3 text-white'/>
                    <BiCog  className='text-2xl ml-3 text-white'/>
                    <div className="p-4 ml-3 bg-slate-500 rounded-full"></div>
                </div>
            </div>
            <div className="flex min-w-[200px] w-[50%] mt-6 text-xl py-2 mx-auto items-center bg-[#212531] rounded-3xl px-3">
                <BiSearch />
                <input className='outline-none ml-2 bg-transparent w-full'
                type="text" placeholder='Search' />
            </div>
            <div className="flex flex-col">
                <p>Category</p>
                <h1 className="text-2xl text-bold">Action</h1>
            </div>
            <div className="grid grid-cols-3 gap-[7%] overflow-auto">
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
            </div>
        </div>
    </div>
  )
}

export default DashBoard