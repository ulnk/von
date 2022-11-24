import React from "react";

import { HiHome, HiLibrary, HiBeaker, HiCog } from "react-icons/hi";
import "./index.css";

import Item from "./item";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Item text="info" path="/" />
      {/* <Item text="Settings" bottom={true} /> */}
    </div>
  );
};

export default Sidebar;
