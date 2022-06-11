import React, { useState } from "react";
import { BiCaretDown, BiCaretUp, BiCog, BiListUl, BiMask, BiSave, BiTable, BiUserCircle } from "react-icons/bi";
import { FaHatWizard, FaHeart, FaMask, FaSkull } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../Images/logo.png";
import WIWO from "../../Images/WIWO.png";

function SideBar({setSidePath}) {
  const [expand, setExpand] = useState({cat: false, rec: false});


 const handleScroll = (e) => {
    if (e.target.classList.contains("on-scrollbar") === false) {
        e.target.classList.add("on-scrollbar");
    }
  }
  window.addEventListener('scroll', handleScroll, true);

  return (
    <div className="flex text-sm flex-col items-center text-white">
      <div className="flex h-full py-6 flex-col pl-4 pr-1 bg-[#3A435B] w-[220px] justify-between">
        <div className="logo flex items-center">
          <img src={logo} alt="" />
          <div className="logo text-3xl text-white">WIWO</div>
        </div>
        <div className="flex flex-col h-[70vh] overflow-auto ">
          <div className="flex flex-col">
            <div onClick={()=> setExpand({...expand, cat: !expand.cat})}
            className="flex w-full justify-between text-lg items-center cursor-pointer">
              <p className="font-semibold ">Categories</p>
              <BiCaretDown className={`duration-150  ${expand.cat && 'rotate-[-180deg]'}`} />
            </div>
            {expand.cat && (
              <div className="flex flex-col ml-4">
                <div className="flex mt-3 p-1 cursor-pointer hover:bg-gray-700 px-2 rounded-xl items-center w-full">
                  <i className="fa-solid fa-gun text-pink-700 text-2xl"></i>
                  <p className="ml-3">Action</p>
                </div>
                <div className="flex mt-3 p-1 cursor-pointer hover:bg-gray-700 px-2 rounded-xl items-center w-full">
                  <i className="fa-solid fa-wand-magic-sparkles text-pink-700 text-2xl"></i>
                  <p className="ml-3">Adventure</p>
                </div>
                <div className="flex mt-3 p-1 cursor-pointer hover:bg-gray-700 px-2 rounded-xl items-center w-full">
                  <i className="fa-solid fa-masks-theater text-pink-700 text-2xl"></i>
                  <p className="ml-3">Comedy</p>
                </div>
                <div className="flex mt-3 p-1 cursor-pointer hover:bg-gray-700 px-2 rounded-xl items-center w-full">
                  <BiMask className="text-pink-700 text-3xl" />
                  <p className="ml-3">Drama</p>
                </div>
                <div className="flex mt-3 p-1 cursor-pointer hover:bg-gray-700 px-2 rounded-xl items-center w-full">
                  <FaSkull className="text-pink-700 text-3xl" />
                  <p className="ml-3">Mystery</p>
                </div>
                <div className="flex mt-3 p-1 cursor-pointer hover:bg-gray-700 px-2 rounded-xl items-center w-full">
                  <FaHeart className="text-pink-700 text-3xl" />
                  <p className="ml-3">Romance</p>
                </div>
                <div className="flex mt-3 p-1 cursor-pointer hover:bg-gray-700 px-2 rounded-xl items-center w-full">
                  <FaHatWizard className="text-pink-700 text-3xl" />
                  <p className="ml-3">Horror</p>
                </div>
                <div className="flex mt-3 p-1 cursor-pointer hover:bg-gray-700 px-2 rounded-xl items-center w-full">
                  <FaMask className="text-pink-700 text-3xl" />
                  <p className="ml-3">Thriller</p>
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col">
            <div onClick={()=> setExpand({...expand, rec: !expand.rec})}
            className="flex w-full justify-between text-lg items-center cursor-pointer">
              <p className="font-semibold ">Account</p>
              <BiCaretDown className={`duration-150  ${expand.rec && 'rotate-[-180deg]'}`} />
            </div>
            {expand.rec && (
              <div className="flex flex-col ml-4">
                <div onClick={()=> setSidePath('feed')} className="flex mt-3 p-1 cursor-pointer hover:bg-gray-700 px-2 rounded-xl items-center w-full">
                  <BiUserCircle className=" text-pink-700 text-2xl" />
                  <p className="ml-3">Profile</p>
                </div>
                <div onClick={()=> setSidePath('admin')} className="flex mt-3 p-1 cursor-pointer hover:bg-gray-700 px-2 rounded-xl items-center w-full">
                  <BiUserCircle className=" text-pink-700 text-2xl" />
                  <p className="ml-3">Profile</p>
                </div>
                <div className="flex mt-3 p-1 cursor-pointer hover:bg-gray-700 px-2 rounded-xl items-center w-full">
                  <i className="fa-solid fa-wand-magic-sparkles text-pink-700 text-2xl"></i>
                  <p className="ml-3">Recommended</p>
                </div>
                <div className="flex mt-3 p-1 cursor-pointer hover:bg-gray-700 px-2 rounded-xl items-center w-full">
                  <BiListUl className=" text-pink-700 text-2xl"/>
                  <p className="ml-3">WatchList</p>
                </div>
                <div className="flex mt-3 p-1 cursor-pointer hover:bg-gray-700 px-2 rounded-xl items-center w-full">
                  <BiSave className="text-pink-700 text-3xl" />
                  <p className="ml-3">Saved</p>
                </div>
              </div>)}  
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="flex items-center w-full">
            <BiCog className="text-pink-700 text-3xl" />
            <p className="ml-3">Settings</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
