import React from 'react'
import Button from './Button'

function Project({project}) {
  return (
    <div className='flex flex-col md:flex-row justify-around p-8 items-center'>
        <div className='md:w-[45%]'>
            <h1 className='text-xl font-bold mb-7'>{project.title}</h1> 
            <div className='flex flex-wrap'>
                {project.stack.map(skill => (
                      <span className='bg-[#99999933] text-[#666] py-2 px-3 mx-1 my-1 w-fit rounded-md hover:bg-slate-300 transition-all duration-200'>{skill}</span>
                ))}
            </div>
            <div className='my-6 flex justify-around'>
                <Button href={project.live} text="Live Demo" />
                <Button href={project.github} text="GitHub"/>
            </div>
            <p className='text-[#666] leading-relaxed mb-7'>{project.description}</p>
        </div>
        <div className='relative group md:w-[45%] rounded-3xl overflow-hidden hover:-translate-y-5 hover:opacity-90 cursor-pointer  transition-all duration-200 w-64'>
                    <img src={project.image1} alt="" className='  transition-all duration-200 hover:blur-sm  '/>
                    <a href={project.live} className="absolute opacity-0 group-hover:opacity-100 hover:block top-[50%] left-[50%] rounded-xl bg-[#facf0f] px-6 py-2 text-2xl md:font-bold -translate-y-[50%] -translate-x-[50%] z-11 transition-all duration-200">Visit It!</a>
        </div>
    </div>
  )
}

export default Project