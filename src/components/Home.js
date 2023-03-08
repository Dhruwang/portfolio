import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Spinner1 from "../images/spinner1.png"
import Spinner2 from "../images/spinner2.png"



export default function Home() {

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
        <div className='home' id='home'>
            <div className='homeInner'>
                <div className='navbar'>
                    <div className='navbarLeft'>
                        <h2>dhruwang.com</h2>
                    </div>
                    <div className='navbarRight'>
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#skills">Skills</a>
                        <a href="#projects">Projects</a>
                        <a href="#contact">Contact</a>
                    </div>
                </div>
                <div className='homeMiddle'>
                    <div className='homeMiddleLeft'>
                        <h1>Jariwala Dhruwang</h1>
                        <p>Full stack web developer</p>
                    </div>
                    <div className='homeMiddleRight'>

                            <button className='spinnerBtn' onClick={chanmgeTheme}>
                                <div className='spinnerMask'>

                                </div>

                                <img className="spinner2" id='spinner2' src={themeCount === 1 ? Spinner2 : Spinner1}></img>
                            </button>
                        
                    </div>

                </div>
            </div>
        </div>
    )
}
