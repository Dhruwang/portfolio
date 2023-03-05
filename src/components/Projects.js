import React from 'react'
import ProjectCard from './ProjectCard'
import StoryItUp from "../images/storyitup.png"
import movieWiki from "../images/moviewiki.png"
import findmyrecipe from "../images/findmyrecipe.png"
import whatsnew from "../images/whatsnew.png"
import marketo from "../images/marketo.png"
import theshoestore from "../images/theshoestore.png"
import theclock from "../images/theclock.png"
import nikehome from "../images/nikehome.png"
import applewatch from "../images/applewatch.png"
import colortiles from "../images/colortiles.png"

export default function Projects() {

    const projectsArr = [
        {
            imgLink : StoryItUp,
            title : "StoryItUp",
            description : "StoryITUp is web portal for collection and display of startup storeis from across the world",
            gitLink : "https://github.com/Dhruwang/StoryItUp_client",
            liveLink : "https://storyitup403.netlify.app"
        },
        {
            imgLink : movieWiki,
            title : "MovieWiki",
            description : "Explore latest movies and series from across the world. Watch Trailer ,filter by genre and much more.",
            gitLink : "https://github.com/Dhruwang/moviewiki",
            liveLink : "https://moviewikibyjd.netlify.app/"
        },
        {
            imgLink : findmyrecipe,
            title : "FindMyRecipe",
            description : "Explore Delicious recipes along with detailed instructions and required Ingredients.",
            gitLink : "https://github.com/Dhruwang/findMyRecipie",
            liveLink : "https://findmyrecipebyjd.netlify.app/"
        },
        {
            imgLink : whatsnew,
            title : "WhatsNew",
            description : "Read whats going on in the world with Whatsnew. Made using NewsAPI",
            gitLink : "https://github.com/Dhruwang/WhatsNew",
            liveLink : ""
        },
        {
            imgLink : marketo,
            title : "Marketo",
            description : "Marketo is a landing page made using react for a digital marketing Agency",
            gitLink : "https://github.com/Dhruwang/Marketo",
            liveLink : "https://marketo19.netlify.app/"
        },
        {
            imgLink : theshoestore,
            title : "TheShoeStore",
            description : "An Online market place for a small business to display and sell shoes ",
            gitLink : "https://github.com/Dhruwang/ShoesStore",
            liveLink : "https://effulgent-daffodil-ffdfbd.netlify.app/"
        },
    ]

    const miniProjectsArr = [
        {
            imgLink : theclock,
            title : "TheClock",
            gitLink : "https://github.com/Dhruwang/clockTicking",
            liveLink : "https://theclockbyjd.netlify.app/"
        },
        {
            imgLink : nikehome,
            title : "NikeHome",
            gitLink : "https://github.com/Dhruwang/Nike",
            liveLink : "https://nikehomebyjd.netlify.app/"
        },
        {
            imgLink : applewatch,
            title : "AppleWatch",
            gitLink : "https://github.com/Dhruwang/AppleWatchAnimation",
            liveLink : "https://applewatchjd.netlify.app//"
        },
        {
            imgLink : colortiles,
            title : "ColorTiles",
            gitLink : "https://github.com/Dhruwang/colorTiles",
            liveLink : "https://colortiles.netlify.app/"
        },
    ]
  return (
    <div className='projects'>
        <div className='projectsInner'>
            <h1 className='projectsTitle'>Projects</h1>
            <div className='projectContainer'>
                {projectsArr.map((element)=>{
                    return <ProjectCard imgLink={element.imgLink} title={element.title} description={element.description} gitLink={element.gitLink} liveLink={element.liveLink}/>
                })}          
            </div>
            <div className='proectContainer2'>
                <h1>Mini Projects</h1>
                <div className='projectContainer'>
                {miniProjectsArr.map((element)=>{
                    return <ProjectCard imgLink={element.imgLink} title={element.title}  gitLink={element.gitLink} liveLink={element.liveLink}/>
                })}          
            </div>
            </div>
    
        </div>
    </div>
  )
}
