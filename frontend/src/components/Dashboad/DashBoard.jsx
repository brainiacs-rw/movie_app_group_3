import React, { useState } from "react";
import Admin from "./Admin";
import SideBar from "./SideBar";

function DashBoard() {
  const [route, setRooute] = useState("feed");

  return (
    <div className="flex text-sm fixed h-screen w-full">
      <SideBar setRooute={setRooute} />
       <DashBoard />
      {/* {route === "admin" && <Admin />} */}
    </div>
  );
}

export default DashBoard;
