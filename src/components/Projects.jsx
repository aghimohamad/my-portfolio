import React from 'react'
import Heading from './Heading'
import Project from './Project'

function Projects() {

    const heading = {
        title : "PROJECTS",
        description : "take a look at some projects i built using the skills you just saw"
    }

    const projects = [
        {
            title : "Let's share",
            stack : ["HTML", "CSS", "JavaScript","Reactjs", "Nextjs", "Git", "GitHub", "Responsive Design", "TailwindCSS", "Firebase",],
            description : `LetsShare is a website that allow people who have extra belongings make donations and provide a sharing space for people in need for requesting the goods they need.  The aim of the website is to encourage people who live in the same region to share their daily extra food, clothes, furniture and more! The website is intended for refugees living in Turkey, especially in refugee camps. On this website, you can find various types of goods that are ready for a donation, and also requests. Types of goods are categorized as clothing, furniture,  electronics and much more. `,
            github : "https://github.com/ReCoded-Org/lets-share-capstone-project",
            live : "https://lets-share-proj.netlify.app/",
            image1 : "/letsshare.png",
            image2 :  "/letsshare2.jpeg"
        }
    ]



  return (
    <div>
        <Heading heading={heading} />
        <Project project={projects[0]} />
    </div>
  )
}

export default Projects