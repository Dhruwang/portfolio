import React from 'react'
import storyitup from "../images/storyitup.png"

export default function ProjectCard(props) {
  return (
    <div className='projectCard' id='projectCard'>
        <div className='projectThumbnail'>
            <img src={props.imgLink}></img>
        </div>
        <h2>{props.title}</h2>
        <p>{props.description}</p> 
        <div className='projectButtons'>
            <a className='btn' href={props.gitLink} target="_blank">GitHub</a>
            <a className='btn-inverted' href={props.liveLink} target="_blank">View</a>
        </div>
    </div>
  )
}
