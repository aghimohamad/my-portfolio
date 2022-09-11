import React from 'react'
import Button from './Button'
import Heading from './Heading'

function About() {

   const heading = {
        title : "ABOUT ME",
        description : "Get to know my skills and know me a little bit "
    }
    const skills = ["HTML", "CSS", "JavaScript", "TypeScript", "Reactjs", "Nextjs", "Redux", "SASS", "SCSS", "Git", "GitHub", "Responsive Design", "TailwindCSS", "BootStrapCSS", "Firebase",   ]



  return (
    <div className='bg-[#fafafa] p-8'>
        <Heading heading= {heading}/>
        <div className='flex flex-col md:flex-row justify-center md:justify-around '>
            <div className='mb-12 md:mb-0 md:w-[45%]'>
                <h1 className='text-xl font-bold mb-7'>Who am I ?</h1>
                <p className='text-[#666] leading-relaxed mb-7'>My name is Mohamad Aghi, I am a <strong>Frontend Web Developer</strong> I am originally a petroleum engineer but i made the career shift since i discovered my passion which clearly was creating websites.  <br/> <br/> I enjoy the process of bringing the static disigns into life and turning into responsive, reactive, user-friendly and beautiful apps</p>
                <Button text="contact" href="#" />
            </div>
            <div className='md:w-[45%]'>
                <h1 className='text-xl font-bold mb-7'>My Skills :</h1>
                <div className='flex flex-wrap'>
                    {skills.map(skill => (
                    <span className='bg-[#99999933] text-[#666] py-2 px-3 mx-1 my-1 w-fit rounded-md hover:bg-slate-300 transition-all duration-200'>{skill}</span>
                ))}
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default About