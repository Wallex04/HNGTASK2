

import React from 'react'
import Header from '../components/Header'
import arrow from '../assets/Vector (Stroke).png'
import { LuListFilter } from "react-icons/lu";
import trendsImg from '../assets/trendsImg.png'
import phone from '../assets/Vectary texture.png'
import { Link } from 'react-router-dom'
import MarketPlace from '../components/MarketPlace';


const Home = () => {
  return (
    <div className='font-montserrat mx-4 lg:mx-20'>
      <Header/>

      <div className='flex flex-col lg:flex-row gap-8 mt-10'>
        <div className='hidden lg:flex flex-col w-full lg:w-[280px]'>
          <div className='bg-[#1D3557] py-6 rounded-t-xl'>
            <h1 className='text-center text-white'>Quick Market</h1>
          </div>
          <div className='p-6 rounded-md shadow-lg'>
            <h1 className='flex items-center justify-between py-3'>
              Men Wear
              <img src={arrow} alt="" />
            </h1>
            <h1 className='flex items-center justify-between py-3'>
              Lady's Wear
              <img src={arrow} alt="" />
            </h1>
            <h1 className='flex items-center justify-between py-3'>
              Children's Wear
              <img src={arrow} alt="" />
            </h1>
            <h1 className='flex items-center justify-between py-3'>
              Shirt Wear
              <img src={arrow} alt="" />
            </h1>
            <h1 className='flex items-center justify-between py-3'>
              More
              <img src={arrow} alt="" />
            </h1>
          </div>
        </div>

        <div className='w-full lg:w-[1100px] h-[160px] lg:h-[300px] bg-cover rounded-lg bg-center' style={{ backgroundImage: `url(${trendsImg})`}}>
          <h1 className='hidden lg:block text-white lg:p-2 font-semibold'>Trends</h1>
        </div>
      </div>

      <div className='flex flex-col lg:flex-row gap-8'>
        <div className='bg-[#F0DC96] w-full lg:w-[280px] h-[370px] p-6 rounded-md mt-16'>
          <img className='mx-auto' src={phone} alt="" />
          <h1 className='text-center'>Show the world what <br/> you do.</h1>
        </div>

        <div className='p-6 lg:p-10 shadow-lg w-full lg:w-[1100px] rounded-lg'>
          <div className="mb-8">
            <h1 className='border-b-8 border-purple-300 text-[#4F4F4F] text-[24px] lg:text-[32px] font-semibold'>Marketplace</h1>
          </div>

          <div className='flex flex-col lg:flex-row justify-between items-center mb-8'>
            <div className='flex gap-2 lg:gap-8 items-center mb-4 lg:mb-0'>
              <Link className='px-4 lg:px-7 py-1 bg-[#BDBDBD] rounded-3xl text-center font-semibold'>All</Link>
              <Link className='px-4 lg:px-7 py-1 bg-[#BDBDBD] rounded-3xl text-center font-semibold'>Male</Link>
              <Link className='px-4 lg:px-7 py-1 bg-[#BDBDBD] rounded-3xl text-center font-semibold'>Kids</Link>
              <Link className='px-4 lg:px-7 py-1 bg-[#BDBDBD] rounded-3xl text-center font-semibold'>Female</Link>
            </div>
            <div>
              <h1 className='flex gap-3 items-center'>
                Filter
                <LuListFilter className='border border-gray-400 ' size={30} />
              </h1>
            </div>
          </div>

          <MarketPlace/>
        </div>
      </div>
    </div>
  )
}

export default Home
