import React from 'react'

function Button({text , href}) {
  return (
         <a href={href} className='bg-[#facf0f] my-5 py-2 px-6 md:px-10 rounded-lg shadow-md font-bold hover:bg-[#facf0f8b] transition-all duration-200'>{text}</a>
  )
}

export default Button