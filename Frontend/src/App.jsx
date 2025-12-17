import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import About from "./Pages/About";
import Dashboard from "./Pages/Dachboard";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
