import React from 'react'
import Spinner from "../images/spinner.png"

export default function About() {
  return (
    <div className='about'>
      <div className='aboutLeft'>
      <img className="spinner" id='spinner' src={Spinner}></img>
      </div>
      <div className='aboutInner'>

      <h1>About Me</h1>
      <p>I am a< span className='fswd' id="fswd"> Full stack web developer</span> specialised in building profession web apps which are production ready and fully optimised I am a full stack web developer specialised in building profession web apps which are production ready and fully optimised I am a full stack web developer specialised in building profession web apps which are production ready and fully optimised I am a full stack web developer <span className='skillText'>Skills</span> in building profession web apps which are production ready and fully optimised</p>
      </div>
    <div className='about2'></div>
    </div>
  )
}
