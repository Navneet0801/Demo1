// eslint-disable-next-line no-unused-vars
import React from 'react'

const Navbar = () => { 
  return (
    <div className='md:flex md:m-10 gap-40 justify-between'>
        <img className='w-full md:w-40 object-cover' src="/images/img_image_3_2.png" alt="Logo" />
        <div className='px-40 md:px-0'>
            <a href='./Works' 
                className='
                mx-5 
                p-3 
                border-[#0A7986] 
                border-2 
                rounded-full 
                text-black 
                bg-white 
                hover:bg-[#0A7986]
                hover:text-white
                sm:w-full'
                >How does it work
            </a>
            <a href='/Works' 
                className='
                mx-5 
                p-3 
                border-[#0A7986] 
                border-2 
                rounded-full 
                text-black 
                bg-white 
                hover:bg-[#0A7986]
                hover:text-white'
                >Get Started
              </a>
        </div>
    </div>
  )
}

export default Navbar

