import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Writtern from './pages/Writtern';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';

import Grid from './components/Grid';
import Hero from "./components/Hero";

function App() {
  return (
    <Router>
        
        <div>
        <Navbar/>
        
        
        </div>

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/writtern" element={<Writtern />}/>
        </Routes>
    </Router>

  );
}

export default App;
