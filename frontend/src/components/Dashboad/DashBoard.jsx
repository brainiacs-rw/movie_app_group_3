import React, { useState } from "react";
import Admin from "./Admin";
import SideBar from "./SideBar";
import Feed from "./Feed";

function DashBoard() {
  const [route, setRooute] = useState("feed");

  return (
    <div className="flex text-sm fixed h-screen w-full">
      {/* <SideBar setRooute={setRooute} /> */}
       <Feed />
      {/* {route === "admin" && <Admin />} */}
    </div>
  );
}

export default DashBoard;
