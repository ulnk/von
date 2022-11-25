import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Frame from "./frame";
import Sidebar from "./sidebar";

import SteamPage from "../pages/steam";

const App = () => {
  return (
    <>
      <Frame />
      <div className="flex-row">
        <Sidebar />
        <div className="container">
          <Routes>
            <Route path="/" element={<SteamPage />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
