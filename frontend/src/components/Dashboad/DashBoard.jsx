import React, { useState } from "react";
// import Admin from "./Admin";
import Feed from "./Feed";
import SideBar from "./SideBar";

function DashBoard() {
//   const [route, setRooute] = useState("feed");

  return (
    <div className="flex text-sm fixed h-screen w-full">
      <SideBar />
       <Feed />
      {/* {route === "admin" && <Admin />} */}
    </div>
  );
}

export default DashBoard;
