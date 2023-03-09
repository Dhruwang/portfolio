import React from 'react'

export default function ResponsiveNav() {

    const hideResponsiveNav=()=>{
        document.getElementById("responsiveNav").style.transform = "translateX(60vw)"
    }

  return (
    <div className='responsiveNav' id='responsiveNav'>
        <button className='closeNavBtn' onClick={hideResponsiveNav}><i class="bi bi-x"></i></button>
        <div className='responsiveNavInner'>
            <a href='#home'>Home</a>
            <a href='#about'>About</a>
            <a href='#skills'>Skills</a>
            <a href='#projects'>Projects</a>
            <a href='#contact'>Contact</a>
        </div>
    </div>
  )
}
