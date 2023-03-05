import React from 'react'
import ProjectCard from './ProjectCard'
import StoryItUp from "../images/storyitup.png"
import movieWiki from "../images/moviewiki.png"
import findmyrecipe from "../images/findmyrecipe.png"

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
            imgLink : StoryItUp,
            title : "StoryItUp",
            description : "StoryITUp is web portal for collection and display of startup storeis from across the world",
            gitLink : "https://github.com/Dhruwang/StoryItUp_client",
            liveLink : "https://storyitup403.netlifly.app"
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
    
        </div>
    </div>
  )
}
