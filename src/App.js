import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import FormerLife from './pages/former-life/index.jsx'
import Code from "./pages/code/index";
import TechCommunity from './pages/tech-community'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/former-life" element={<FormerLife />} />
        <Route path="/code" element={<Code />} />
        <Route path="/tech-community" element={<TechCommunity />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
