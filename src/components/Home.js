import React from 'react'
import { Link } from 'react-router-dom'



export default function Home() {
    return (
        <div className='home' id='home'>
            <div className='homeInner'>
                <div className='navbar'>
                    <div className='navbarLeft'>
                        <h2>dhruwang.com</h2>
                    </div>
                    <div className='navbarRight'>
                        <a href="/">Home</a>
                        <a href="/">About</a>
                        <a href="/">Skills</a>
                        <a href="/">Projects</a>
                        <a href="/">Contact</a>
                    </div>
                </div>
                <div className='homeMiddle'>
                    <div className='homeMiddleLeft'>
                    <h1>Jariwala Dhruwang</h1>
                    <p>Full stack web developer</p>
                    </div>
                    <div className='homeMiddleRight'>
                        
                        {/* <div className='spinner'>
                            <div className='spinnerInner'></div>
                        </div> */}
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
