import React  from "react";
import "./assets/main.css";
import Nav from "./components/Nav";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Aboutus from "./components/routes/Aboutus";
import Play from "./components/routes/Play";
import Blog from "./components/routes/Blog";
import Contact from "./components/routes/Contact";
import Login from "./components/routes/Login";
import Signup from "./components/routes/Signup";
import Terms from "./components/routes/Terms";
import Privacy from "./components/routes/Privacy";
import {   userInputs } from "./formSource";


function App() {

  return (
    <>
      <div className="overflow-x-hidden">
        
        <Nav  />

        <Routes>

          <Route exact path="/" element={<HomePage />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup inputs={userInputs} />} />
          <Route path="/play" element={<Play />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />

        </Routes>

        <Footer />
        
      </div>
    </>
  );
}

export default App;
