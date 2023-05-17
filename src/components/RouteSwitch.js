import React from "react";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Home from "./Home";
import Marina from "./Marina";
import Beach from "./Beach";
import Construction from "./Construction";
import TraderJoes from "./TraderJoes";

const RouteSwitch = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marina" element={<Marina />} />
        <Route path="/beach" element={<Beach />} />
        <Route path="/construction" element={<Construction />} />
        <Route path="/traderjoes" element={<TraderJoes />} />
      </Routes>
    </HashRouter>
  );
};

export default RouteSwitch;