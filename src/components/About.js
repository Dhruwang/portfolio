import React from 'react'
import Spinner from "../images/spinner.png"

export default function About() {

  var themeCount = 0

  const chanmgeTheme =()=>{
    var r = document.querySelector(':root');
    if(themeCount===0){
      
    r.style.setProperty('--primary', '#352C2D');
    r.style.setProperty('--secondary', '#E1D5CD');
    themeCount++;
    }
    else{
      r.style.setProperty('--primary', '#E1D5CD');
    r.style.setProperty('--secondary', '#352C2D');
    themeCount--;
    }
    
  }

  return (
    <div className='about'>
      <div className='aboutLeft' >
        <button className='spinnerBtn' onClick={chanmgeTheme}>
          <div className='spinnerMask'>
            
          </div>

      <img className="spinner" id='spinner' src={Spinner}></img> 
        </button>
      </div>
      <div className='aboutInner'>

      <h1>About Me</h1>
      <p>I am a Full stack web developer specialised in building profession web apps which are production ready and fully optimised I am a full stack web developer specialised in building profession web apps which are production ready and fully optimised I am a full stack web developer specialised in building profession web apps which are production ready and fully optimised I am a full stack web developer <span className='skillText'>Skills</span> in building profession web apps which are production ready and fully optimised</p>
      </div>
    <div className='about2'></div>
    </div>
  )
}
