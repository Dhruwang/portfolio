import './App.css';
import Home from "./components/Home"
import React, { useEffect,useState } from 'react';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ResponsiveNav from './components/ResponsiveNav';


function App() {

 
  
  return (
    <>
      <Home />
      <ResponsiveNav />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
