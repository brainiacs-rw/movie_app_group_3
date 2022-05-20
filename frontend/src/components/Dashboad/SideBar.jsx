import React from "react";
import { BiCog, BiTable } from "react-icons/bi";
import logo from "../../Images/logo.png";
import WIWO from "../../Images/WIWO.png";

function SideBar() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex h-full py-6 flex-col px-6 bg-[#3A435B] w-[220px] justify-between">
        <div className="logo flex">
          <img src={logo} alt="" />
          <img className="scale-50 translate-x-[-30px]" src={WIWO} alt="" />
        </div>
        <div className="flex flex-col translate-y-[-100px]">
          <div className="flex w-full justify-between items-center">
            <p className="font-semibold">Categories</p>
            <p>b</p>
          </div>
          <div className="flex flex-col ml-7">
            <div className="flex items-center w-full">
              <BiTable className="text-pink-700 text-3xl" />
              <p className="ml-3">Action</p>
            </div>
            <div className="flex items-center w-full">
              <BiTable className="text-pink-700 text-3xl" />
              <p className="ml-3">Adventure</p>
            </div>
            <div className="flex items-center w-full">
              <BiTable className="text-pink-700 text-3xl" />
              <p className="ml-3">Comedy</p>
            </div>
            <div className="flex items-center w-full">
              <BiTable className="text-pink-700 text-3xl" />
              <p className="ml-3">Drama</p>
            </div>
            <div className="flex items-center w-full">
              <BiTable className="text-pink-700 text-3xl" />
              <p className="ml-3">Mystery</p>
            </div>
            <div className="flex items-center w-full">
              <BiTable className="text-pink-700 text-3xl" />
              <p className="ml-3">Romance</p>
            </div>
            <div className="flex items-center w-full">
              <BiTable className="text-pink-700 text-3xl" />
              <p className="ml-3">Horror</p>
            </div>
            <div className="flex items-center w-full">
              <BiTable className="text-pink-700 text-3xl" />
              <p className="ml-3">Thriller</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="flex items-center w-full">
            <BiCog className="text-pink-700 text-3xl"/>
            <p className="ml-3">Settings</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
