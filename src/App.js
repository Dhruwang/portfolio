import './App.css';
import Home from "./components/Home"
import React, { useEffect,useState } from 'react';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';


function App() {

  const [scrollHeight, setscrollHeight] = useState()
  window.onload = function () {getScrollHeight()}
  window.onscroll = function () { myFunction() };

  function myFunction() {
    document.getElementById("spinner").style.top = `${window.scrollY>500?0:-100 + 0.2*window.scrollY}vh`
    document.getElementById("spinner").style.left = `${window.scrollY>600?0:60 - 0.1*window.scrollY}vw`
    if(window.scrollY<(1.4*scrollHeight)){
      document.getElementById("skillsInner").style.transform = "rotate3d(1, 0, 0, 90deg)"
    }
    if(window.scrollY>(1.4*scrollHeight)){
      document.getElementById("skillsInner").style.transform = "rotate3d(1, 0, 0, 0deg)"
    }
    if(window.scrollY>(2.5*scrollHeight)){
      document.getElementById("projectContainer").classList.add("projectCardSlide")
      document.getElementById("projectContainer2").classList.add("projectCardSlide") 
    }
    if(window.scrollY>(4.8*scrollHeight)){
      document.getElementById("contactInner").classList.add("contactPageAnimation")
      document.getElementById("contactRight").classList.add("contactPageAnimation")
    }
    if(window.scrollY<(4.8*scrollHeight)){
      document.getElementById("contactInner").classList.remove("contactPageAnimation")
      document.getElementById("contactRight").classList.remove("contactPageAnimation")
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
      <Contact />
    </>
  );
}

export default App;
