import React from 'react'

export default function ResponsiveNav() {

    const hideResponsiveNav=()=>{
        document.getElementById("responsiveNav").style.transform = "translateX(60vw)"
    }

  return (
    <div className='responsiveNav' id='responsiveNav'>
        <button className='closeNavBtn' onClick={hideResponsiveNav}><i class="bi bi-x"></i></button>
        <div className='responsiveNavInner'>
            <a href='#home' onClick={hideResponsiveNav}>Home</a>
            <a href='#about' onClick={hideResponsiveNav}>About</a>
            <a href='#skills' onClick={hideResponsiveNav}>Skills</a>
            <a href='#projects' onClick={hideResponsiveNav}>Projects</a>
            <a href='#contact' onClick={hideResponsiveNav}>Contact</a>
        </div>
    </div>
  )
}
