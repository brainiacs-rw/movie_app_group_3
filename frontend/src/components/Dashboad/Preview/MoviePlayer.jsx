import React from 'react'

const MoviePlayer = () => {
  return (
    <div className='w-full flex flex-col h-screen bg-[#3C4049] items-center justify-center'>
        <video className='w-1/2 h-1/2' controls>
            <source src="./src/videos/music.mp4" type="video/mp4" />
        </video>
    </div>
  )
}

export default MoviePlayer