// eslint-disable-next-line no-unused-vars
import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className='bg-[#000000] flex flex-col md:flex-row h-min-screen md:h-[40vh] text-white w-full'>
            <div className='md:w-1/2 flex gap-10 flex-col items-center py-[6vh] justify-center'>
                <div>+91 12445566</div>
                <div className='flex gap-2'>
                    <img src="images/facebook.svg" alt="facebook" className='cursor-pointer'/>
                    <img src="images/instagram.svg" alt="instagram" className='cursor-pointer'/>
                    <img src="images/github.svg" alt="github" className='cursor-pointer'/>
                    <img src="images/linkedin.svg" alt="linkedin" className='cursor-pointer'/>
                    <img src="images/telegram.svg" alt="telegram" className='cursor-pointer'/>
                </div>
                <a href="#" className='border-2 p-3 rounded-full border-white'>Contact Us</a>
            </div>
            <div className='md:w-1/2 flex px-20 py-10 md:p-10'>
                <div className='w-1/2'>
                    <ul className="flex flex-col items-start gap-[13px]"> 
                        <h2 className='text-2xl py-5'>Important Links</h2>
                        <a href="#">
                            <p>About Us</p>
                        </a>
                        <a href="#">
                            <p>Careers</p>
                        </a>
                        <a href="#">
                            <p>FAQs</p>
                        </a>
                        <a href="#">
                            <p>Teams</p>
                        </a>
                        <a href="#">
                            <p>Contact Us</p>
                        </a>
                    </ul>
                </div>
                <div className='w-1/2'>
                    <ul className="flex flex-col items-start gap-[13px]"> 
                        <h2 className='text-2xl py-5'>Company</h2>
                        <a href="#">
                            <p>About Us</p>
                        </a>
                        <a href="#">
                            <p>Careers</p>
                        </a>
                        <a href="#">
                            <p>FAQs</p>
                        </a>
                        <a href="#">
                            <p>Teams</p>
                        </a>
                        <a href="#">
                            <p>Contact Us</p>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
        <div className="bg-[#000000] p-5 border-t-2 border-white text-white">
            <div className='flex justify-around gap-20'>
                <p>© All Rights Reserved</p>
                <a href='#' className="">Privacy Policy</a>
                <a href='#' className="!font-roboto">Terms of Use</a>
            </div>
        </div>
    </div>
  )
}

export default Footer