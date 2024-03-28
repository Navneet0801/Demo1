// eslint-disable-next-line no-unused-vars
import React from 'react'

const About = () => {
  return (
    <div className='flex flex-row px-60 py-10 m-10 justify-between'>
        <div className='flex flex-col items-center'>
            <img src="images/img_staff.png" alt="staff_one" className="w-[118px] object-cover" />
            <h2 className='font-bold'>Number of Users</h2>
            <p className='text-5xl font-bold mt-4'>100M+</p>
        </div>
        <div className='flex flex-col items-center'>
            <img src="images/img_stack_of_money.png" alt="stackofmoney" className="w-[96px] pt-4 object-cover" />
            <h2 className='font-bold'>Total Earnings</h2>
            <p className='text-5xl font-bold mt-4'>₹20K</p>
        </div>
        <div className='flex flex-col items-center'>
            <img src="images/img_frame_10.svg" alt="image" className="h-[100px] pt-2" />
            <h2 className='font-bold pt-3'>Customer Satisfaction</h2>
            <p className='text-5xl font-bold mt-4'>20%</p>
        </div>
        <div className='flex flex-col items-center'>
            <img src="images/img_calendar_today.svg" alt="calendartoday" className="h-[76px] w-[76px] mt-7 mb-2" />
            <h2 className='font-bold'>Year In Business</h2>
            <p className='text-5xl font-bold mt-4'>2 yrs</p>
        </div>
    </div>
  )
}

export default About