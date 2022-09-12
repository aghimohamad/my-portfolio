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
            image : "/letsshare.png",
                },
        {
            title : "movie app",
            stack : ["HTML", "CSS", "JavaScript",  "Git", "GitHub", "Responsive Design", "API"],
            description : "this app is for viewing movies and actors, we used an external API called \" movie dp\" and we used plain javaScript to make this happend there's a page for each category also you can filter using top watched and recent movies, you can also search movies by title, take a look at it! ",
            live : "https://recoded-bprm-turkey-few-2022.github.io/movie-project-bamya/",
            github : "https://github.com/Recoded-BPRM-Turkey-FEW-2022/movie-project-bamya",
            image : "/movie.png"
        },
        {
            title : "Facebook clone",
            stack : ["Git", "GitHub", "Responsive Design","Reactjs", "Nextjs", "NextAUTH", "Git", "GitHub", "Responsive Design", "TailwindCSS", "Firebase",],
            description : "this app is something that looks like facebook, i built it to learn authentication using NextAUTH and dealing with database using firebase the way authentication is handled is using facebook account through NextAUTH and you can submit posts that will be saved and fetched from the firebase database using firestore, ",
            live : "https://facebook-clone-three-ruddy.vercel.app/",
            github : "https://github.com/aghimohamad/facebood-clone",
            image : "/facebook.png"
        },

    ]



  return (
    <div className='p-8'>
        <Heading heading={heading} />
        {projects.map(project => (
            <Project key={project.title} project={project} />
        ))}
    </div>
  )
}

export default Projects