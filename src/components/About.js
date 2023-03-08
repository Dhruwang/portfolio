import React,{useState} from 'react'
import Spinner1 from "../images/spinner1.png"
import Spinner2 from "../images/spinner2.png"

export default function About() {

  const [themeCount, setthemeCount] = useState(1)

  const chanmgeTheme =()=>{
    var r = document.querySelector(':root');
    if(themeCount===1){
      
    r.style.setProperty('--primary', '#352C2D');
    r.style.setProperty('--secondary', '#E1D5CD');
    setthemeCount(2);
    }
    else{
      r.style.setProperty('--primary', '#E1D5CD');
    r.style.setProperty('--secondary', '#352C2D');
    setthemeCount(1);
    }
    
  }

  return (
    <div className='about' id='about'>
      <div className='aboutLeft' >
        <button className='spinnerBtn' onClick={chanmgeTheme}>
          <div className='spinnerMask'>
            
          </div>

      <img className="spinner" id='spinner' src={themeCount===1?Spinner2:Spinner1}></img> 
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
