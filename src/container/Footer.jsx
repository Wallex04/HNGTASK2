import React from 'react'
import logo from '../assets/logo.png'


const Footer = () => {
  return (
    <div className='lg:mx-20 font-montserrat mt-12 py-10'>
      <footer className='flex flex-col lg:flex-row justify-between items-center font-monserat'>
        <div className='mb-4 lg:mb-0'>
        <div className=' items-center gap-2 pb-3 '>
        <img src={logo} alt="" />
        <h1 className='text-[24px] font-semibold text-[#171725] font-montserrat'>Market Paddy</h1>
        </div>
          <p className='text-[#171725] font-semibold pb-2'>c 2020 - 2023 Market paddy</p>
         <p className='text-[#171725] font-semibold'>All right reserved</p> 
        </div>

        <div className='flex flex-col gap-4 lg:flex-row lg:gap-40 items-center'>
          <div>
            <h1 className='text-[#171725] font-semibold text-[24px] pb-2'>Ads</h1>
            <p className='text-[#171725] font-medium pb-2'>Ads service</p>
          </div>
          <div>
            <h1 className='text-[#171725] font-semibold text-[24px] pb-2'>Company</h1>
            <p className='text-[#171725] font-medium pb-2'>About us</p>
            <p className='text-[#171725] font-medium pb-2'>FAQS</p>
            <p className='text-[#171725] font-semibold'>Contact us</p>
          </div>
          <div>
            <h1 className='text-[#171725] font-semibold text-[24px] pb-2'>Follow us</h1>
            <p className='text-[#171725] font-medium pb-2'>Twitter</p>
            <p className='text-[#171725] font-semibold pb-2'>Facebook</p>
            <p className='text-[#171725] font-medium pb-2'>Linkedin</p>
            <p className='text-[#171725] font-semibold pb-2'>Instagram</p>
          </div>
          <div>
            <h1 className='text-[#171725] font-semibold text-[24px] pb-2'>Language</h1>
            <p className='text-[#171725] font-medium pb-2'>English</p>
            <p className='text-[#171725] font-medium pb-2'>Espanyol</p>
            <p className='text-[#171725] font-medium pb-2'>Danish</p>
            <p className='text-[#171725] font-medium pb-2'>Francais</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
