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
      <p>As a full stack web developer, I have a passion for creating innovative and engaging digital experiences. With a deep understanding of both front-end and back-end development, I am able to bring projects to life from start to finish.I am constantly seeking new challenges and opportunities to expand my skills and expertise, and I am committed to staying up-to-date with the latest trends and best practices in the field. Whether working on complex enterprise applications or simple landing pages, I approach each project with a dedication to excellence and a focus on delivering results.</p>
      </div>
    <div className='about2'></div>
    </div>
  )
}
