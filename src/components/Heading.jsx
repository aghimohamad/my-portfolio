import React from 'react'

function Heading({heading}) {
  return (
    <div className=' flex flex-col justify-center items-center py-16'>
           <h1 className='text-3xl font-bold'>{heading.title}</h1>
           <hr className='my-6 h-2 w-7 rounded-lg bg-[#facf0f]' />
           <p className='font-normal text-[#555]'>{heading.description}</p>
    </div>
  )
}

export default Heading