import React from 'react'
import { BiArrowFromLeft, BiDotsVerticalRounded, BiHeart, BiPlayCircle, BiShareAlt } from 'react-icons/bi';
import venl from '../Images/venomlong.png'

function MoviewPreview() {
  return (
    <div className='flex w-full h-screen p-2 bg-[#16181F]'>
        <div className="flex h-full w-[80px]">
            <BiArrowFromLeft className='text-2xl rounded-full p-2 bg-white' />
        </div>
        <div className="flex flex-col w-full">
            <div className="flex previmg flex-col w-full h-1/2 rounded-b-3xl">
                <img src="" alt="" />
            </div>
            <div className="flex w-full items-start">
                <div className="flex flex-col">
                    <div className="">
                        <img src="" alt="" />
                    </div>
                    <p className="font-bold">145 min 2021</p>
                </div>
                <div className="flex flex-col">
                    <h1 className="text-2xl font-bold">Venom 2: Let there be carnage</h1>
                    <div className="flex items-center w-full">
                        <div className="flex rounded-2xl py-2 px-3  border-2">
                            ACTION
                        </div>
                        <div className="flex rounded-2xl py-2 px-3  border-2">
                            ADVENTURE
                        </div>
                        <div className="flex rounded-2xl py-2 px-3  border-2">
                            SCI-FI
                        </div>
                    </div>
                    <div className="flex items-center">
                        <button className='px-4 py-2 rounded-3xl bg-[#0E65E8]'>
                            <BiPlayCircle />
                            <p>WATCH</p>
                        </button>
                        <div className="flex items-center border-red-600 text-red-600
                        justify-center p-2 rounded-full border-[1px]">
                            <BiHeart />
                        </div>
                        <div className="flex items-center
                        justify-center p-2 rounded-full border-[1px]">
                            <BiShareAlt />
                        </div>
                        <div className="flex items-center
                        justify-center p-2 rounded-full border-[1px]">
                            <BiDotsVerticalRounded />
                        </div>
                    </div>
                    <div className="flex w-full">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptas, 
                        aut tempora soluta et laborum, quaerat facere similique provident aperiam ad architecto
                         voluptatem dicta saepe cumque, illo est aspernatur ratione.
                    </div>
                </div>
                <div className="flex flex-col py-2 px-3 rounded-xl bg-[#5F6489]">
                    <h1 className="text-xl">More like this</h1>
                    <div className="flex w-full">
                        <img src="" alt="" />
                        <div className="flex flex-col ml-2">
                            <p className="text-sm font-semibold">Avengers End game</p>
                            <div className="graph"></div>
                        </div>
                        <p>145MIN 2015</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MoviewPreview