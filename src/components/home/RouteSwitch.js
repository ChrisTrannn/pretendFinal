import React from "react";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Home from "./Home";
import Marina from "../marina/Marina";
import Beach from "../beach/Beach";
import Construction from "../construction/Construction";
import TraderJoes from "../traderjoes/TraderJoes";

const RouteSwitch = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/marina" element={<Marina />} />
        <Route path="/beach" element={<Beach />} />
        <Route path="/construction" element={<Construction />} />
        <Route path="/traderjoes" element={<TraderJoes />} />
      </Routes>
    </HashRouter>
  );
};

export default RouteSwitch;