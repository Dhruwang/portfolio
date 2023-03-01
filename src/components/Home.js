import React from 'react'
import Main from './Main'
import { Link } from 'react-router-dom'


export default function Home() {
    return (
        <div className='home' id='home'>
            <div className='websiteName'>Dhruwang.com</div>
            <div className='rawFiles'></div>
            <div className='navigation'>
                <div className='navigationMain'>
                    <a>Home</a>
                    <a>Skills</a>
                    <a>Projects</a>
                    <a>Contact</a>
                </div>
                </div>
            <div className='laptopContainer'>
                
                <div className='laptopContainerInner'>

                    <div class="laptop" id='laptop'>
                        <div className='part laptopTop' id='laptopTop'>
                            
                            <div className='laptopLid' id='laptopLid'></div>
                            <div className='laptopTopInner'>
                                <div className='notch'></div>
                                <Main />
                            </div>
                        </div>

                        <div className='part laptopBottom'></div>
                    </div>
                </div>

            </div>
            

        </div>
    )
}
