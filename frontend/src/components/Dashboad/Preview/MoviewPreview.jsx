import React from 'react'
import { BiArrowBack, BiCircle, BiDotsVerticalRounded, BiHeart, BiPlayCircle, BiShareAlt } from 'react-icons/bi';
import ven from '../Images/ven.png'
import CircularProgress from '@mui/material/CircularProgress'

function MoviewPreview() {
  return (
    <div className='flex w-full h-screen p-2 bg-[#16181F]'>
        <div className="flex flex-col h-full w-[80px] items-center">
            <BiArrowBack className='text-2xl rounded-full p-1 cursor-pointer bg-white' />
        </div>
        <div className="flex text-white flex-col w-full">
            <div className="flex  flex-col w-full h-1/2 rounded-b-3xl bg-black">
                <img 
                className='min-w-100 min-h-full object-cover  rounded-b-3xl opacity-60'
                src="https://images.thedirect.com/media/article_full/venom-2-tom-hardy.jpg?imgeng=cmpr_75/" alt="" />
                <div className="flex previmg translate-y-[-88px] py-5 justify-center rounded-b-3xl  top-[40% w-full items-center">
                    <div className="flex items-center mr-6">
                        <div className="flex">
                            <CircularProgress variant="determinate" value={80} />
                            <p className='absolute text-[0.7em] translate-x-3 translate-y-3'>80%</p>
                        </div>
                        <div className="flex flex-col ml-5">
                            <p>3.21K Votes</p>
                            <p>Reccomended by WIWO users</p>
                        </div>
                    </div>
                    <button className='px-4 border-[1px] border-slate-200
                            hover:bg-blue-500 flex items-center py-2 rounded-3xl bg-transparent'>
                            <BiPlayCircle className='text-[#0E65E8]' />
                            <p>TRAILER</p>
                        </button>
                </div>
            </div>
            <div className="flex h-full w-full justify-between items-start mt-9">
                <div className="flex flex-col w-[150px]">
                    <div className="w-full rounded-2xl h-[28vh] overflow-hidden ">
                        <img className='min-w-full min-h-full object-cover' src={ven} alt="" />
                    </div>
                    <p className="font-bold text-center mt-3">145 min 2021</p>
                </div>
                <div className="flex flex-col ml-3 w-2/3">
                    <h1 className="text-2xl font-bold">Venom 2: Let there be carnage</h1>
                    <div className="flex items-center w-full mt-3">
                        <div className="flex rounded-2xl py-2 px-3  border-2">
                            ACTION
                        </div>
                        <div className="flex ml-3 rounded-2xl py-2 px-3  border-2">
                            ADVENTURE
                        </div>
                        <div className="flex ml-3 rounded-2xl py-2 px-3  border-2">
                            SCI-FI
                        </div>
                    </div>
                    <div className="flex items-center mt-4">
                        <button className='px-4
                            hover:bg-blue-500 flex items-center py-2 rounded-3xl bg-[#0E65E8]'>
                            <BiPlayCircle />
                            <p>WATCH</p>
                        </button>
                        <div className="flex ml-4 cursor-pointer
                            hover:bg-gray-800 duration-300 items-center border-red-600 text-red-600
                        justify-center p-2 rounded-full border-[1px]">
                            <BiHeart />
                        </div>
                        <div className="flex ml-4 cursor-pointer
                            hover:bg-gray-800 duration-300 items-center
                        justify-center p-2 rounded-full border-[1px]">
                            <BiShareAlt />
                        </div>
                        <div className="flex ml-4 cursor-pointer
                            hover:bg-gray-800 duration-300 items-center
                        justify-center p-2 rounded-full border-[1px]">
                            <BiDotsVerticalRounded />
                        </div>
                    </div>
                    <div className="flex w-full mt-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptas, 
                        aut tempora soluta et laborum, quaerat facere similique provident aperiam ad architecto
                         voluptatem dicta saepe cumque, illo est aspernatur ratione.
                    </div>
                </div>
                <div className="flex flex-col py-2 px-3 min-w-[220px] h-full bg-[#23242f] w-1/5 rounded-xl ">
                    <h1 className="text-xl">More like this</h1>
                    <div className="flex">
                        <div className="w-[80px] h-[10vh] rounded-xl overflow-hidden">
                            <img
                            className='min-h-full min-w-full object-cover' src={ven} alt="" />
                        </div>
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