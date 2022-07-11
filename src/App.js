import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/:user" element={<h1>Hello User</h1>} />
        <Route path="/about/*" element={<About />}>
          <Route path="user-info" element={<h1>About Me</h1>} />
        </Route>
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
