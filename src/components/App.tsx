import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Frame from "./frame";
import Sidebar from "./sidebar";

import useWindowSize from "../common/useWindowSize";

import { getTauriVersion } from "@tauri-apps/api/app";
import {
  isPermissionGranted,
  requestPermission,
  sendNotification,
} from "@tauri-apps/api/notification";

const App = () => {
  const size = useWindowSize();
  const [tauriVersion, setTauriVersion] = useState("");

  useEffect(() => {
    getTauriVersion().then((version) => {
      setTauriVersion(version);
    });
  }, []);

  return (
    <>
      <Frame />
      <div className="container">
        {/* <Sidebar /> */}
        <Routes></Routes>
        <span>
          {size.width} x {size.height}
        </span>
        <span>Tauri Version {tauriVersion}</span>
        <button
          onClick={async () => {
            let permissionGranted = await isPermissionGranted();
            if (!permissionGranted) {
              const permission = await requestPermission();
              permissionGranted = permission === "granted";
            }
            if (permissionGranted) {
              sendNotification("Tauri is awesome!");
              sendNotification({ title: "TAURI", body: "Tauri is awesome!" });
            }
          }}
        >
          Notify
        </button>
      </div>
    </>
  );
};

export default App;
