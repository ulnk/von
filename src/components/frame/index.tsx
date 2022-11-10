import React from "react";
import { appWindow } from "@tauri-apps/api/window";

import {
  VscChromeClose,
  VscChromeMaximize,
  VscChromeMinimize,
} from "react-icons/vsc";
import "./index.css";

const Frame = () => {
  return (
    <div data-tauri-drag-region className="frame">
      <span data-tauri-drag-region>von client</span>
      <ul>
        <button onClick={() => appWindow.minimize()}>
          <VscChromeMinimize />
        </button>
        <button onClick={() => appWindow.toggleMaximize()}>
          <VscChromeMaximize />
        </button>
        <button onClick={() => appWindow.close()} className="close">
          <VscChromeClose />
        </button>
      </ul>
    </div>
  );
};

export default Frame;
