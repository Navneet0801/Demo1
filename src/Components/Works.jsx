// eslint-disable-next-line no-unused-vars
import React from 'react'

const Works = () => {
  return (
    <div className='relative m-10'>
        <div className='absolute left-[40vw] md:text-6xl font-bold text-3xl whitespace-nowrap'>How it works</div>
        <div>
            <div className='flex flex-row  px-80 my-10 pt-28 m-10 justify-between'>
                <div className='flex flex-col items-center'>
                    <img src="images/download_app.png" alt="staff_one" className="w-[118px] object-cover" />
                    <h2 className='font-bold'>Download App</h2>
                    <p className='px-5'>Our platform allows you to earn money by simply installing apps  </p>
                </div>
                <div className='flex flex-col items-center'>
                    <img src="images/file.png" alt="stackofmoney" className="w-[96px] pt-4 object-cover" />
                    <h2 className='font-bold'>Upload Screenshot</h2>
                    <p className='px-5'>Take a screenshot as proof of app installation and completion </p>
                </div>
                <div className='flex flex-col items-center'> 
                    <img src="images/withdraw.png" alt="image" className="h-[100px] pt-2 grayscale" />
                    <h2 className='font-bold pt-3'>Withdraw Earnings</h2>
                    <p className='px-5'>Get your earning quickly with our fast payout option</p>
                </div>
            </div>
        </div>
        <button className=' 
                absolute
                left-[45vw]
                py-2
                px-7
                font-semibold 
                border-[#FFCC57] 
                rounded-full
                border-2'
                >Get Started</button>
    </div>
  )
}

export default Works