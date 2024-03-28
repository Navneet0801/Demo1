// eslint-disable-next-line no-unused-vars
import React from 'react'

const Help = () => {
  return (
    <div className='flex gap-20 w-full px-40 py-20'>
        <div className='w-1/2 flex bg-[#E5E5E5] rounded-lg'>
            <div className='w-1/2'>
                <img src="/images/white.jpg" alt="image" className='my-10 mx-5 px-5 h-[30vh] ' />
            </div>
            <div className=' w-1/2 p-10'>
                <div className='text-3xl font-bold'>Help Center</div>
                <div className='pt-5 text-xl'>Got questions? We have got answers. Check out our for more information.</div>
            </div>
        </div>
        <div className='w-1/2 flex bg-[#E5E5E5] rounded-lg'>
            <div className='w-1/2'>
                <img src="/images/white.jpg" alt="image" className='my-10 mx-5 px-5 h-[30vh] ' />
            </div>
            <div className=' w-1/2 p-10'>
                <div className='text-3xl font-bold'>Ready to Earn?</div>
                <div className='pt-5 text-xl'>Install the app and upload the screenshot.</div>
            </div>
        </div>
    </div>
  )
}

export default Help