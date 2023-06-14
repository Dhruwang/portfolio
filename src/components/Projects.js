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
// import matchmingo from "../images/matchmingo.png" 
import lotterydapp from "../images/lotterydapp.png"
import ainft from "../images/ainft.png"
import cryptoswap from "../images/cryptoswap.png"

export default function Projects() {

    const projectsArr = [
        // {
        //     imgLink: matchmingo,
        //     title: "Matchmingo",
        //     description: "Matchmingo is a college based dating App to connect People within college campus",
        //     gitLink: "https://matchmingo.netlify.app",
        //     liveLink: "https://matchmingo.netlify.app"
        // },
        {
            imgLink: StoryItUp,
            title: "StoryItUp",
            description: "StoryITUp is web portal for collection and display of startup storeis from across the world",
            gitLink: "https://github.com/Dhruwang/StoryItUp_client",
            liveLink: "https://storyitup403.netlify.app"
        },
        {
            imgLink: movieWiki,
            title: "MovieWiki",
            description: "Explore latest movies and series from across the world. Watch Trailer ,filter by genre and much more.",
            gitLink: "https://github.com/Dhruwang/moviewiki",
            liveLink: "https://moviewikibyjd.netlify.app/"
        },
        {
            imgLink: findmyrecipe,
            title: "FindMyRecipe",
            description: "Explore Delicious recipes along with detailed instructions and required Ingredients.",
            gitLink: "https://github.com/Dhruwang/findMyRecipie",
            liveLink: "https://findmyrecipebyjd.netlify.app/"
        },
        {
            imgLink: whatsnew,
            title: "WhatsNew",
            description: "Read whats going on in the world with Whatsnew. Made using NewsAPI",
            gitLink: "https://github.com/Dhruwang/WhatsNew",
            liveLink: "https://github.com/Dhruwang/WhatsNew"
        },
        {
            imgLink: marketo,
            title: "Marketo",
            description: "Marketo is a landing page made using react for a digital marketing Agency",
            gitLink: "https://github.com/Dhruwang/Marketo",
            liveLink: "https://marketo19.netlify.app/"
        },
        {
            imgLink: theshoestore,
            title: "TheShoeStore",
            description: "An Online market place for a small business to display and sell shoes ",
            gitLink: "https://github.com/Dhruwang/ShoesStore",
            liveLink: "https://effulgent-daffodil-ffdfbd.netlify.app/"
        },
    ]

    const miniProjectsArr = [
        {
            imgLink: theclock,
            title: "TheClock",
            gitLink: "https://github.com/Dhruwang/clockTicking",
            liveLink: "https://theclockbyjd.netlify.app/"
        },
        {
            imgLink: nikehome,
            title: "NikeHome",
            gitLink: "https://github.com/Dhruwang/Nike",
            liveLink: "https://nikehomebyjd.netlify.app/"
        },
        {
            imgLink: applewatch,
            title: "AppleWatch",
            gitLink: "https://github.com/Dhruwang/AppleWatchAnimation",
            liveLink: "https://applewatchjd.netlify.app//"
        },
        {
            imgLink: colortiles,
            title: "ColorTiles",
            gitLink: "https://github.com/Dhruwang/colorTiles",
            liveLink: "https://colortiles.netlify.app/"
        },
    ]
    const web3ProjectArr = [
        {
            imgLink: lotterydapp,
            title: "LotteryDap",
            gitLink: "https://github.com/Dhruwang/lottery_dapp",
            liveLink: "https://lotterydappbyjd.netlify.app/"
        },
        {
            imgLink: ainft,
            title: "AINFT",
            gitLink: "https://github.com/Dhruwang/AINFT",
            liveLink: "https://ainftbyjd.netlify.app/"
        },
        {
            imgLink: cryptoswap,
            title: "CryptoPay",
            gitLink: "https://github.com/Dhruwang/CryptoPay",
            liveLink: "https://cryptopaybyjd.netlify.app/"
        }
    ]
    return (
        <div className='projects' id='projects'>
            <div className='projectsInner'>
                <h1 className='projectsTitle'>Projects</h1>
                <div className='projectContainer' id='projectContainer'>
                    {projectsArr.map((element) => {
                        return <ProjectCard imgLink={element.imgLink} title={element.title} description={element.description} gitLink={element.gitLink} liveLink={element.liveLink} />
                    })}
                </div>
                <div className='miniProjects' >
                    <h1>Web 3.0</h1>
                    <div className='projectContainer' id='projectContainer2'>
                        {web3ProjectArr.map((element) => {
                            return <ProjectCard imgLink={element.imgLink} title={element.title} gitLink={element.gitLink} liveLink={element.liveLink} />
                        })}
                    </div>
                </div>
                <div className='miniProjects' >
                    <h1>Mini Projects</h1>
                    <div className='projectContainer' id='projectContainer3'>
                        {miniProjectsArr.map((element) => {
                            return <ProjectCard imgLink={element.imgLink} title={element.title} gitLink={element.gitLink} liveLink={element.liveLink} />
                        })}
                    </div>
                </div>

            </div>
        </div>
    )
}
