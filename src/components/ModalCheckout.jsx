// import React from 'react';
// import card from '../assets/debitCard.png'
// import { IoIosArrowDown } from "react-icons/io";
// import { FaRegEyeSlash } from "react-icons/fa";
// import profileLogo from '../assets/profile-tick.png'
// import cardAtm from '../assets/card.png'
// import ThreeDots from '../assets/Group 2 (1).png'
// import { TbArrowBackUp } from "react-icons/tb";

// const ModalCheckout = () => {
//   return (
//     <div className='shadow-lg w-[800px] mx-auto p-8'>
//         <div className='p-4 rounded-md shadow-lg flex justify-center items-center w-[358px] mx-auto mt-6'>
//             <img src={card} alt="" />
//         </div>

//         <div className='w-[545px] mt-6 mx-auto'>
//         <div className='flex w-full justify-between items-center'>
//             <h1 className='text-[24px] text-[#525252]'>Use saved Cards:</h1>
//             <div className='flex justify-between items-center w-[260px] px-3 bg-gray-300 py-2 rounded-md'>
//                 <h1>MasterCard</h1>
//                 <IoIosArrowDown/>
//             </div>
//         </div>

//         <div className='flex flex-col mt-4'>
//             <label className='mb-2'>Name on card:</label>
//             <div className='relative '>
//                 <input className='bg-gray-200 w-full py-3 rounded-md pl-2' type="text" placeholder='Esther Howard' />
//                 <img className='absolute right-2 top-3' src={profileLogo} alt="" />
//             </div>
//         </div>

//         <div className='flex flex-col mt-4'>
//             <label className='mb-2'>card Number:</label>
//             <div className='relative '>
//                 <input className='bg-gray-200 w-full py-3 rounded-md pl-2' type="text" placeholder='123-456-789-' />
//                 <img className='absolute right-2 top-3' src={cardAtm} alt="" />
//             </div>
//         </div>

//             <div className='flex justify-between w-full items-center'>
//         <div className='flex flex-col mt-4'>
//             <label className='mb-2'>Expiry Date:</label>
//             <div className='relative '>
//                 <input className='bg-gray-200 w-full py-3 rounded-md pl-2' type="text" placeholder='MM/YY' />
//                 <img className='absolute right-2 top-3' src={cardAtm} alt="" />
//             </div>
//         </div>
//         <div className='flex flex-col mt-4'>
//             <label className='mb-2'>CCV</label>
//             <div className='relative '>
//                 <input className='bg-gray-200 w-full py-3 rounded-md pl-2' type="text" placeholder='' />
//                 <img className='absolute left-2 top-5' src={ThreeDots} alt="" />
//                 <FaRegEyeSlash className='absolute right-2 top-3'size={20}/>
//             </div>
//         </div>

//         </div>

//         </div>
//             <div className='w-[545px] rounded-md py-3 my-7 bg-[#A8DADC] text-center mx-auto'>
//                 <button className='text-white text-[20px] text-center'>Proceed</button>
//             </div>
//         <div className='flex justify-center items-center gap-2 mt-5 mb-3'>
//             <TbArrowBackUp size={25}/>
//             <h1 className='text-[20px] text-[#EB5757]'>Change my mind</h1>
//         </div>

//     </div>
//   )
// }

// export default ModalCheckout;


import React from 'react';
import card from '../assets/debitCard.png';
import { IoIosArrowDown } from "react-icons/io";
import { FaRegEyeSlash } from "react-icons/fa";
import profileLogo from '../assets/profile-tick.png';
import cardAtm from '../assets/card.png';
import ThreeDots from '../assets/Group 2 (1).png';
import { TbArrowBackUp } from "react-icons/tb";
import { Link } from 'react-router-dom';

const ModalCheckout = () => {
  return (
    <div className='shadow-lg w-full max-w-lg mx-auto p-8'>
      <div className='p-4 rounded-md shadow-lg flex justify-center items-center w-full max-w-md mx-auto mt-6'>
        <img src={card} alt="Card" />
      </div>

      <div className='w-full max-w-md mt-6 mx-auto'>
        <div className='flex w-full justify-between items-center'>
          <h1 className='text-[24px] text-[#525252]'>Use saved Cards:</h1>
          <div className='flex justify-between items-center w-[260px] px-3 bg-gray-300 py-2 rounded-md'>
            <h1>MasterCard</h1>
            <IoIosArrowDown />
          </div>
        </div>

        <div className='flex flex-col mt-4'>
          <label className='mb-2'>Name on card:</label>
          <div className='relative'>
            <input className='bg-gray-200 w-full py-3 rounded-md pl-2' type="text" placeholder='Esther Howard' />
            <img className='absolute right-2 top-3' src={profileLogo} alt="Profile Logo" />
          </div>
        </div>

        <div className='flex flex-col mt-4'>
          <label className='mb-2'>Card Number:</label>
          <div className='relative'>
            <input className='bg-gray-200 w-full py-3 rounded-md pl-2' type="text" placeholder='123-456-789-' />
            <img className='absolute right-2 top-3' src={cardAtm} alt="Card ATM" />
          </div>
        </div>

        <div className='flex justify-between w-full items-center'>
          <div className='flex flex-col mt-4'>
            <label className='mb-2'>Expiry Date:</label>
            <div className='relative'>
              <input className='bg-gray-200 w-full py-3 rounded-md pl-2' type="text" placeholder='MM/YY' />
              <img className='absolute right-2 top-3' src={cardAtm} alt="Card ATM" />
            </div>
          </div>
          <div className='flex flex-col mt-4'>
            <label className='mb-2'>CCV</label>
            <div className='relative'>
              <input className='bg-gray-200 w-full py-3 rounded-md pl-2' type="text" />
              <img className='absolute left-2 top-5' src={ThreeDots} alt="Three Dots" />
              <FaRegEyeSlash className='absolute right-2 top-3' size={20} />
            </div>
          </div>
        </div>
      </div>

      <div className='w-full max-w-md rounded-md py-3 my-7 bg-[#A8DADC] text-center mx-auto'>
        <button className='text-white text-[20px]'>Proceed</button>
      </div>
      <div to className='flex justify-center items-center gap-2 mt-5 mb-3'>
        <TbArrowBackUp size={25} />
        <Link to='/shop' className='text-[20px] text-[#EB5757]'>Change my mind</Link>
      </div>
    </div>
  )
}

export default ModalCheckout;
