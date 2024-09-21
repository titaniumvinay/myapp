import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Home from "./containers/home";
import About from "./containers/about";
import Resume from "./containers/resume";
import Skills from "./containers/skills";
import Portfolio from "./containers/portfolio";
import Navbar from "./components/navbar"; // Adjust the path if necessary
import BackgroundVideoComponent from './BackgroundVideo/BackgroundVideo';
import "./App.scss";

import Contact from "./containers/contact";
//import particlesConfig from "./util.js/particles";

function App() {
  const location = useLocation();

  const handleInit = async (main) => {
    await loadFull(main);
  };

  //const renderParticleJsInHomePage = location.pathname === "/";

  return (
    <div className="App">
     
     <BackgroundVideoComponent />
      {/* Other components like Navbar */}
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;

