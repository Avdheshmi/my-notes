import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Home/Home"
import About from "./Component/about/about"
import Login from "./Component/login/Login";
import Signup from "./Component/register/Register";
import NoteState from "./Component/Context/NoteState";


const app = () => {
  return (
    <>
     <NoteState>
        <Router>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>


        </Router>
        </NoteState>
     

    </>
  )
};

export default app;