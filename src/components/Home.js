import React from 'react'
import Intro from './Intro'


export default function Home() {
    return (
        <div className='home' id='home'>
            <div className='laptopContainer'>
                <div className='laptopContainerInner'>
                    
                    <div class="laptop" id='laptop'>
                        <div className='part laptopTop' id='laptopTop'>
                    <div className='laptopLid' id='laptopLid'></div>
                            <div className='laptopTopInner'>
                                <div className='notch'></div>
                                <Intro />
                            </div>
                        </div>
                        
                        <div className='part laptopBottom'></div>
                    </div>
                </div>

            </div>

        </div>
    )
}
