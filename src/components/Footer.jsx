import React from 'react'
import {AiFillLinkedin, AiFillInstagram} from "react-icons/ai"
import {FaGithubSquare} from "react-icons/fa"
import {MdEmail} from "react-icons/md"

function Footer () {
  return (
    <div className='bg-black text-white p-10 '>
        <div className='flex flex-col md:flex-row justify-center text-center md:justify-between '>
            <div className='mb-10 md:w-[45%] md:text-start'>
                <h1 className='font-bold text-2xl mb-3'>MOHAMAD AGHI</h1>
                <p className='text-sm ' >A frontend developer who is passionate about turning beautiful designs into responsive websites</p>
            </div>
            <div>
                <h1 className='font-bold text-2xl '>social</h1>      
                <div className='flex mx-auto w-fit'>
            <div className='p-2 transition-all duration-200 hover:animate-ping mb-2 rounded-full hover:bg-[#dddddd4b] '>
               <a href="https://www.linkedin.com/in/mohamad-aghi-86852b14b/">
               <AiFillLinkedin size={30}  />
               </a>
            </div>
            <div className='p-2 transition-all duration-200 hover:animate-ping mb-2 rounded-full hover:bg-[#dddddd4b] '>
               <a href="https://github.com/aghimohamad">
               <FaGithubSquare size={30} />               </a>
            </div>
            <div className='p-2 transition-all duration-200 hover:animate-ping mb-2 rounded-full hover:bg-[#dddddd4b] '>
               <a href="#https://instagram.com/aghimohamad">
               <AiFillInstagram size={30}/>
               </a>
            </div>
            <div className='p-2 transition-all duration-200 hover:animate-ping mb-2 rounded-full hover:bg-[#dddddd4b] '>
               <a href="#Contact">
               <MdEmail size={30}/>
               </a>
            </div>
                </div>
            </div>
        </div>
        <hr className='my-5'/>
        <p className='text-xs text-center'> &copy; Copyright 2022. Made by <a href="https://www.linkedin.com/in/mohamad-aghi-86852b14b/" className='font-bold underline'>MOHAMAD AGHI</a> </p>
    </div>
  )
}

export default Footer