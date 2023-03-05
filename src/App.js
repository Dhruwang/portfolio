import './App.css';
import Home from "./components/Home"
import React, { useEffect,useState } from 'react';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';


function App() {

  const [scrollHeight, setscrollHeight] = useState()
  window.onload = function () {getScrollHeight()}
  window.onscroll = function () { myFunction() };

  function myFunction() {
    console.log(window.scrollY) 
    document.getElementById("fswd").style.top = `${window.scrollY>550?0:-55 + 0.1*window.scrollY}vh`
    document.getElementById("fswd").style.fontSize = `${window.scrollY>500?1:2.5 - 0.003*window.scrollY}rem`
    document.getElementById("spinner").style.top = `${window.scrollY>550?0:-110 + 0.2*window.scrollY}vh`
    document.getElementById("spinner").style.left = `${window.scrollY>500?0:50 - 0.1*window.scrollY}vw`
    console.log(scrollHeight)
    if(window.scrollY<(1.4*scrollHeight)){
      document.getElementById("skillsInner").style.transform = "rotate3d(1, 0, 0, 90deg)"
    }
    if(window.scrollY>(1.4*scrollHeight)){
      document.getElementById("skillsInner").style.transform = "rotate3d(1, 0, 0, 0deg)"
    }
  }
  function getScrollHeight(){
    setscrollHeight(document.getElementById("home").scrollHeight)
  }
  
  return (
    <>
      <Home />
      <About />
      <Skills />
      <Projects />
    </>
  );
}

export default App;
