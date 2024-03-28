// eslint-disable-next-line no-unused-vars
import React from 'react'

const LandingPage = () => {
  return (
    <div className='flex flex-col md:flex-row md:gap-10 w-full'>
        <div className='w-full md:w-1/2 px-6 md:px-36 py-10 md:py-52'>
            <h1 className='text-3xl md:text-5xl md:px-0 px-[9vh] py-3 font-semibold'>Welcome to AsoWin,</h1>
            <p className='text-3xl md:text-6xl md:px-0 px-[1vh] py-3 font-bold'>Get Paid for Installing Apps</p>
            <p className='py-4 px-5 md:px-0'>Whether you are a student, a parent, or anyone in between, our platform offers a simple way to boost your income.</p>
            <div className='flex justify-center'>
            <button className=' 
                py-2
                px-7
                font-semibold 
                border-[#0A7986] 
                border-2 
                rounded-full 
                text-black 
                bg-white 
                hover:bg-[#0A7986]
                hover:text-white'
                >Get Started</button>
            </div>
        </div>
        <div className='w-full md:w-1/2 p-10 flex gap-3 flex-wrap'>
            <div className="w-full md:w-1/2 flex flex-col md:self-stretch gap-5 ml-[35px] md:ml-0 flex-1">
                <div className="h-[150px] bg-gray-600" />
                <div className="h-[337px] bg-gray-400" />
                <div className="h-[237px] bg-gray-800" />
            </div>
            <div className="w-full md:w-1/2 flex flex-col md:self-stretch ml-2.5 gap-4 md:ml-0 flex-1">
                <div className="h-[342px] bg-gray-400" />
                <div className="h-[342px] bg-gray-700" />
                <div className="h-[50px] bg-gray-600" />
            </div>
        </div>
    </div>
  )
}

export default LandingPage