import React, { useEffect, useRef } from "react";
import { BiArrowBack } from "react-icons/bi";
import { FaBookmark, FaHeart, FaSave } from "react-icons/fa";
import { Link } from "react-router-dom";

const MoviePlayer = () => {
  const videoElement = useRef(null);
  

  useEffect(() => {
    const video = videoElement.current;
    video.play();
    return () => video.pause();
  }, []);

	return (
		<div className="w-full flex bg-black flex-col h-screen  items-center ">
			<div className="flex bg-[#3C4049] w-full items-center">
				<Link to="/" className="flex items-center cursor-pointer">
					<img src="src/images/logo.png" alt="" />
					<div className="logo text-3xl text-white">WIWO</div>
				</Link>
			</div>
			<div className="flex justify-center w-full text-[#e7e8ec] px-4 mt-3">
        <Link to='/preview'>
          <BiArrowBack className="text-3xl p-2 bg-[#3C4049] rounded-full mr-6"/>
        </Link>
				<div className="flex aspect-video w-2/3 flex-col">
					<video className="max-h-full max-w-full" ref={videoElement}  controls>
						<source src="./src/videos/UCL.mp4" type="video/mp4" />
					</video>
					<div className="flex mt-4 items-center">
						<div className="flex items-center cursor-pointer">
							<FaHeart className="text-2xl text-red-600" />
							<p className="text-xl ml-1">Like</p>
						</div>
						<div className="ml-3 flex items-center cursor-pointer">
							<FaBookmark className="text-2xl" />
							<p className="text-xl ml-1">Save</p>
						</div>
					</div>
          <p className="text-xl">Venom 2: Let there be carnage</p>
				</div>
			</div>
		</div>
	);
};

export default MoviePlayer;
