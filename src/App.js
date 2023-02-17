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
      document.getElementById("intro").style.opacity = 0


    }
    if (position > 2000) {
      document.getElementById("intro").style.opacity = `${0.0005 * (position - 2000)}`
    }
    if (position > 2500) {
      document.getElementById("intro").style.opacity = `${1 - 0.0005 * (position - 2500)}`
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
