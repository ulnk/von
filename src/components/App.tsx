import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Frame from "./frame";
import Sidebar from "./sidebar";

import { HiChevronDown, HiChevronUp } from "react-icons/hi";

import useWindowSize from "../common/useWindowSize";
import { getTauriVersion } from "@tauri-apps/api/app";

const App = () => {
  const size = useWindowSize();
  const [tauriVersion, setTauriVersion] = useState("");

  const [dropdownActive, setDropdownActive] = useState(false);
  const [dropdownValue, setDropdownValue] = useState("select child");

  useEffect(() => {
    getTauriVersion().then((version) => {
      setTauriVersion(version);
    });
  }, []);

  return (
    <>
      <Frame />
      <div className="flex-row">
        <Sidebar />
        <div className="container">
          <Routes></Routes>
          <span>
            {size.width} x {size.height}
          </span>
          <span>Tauri Version {tauriVersion}</span>
          <div>
            <h3 className="input-header">INPUT HEADER</h3>
            <div
              className="dropdown"
              onClick={() => setDropdownActive((x) => !x)}
            >
              <span className="dropdown-title">{dropdownValue}</span>
              <HiChevronDown className={dropdownActive ? "spin" : ""} />
              <div className={`children ${dropdownActive && "dActive"}`}>
                <button onClick={() => setDropdownValue("child 1")}>
                  child 1
                </button>
                <button onClick={() => setDropdownValue("child 2")}>
                  child 2
                </button>
                <button onClick={() => setDropdownValue("child 3")}>
                  child 3
                </button>
              </div>
            </div>
          </div>
          <button>example button</button>
          <button className="submit">submit</button>
          <button className="cancel">cancel</button>
          <input type="text" placeholder="input " spellCheck={false} />
          <div className="divider"></div>
          <div className="divider text">
            <span>DIVIDER WITH TEXT</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
