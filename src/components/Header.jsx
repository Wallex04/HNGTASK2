// import React from 'react'
// import logo from '../assets/logo.png'
// import { CiSearch } from "react-icons/ci";
// import { GoHome } from "react-icons/go";
// import { CiShoppingBasket } from "react-icons/ci";
// import { Link } from 'react-router-dom';
// import imgNav from '../assets/navImg.png'
// import { CiShoppingCart } from "react-icons/ci";
// import { IoNotifications } from "react-icons/io5";


// const Header = () => {
//   return (
//     <div className='mx-20 font-montserrat'>
//       <nav className='hidden lg:flex items-center justify-between gap-20 pt-6'>
//         <Link to='/' className='flex items-center gap-2'>
//         <img src={logo} alt="" />
//         <h1>Market Place</h1>
//         </Link>
//         <div className='text-center relative rounded-md w-[250px] lg:w-[360px]'>
//     <CiSearch className='absolute right-3 lg:right-6 top-4'/>
//     <input className='bg-[#F8F9FA] w-full py-3 pl-3 lg:pl-4 outline-none' type="text" placeholder='Search'/>
//   </div>
//   <div className='flex items-center gap-20'>
//     <div>
//     <Link className='flex flex-col items-center' to='/'><GoHome size={30}/> Home</Link>
//     </div>
//     <div>
//     <Link className='flex flex-col items-center' to='/shop'><CiShoppingBasket size={30}/> Shop center</Link>
//     </div>
//     <div>
//     <Link className='flex flex-col items-center' to='/cart'><CiShoppingCart size={30}/> Cart</Link>
//     </div>
//     <div>
//     <Link className='flex flex-col items-center' to='/notification'><IoNotifications size={30}/> Notifications</Link>
//     </div>
//     <img src={imgNav} alt="" />
//   </div>
//       </nav>
//     </div>
//   )
// }

// export default Header


import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { CiSearch } from "react-icons/ci";
import { GoHome } from "react-icons/go";
import { CiShoppingBasket, CiShoppingCart } from "react-icons/ci";
import { IoNotifications } from "react-icons/io5";
import { Link } from 'react-router-dom';
import imgNav from '../assets/navImg.png';
import { FiMenu } from "react-icons/fi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='font-montserrat'>
      <nav className='flex items-center justify-between px-4 lg:px-20 py-6'>
        <Link to='/' className='flex items-center gap-2 mx-auto lg:mx-0'>
          <img src={logo} alt="Market Place Logo" className='w-10 h-10 lg:w-auto lg:h-auto' />
          <h1 className='hidden lg:block'>Market Place</h1>
        </Link>
        <div className='lg:flex items-center gap-20 hidden'>
          <div className='text-center relative rounded-md w-[250px] lg:w-[360px]'>
            <CiSearch className='absolute right-3 lg:right-6 top-4'/>
            <input className='bg-[#F8F9FA] w-full py-3 pl-3 lg:pl-4 outline-none' type="text" placeholder='Search'/>
          </div>
          <div className='flex items-center gap-10'>
            <Link className='flex flex-col items-center' to='/'><GoHome size={30}/> Home</Link>
            <Link className='flex flex-col items-center' to='/shop'><CiShoppingBasket size={30}/> Shop center</Link>
            <Link className='flex flex-col items-center' to='/cart'><CiShoppingCart size={30}/> Cart</Link>
            <Link className='flex flex-col items-center' to='/notification'><IoNotifications size={30}/> Notifications</Link>
            <img src={imgNav} alt="User" className='w-10 h-10 rounded-full'/>
          </div>
        </div>
        <button className='lg:hidden' onClick={() => setMenuOpen(!menuOpen)}>
          <FiMenu size={30} />
        </button>
      </nav>

      {menuOpen && (
        <div className='lg:hidden flex flex-col items-center bg-white py-4'>
          <div className='text-center relative rounded-md w-[250px] mb-4'>
            <CiSearch className='absolute right-3 top-4'/>
            <input className='bg-[#F8F9FA] w-full py-3 pl-3 outline-none' type="text" placeholder='Search'/>
          </div>
          <Link className='flex items-center gap-2 my-2' to='/'><GoHome size={20}/> Home</Link>
          <Link className='flex items-center gap-2 my-2' to='/shop'><CiShoppingBasket size={20}/> Shop center</Link>
          <Link className='flex items-center gap-2 my-2' to='/cart'><CiShoppingCart size={20}/> Cart</Link>
          <Link className='flex items-center gap-2 my-2' to='/notification'><IoNotifications size={20}/> Notifications</Link>
          <img src={imgNav} alt="User" className='w-10 h-10 rounded-full mt-4'/>
        </div>
      )}
    </div>
  )
}

export default Header;

