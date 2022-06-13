import React, { useState } from "react";
import Admin from "./Admin";
import Feed from "./Feed";
import SideBar from "./SideBar";

function DashBoard() {
  const [SidePath, setSidePath] = useState("feed");

  return (
    <div className="flex text-sm fixed h-screen w-full">
      <SideBar setSidePath={setSidePath} />
        {SidePath === "feed" && <Feed />}
      {SidePath === "admin" && <Admin />}
    </div>
  );
}

export default DashBoard;
