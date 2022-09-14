import React, { useState } from 'react'
import {FaBars, FaTimes} from "react-icons/fa"

function NavBar() {

    const [nav , setNav ] = useState(false)

    const links = [
        {
          id: 1,
          link: "Home",
        },
        {
          id: 2,
          link: "About",
        },
        {
          id: 3,
          link: "Projects",
        },
        {
          id: 4,
          link: "Contact",
        },
      ];
    


  return (
    <div className='flex justify-between items-center top-0 w-full h-16 text-primary fixed bg-white px-4 z-10 '>
        <div className='flex'>
          <img src="/favicon.ico" alt="" className='rounded-full h-8 w-8'/>
            <h1 className="font-title font-bold text-xl md:text-2xl  text-[#333] ml-2">Mohamad aghi</h1>
        </div>

        <ul className=' hidden md:flex '>
            {links.map(link => (
              <a key={link.id} href={`#${link.link}`} >
                <li  className='mx-2 cursor-pointer capitalize text-[#111] font-medium hover:text-[#facf0f] transition-colors duration-50'> {link.link}</li></a>
            ))}
        </ul>
        <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-primary md:hidden'>
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        <ul className={` ${!nav && '-right-full' } ${nav&& 'right-0'} top-full flex flex-col justify-center items-center absolute  w-full transition-all  duration-500 bg-white`}>
            {links.map(link => (
              <a key={link.id} href={`#${link.link}`} className='w-full' >
                <li  className={` hover:bg-[#facf0f]  text-[#333] text-center w-full cursor-pointer capitalize text-lg font-bold py-4 border-b hover:text-[#111] transition-colors duration-100`}>
                    {link.link} </li>
                    </a>
            ))}
        </ul>
    </div>
  )
}

export default NavBar