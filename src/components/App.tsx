import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Frame from "./frame";
import Sidebar from "./sidebar";

const App = () => {
  useEffect(() => {
    if (window.location.pathname === "/") window.location.pathname = "/home";
  }, []);

  return (
    <>
      <Frame />
      <div className="container">
        {/* <Sidebar /> */}
        <Routes></Routes>
      </div>
    </>
  );
};

export default App;
