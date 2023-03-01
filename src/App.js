import './App.css';
import Home from "./components/Home"
import React, { useEffect } from 'react';

// inside component:

function App() {

  const handleScroll = () => {

    const position = window.pageYOffset;
    if (position < 1200) {
      document.getElementById("laptop").style.transform = `scale(${0.001 * position})`
      document.getElementById("laptopTop").classList.remove("laptopGlow")
      document.getElementById("laptopTop").classList.remove("laptopOpen")
    }
    if (position > 1200) {
      document.getElementById("laptopTop").classList.add("laptopGlow")
      document.getElementById("laptopTop").classList.add("laptopOpen")
    }
    if (position > 2000) {
      document.getElementById("Intro").style.display = "flex" 
    }
    if(position>5000){
      document.getElementById("Intro").style.transform = `translateY(${(5000-position)*0.03}vh)` 
    }
    if(position>7000){
    }
    if(position>9000){
      document.getElementById("skillColumn1").style.transform = `translateY(${(9000-position)*0.1}%)`
      document.getElementById("skillColumn2").style.transform = `translateY(${-(9000-position)*0.1}%)`
      document.getElementById("skillRightInner").style.transform = `translateX(${(9000-position)*0.1}%)`
    }

    console.log(position)
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <Home />
    </>
  );
}

export default App;
