import React from 'react'
import {AiFillLinkedin, AiFillInstagram} from "react-icons/ai"
import {FaGithubSquare} from "react-icons/fa"
import {MdEmail} from "react-icons/md"

function HeroSection() {
  return (
    <div id='hero' className=' h-[100vh]  mt-16  flex flex-col justify-center items-center'>
        <div id='social' className='absolute bg-white md:left-0 -left-[46px] hover:left-0 transition-all duration-150 p-1'>
            <div className='p-1 mb-2 rounded-sm hover:bg-[#facf0f45] '>
               <a href="#">
               <AiFillLinkedin size={30}  />
               </a>
            </div>
            <div className='p-1 mb-2 rounded-sm hover:bg-[#facf0f45] '>
               <a href="#">
               <FaGithubSquare size={30} />               </a>
            </div>
            <div className='p-1 mb-2 rounded-sm hover:bg-[#facf0f45] '>
               <a href="#">
               <AiFillInstagram size={30}/>
               </a>
            </div>
            <div className='p-1 rounded-sm hover:bg-[#facf0f45] '>
               <a href="#">
               <MdEmail size={30}/>
               </a>
            </div>
            
            
        </div>
        <div className='text-center sm:w-[80%] xxl:w-[40%] mt-16'>
            <h1 className='font-extrabold sm:font-black  text-3xl sm:text-4xl leading-normal mb-12 w-[80%] mx-auto'>HEY, I am Mohamad Aghi, <br /> a Front-End developer.</h1>
            <p className='text-lg mb-12 sm:text-xl'>A frontend developer who is passionate about turning beautiful designs into responsive websites</p>
        </div>
        <a href="#projects" className='bg-[#facf0f] py-4 px-12 md:px-16 rounded-lg shadow-md font-bold hover:bg-[#facf0f8b] transition-all duration-200'>PROJECTS</a>
        <div className="mouse">
            <div>

            </div>
        </div>
    </div>
  )
}

export default HeroSection