
// import React from 'react';
// import { FaStar, FaRegStar, FaTrash } from "react-icons/fa";
// import Josh from '../assets/joshStripes.png';
// import { TbArrowBackUp } from "react-icons/tb";
// import dropGown from '../assets/drogGown.png';
// import vintage from '../assets/vintage.png';
// import paypal from '../assets/pal.png';
// import visa from '../assets/visa.png';
// import Master from '../assets/mastercard.png';

// import Modalcheckout from '../components/ModalCheckout'

// const dummyData = [
//   {
//     img: vintage,
//     title: 'Vintage Shirt',
//     description: 'Vintage short sleeve female shirt',
//     rating: 4.0,
//     price: 'NGN 35,000'
//   },
//   {
//     img: Josh,
//     title: 'Josh Stripes kid’s Top',
//     description: 'Multi-color Long sleeve male children top',
//     rating: 4.0,
//     price: 'NGN 30,000'
//   },
//   {
//     img: dropGown,
//     title: 'Drop Gown',
//     description: 'Flower Lady’s drop grown',
//     rating: 4.0,
//     price: 'NGN 50,000'
//   }
// ];

// const Cart = () => {

//   const renderStars = (rating) => {
//     const stars = [];
//     for (let i = 0; i < 5; i++) {
//       if (i < Math.floor(rating)) {
//         stars.push(<FaStar key={i} className='text-[#EEAB00]' />);
//       } else {
//         stars.push(<FaRegStar key={i} className='text-[#EEAB00]' />);
//       }
//     }
//     return stars;
//   };

//   return (
//     <div className='container mx-20 p-5'>
//        <div className='flex justify-between items-center mt-6'>
//       <div className="mb-8 w-[150px]">
//       <h1 className='border-b-8 border-purple-300 text-[#4F4F4F] text-[28px] font-semibold'>Cart Corner</h1>
//       </div>

//       <h1  className='flex item center gap-1 font-bold text-[20px]'><TbArrowBackUp size={34}/> Back to Shopping</h1>
//       </div>
//       <div className='grid grid-cols-1 lg:grid-cols-4 gap-10'>
//         <div className='col-span-3 shadow-lg'>
//           <div className='mb-4'>
//             <div className='grid grid-cols-12 p-2 bg-gray-200 py-3 rounded-t-xl px-6 font-bold text-gray-700'>
//               <div className='col-span-6'>Item Details</div>
//               <div className='col-span-3 text-center'>Quantity</div>
//               <div className='col-span-3 text-right'>Price</div>
//             </div>
//             {dummyData.map((item, index) => (
//               <div key={index} className='grid grid-cols-12 items-center px-4 rounded-lg p-4 mb-4'>
//                 <div className='col-span-6 flex items-center'>
//                   <img src={item.img} alt={item.title} className='w-60 h-40 object-cover rounded-lg mr-4' />
//                   <div className='flex-1 items-start justify-start'>
//                     <h1 className='text-lg font-bold'>{item.title}</h1>
//                     <p className='text-sm'>{item.description}</p>
//                     <div className='flex items-center'>
//                     <span className='ml-2 text-gray-600'>{item.rating}</span>
//                       {renderStars(item.rating)}    
//                     </div>
//                     <button className='text-red-600 flex items-center mt-2'>
//                       <FaTrash className='mr-1' />
//                       Remove Item
//                     </button>
//                   </div>
//                 </div>
//                 <div className='col-span-3 flex items-center gap-5 justify-center'>
//                   <button className='bg-gray-300 px-5 py-2 text-[24px] rounded font-bold'>-</button>
//                   <span className='mx-2 text-[24px] font-bold'>1</span>
//                   <button className='bg-gray-300 px-5 py-2 text-[24px] rounded font-bold'>+</button>
//                 </div>
//                 <div className='col-span-3 text-right'>
//                   <h1 className='text-[24px] font-bold'>{item.price}</h1>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div>
//         <div className='col-span-1 h-[370px] w-[350px] p-4 rounded-lg shadow-lg'>
//           <h2 className='text-lg font-bold my-4'>Order Summary</h2>
//           <hr />
//           <div className='flex justify-between items-start gap-2 mt-3'>
//           <p className='text-sm mb-2 font-bold'>Delivery Charges:</p>
//           <p className='text-sm text-blue-500 underline mb-4 w-[140px]'>Add your Delivery address at checkout to see delivery charge</p>
//           </div>
//           <div className='flex justify-between items-center mb-3'>
//           <p className='text-sm mb-2 font-bold'>Subtotal:</p>
//           <p className='text-2xl font-bold mb-2 pr-8 pl-3'>N 115,000</p>
//           </div>
//           <div className='flex justify-between items-center'>
//           <p className='text-sm mb-2 font-bold'>Total:</p>
//           <p className='text-2xl font-bold mb-4 pr-8 pl-3'>N 115,000</p>
//           </div>

//           <div className='flex justify-center items-center gap-2 mb-5'>
//             <div className='w-16 h-2 text-black'></div>
//           <p className='text-sm mb-2'>We accept:</p>
//           <div className='w-16 h-2 text-black'></div>
//           </div>
//           <div className='flex justify-center items-center my-6 space-x-2'>
//             <img src={paypal} alt='PayPal' className='w-[42px] h-[43px]' />
//             <img src={visa} alt='Visa' className='w-[42px] h-[43px]' />
//             <img src={Master} alt='MasterCard' className='w-[42px] h-[43px]' />
//           </div>

//         </div>

//         <button className='bg-[#A8DADC] w-full text-[22px] mt-8 text-white px-4 py-3 rounded-md block mx-auto'>Continue to Check out</button>
//         </div>

//       </div>

//       <Modalcheckout/>
//     </div>
//   );
// };

// export default Cart;


// import React from 'react';
// import { FaStar, FaRegStar, FaTrash } from 'react-icons/fa';
// import Josh from '../assets/joshStripes.png';
// import { TbArrowBackUp } from 'react-icons/tb';
// import dropGown from '../assets/drogGown.png';
// import vintage from '../assets/vintage.png';
// import paypal from '../assets/pal.png';
// import visa from '../assets/visa.png';
// import Master from '../assets/mastercard.png';

// import Modalcheckout from '../components/ModalCheckout';

// const dummyData = [
//   {
//     img: vintage,
//     title: 'Vintage Shirt',
//     description: 'Vintage short sleeve female shirt',
//     rating: 4.0,
//     price: 'NGN 35,000'
//   },
//   {
//     img: Josh,
//     title: 'Josh Stripes kid’s Top',
//     description: 'Multi-color Long sleeve male children top',
//     rating: 4.0,
//     price: 'NGN 30,000'
//   },
//   {
//     img: dropGown,
//     title: 'Drop Gown',
//     description: 'Flower Lady’s drop grown',
//     rating: 4.0,
//     price: 'NGN 50,000'
//   }
// ];

// const Cart = () => {
//   const renderStars = (rating) => {
//     const stars = [];
//     for (let i = 0; i < 5; i++) {
//       if (i < Math.floor(rating)) {
//         stars.push(<FaStar key={i} className='text-[#EEAB00]' />);
//       } else {
//         stars.push(<FaRegStar key={i} className='text-[#EEAB00]' />);
//       }
//     }
//     return stars;
//   };

//   return (
//     <div className='container mx-auto p-5'>
//       <div className='flex justify-between items-center mt-6'>
//         <div className="mb-8">
//           <h1 className='border-b-8 border-purple-300 text-[#4F4F4F] text-[28px] font-semibold'>Cart Corner</h1>
//         </div>
//         <h1 className='flex items-center gap-1 font-bold text-[20px]'>
//           <TbArrowBackUp size={34} /> Back to Shopping
//         </h1>
//       </div>
//       <div className='grid grid-cols-1 lg:grid-cols-4 gap-10'>
//         <div className='col-span-3 shadow-lg'>
//           <div className='mb-4'>
//             <div className='grid grid-cols-12 p-2 bg-gray-200 py-3 rounded-t-xl px-6 font-bold text-gray-700'>
//               <div className='col-span-6'>Item Details</div>
//               <div className='col-span-3 text-center'>Quantity</div>
//               <div className='col-span-3 text-right'>Price</div>
//             </div>
//             {dummyData.map((item, index) => (
//               <div key={index} className='grid grid-cols-1 md:grid-cols-12 items-center px-4 py-4 mb-4 bg-white shadow-md rounded-lg'>
//                 <div className='md:col-span-6 flex items-center mb-4 md:mb-0'>
//                   <img src={item.img} alt={item.title} className='w-40 h-40 object-cover rounded-lg mr-4' />
//                   <div className='flex-1'>
//                     <h1 className='text-lg font-bold'>{item.title}</h1>
//                     <p className='text-sm'>{item.description}</p>
//                     <div className='flex items-center'>
//                       <span className='ml-2 text-gray-600'>{item.rating}</span>
//                       {renderStars(item.rating)}
//                     </div>
//                     <button className='text-red-600 flex items-center mt-2'>
//                       <FaTrash className='mr-1' /> Remove Item
//                     </button>
//                   </div>
//                 </div>
//                 <div className='md:col-span-3 flex items-center gap-5 justify-center mb-4 md:mb-0'>
//                   <button className='bg-gray-300 px-5 py-2 text-[24px] rounded font-bold'>-</button>
//                   <span className='mx-2 text-[24px] font-bold'>1</span>
//                   <button className='bg-gray-300 px-5 py-2 text-[24px] rounded font-bold'>+</button>
//                 </div>
//                 <div className='md:col-span-3 text-right'>
//                   <h1 className='text-[24px] font-bold'>{item.price}</h1>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className='col-span-1'>
//           <div className='shadow-lg p-4 rounded-lg'>
//             <h2 className='text-lg font-bold my-4'>Order Summary</h2>
//             <hr />
//             <div className='flex justify-between items-start gap-2 mt-3'>
//               <p className='text-sm mb-2 font-bold'>Delivery Charges:</p>
//               <p className='text-sm text-blue-500 underline mb-4 w-[140px]'>Add your Delivery address at checkout to see delivery charge</p>
//             </div>
//             <div className='flex justify-between items-center mb-3'>
//               <p className='text-sm mb-2 font-bold'>Subtotal:</p>
//               <p className='text-2xl font-bold mb-2 pr-8 pl-3'>N 115,000</p>
//             </div>
//             <div className='flex justify-between items-center'>
//               <p className='text-sm mb-2 font-bold'>Total:</p>
//               <p className='text-2xl font-bold mb-4 pr-8 pl-3'>N 115,000</p>
//             </div>

//             <div className='flex justify-center items-center gap-2 mb-5'>
//               <div className='w-16 h-2 text-black'></div>
//               <p className='text-sm mb-2'>We accept:</p>
//               <div className='w-16 h-2 text-black'></div>
//             </div>
//             <div className='flex justify-center items-center my-6 space-x-2'>
//               <img src={paypal} alt='PayPal' className='w-[42px] h-[43px]' />
//               <img src={visa} alt='Visa' className='w-[42px] h-[43px]' />
//               <img src={Master} alt='MasterCard' className='w-[42px] h-[43px]' />
//             </div>
//           </div>

//           <button className='bg-[#A8DADC] w-full text-[22px] mt-8 text-white px-4 py-3 rounded-md block mx-auto'>Continue to Check out</button>
//         </div>
//       </div>

//       <Modalcheckout />
//     </div>
//   );
// };

// export default Cart;



import React from 'react';
import { FaStar, FaRegStar, FaTrash } from "react-icons/fa";
import Josh from '../assets/joshStripes.png';
import { TbArrowBackUp } from "react-icons/tb";
import dropGown from '../assets/drogGown.png';
import vintage from '../assets/vintage.png';
import paypal from '../assets/pal.png';
import visa from '../assets/visa.png';
import Master from '../assets/mastercard.png';

import Modalcheckout from '../components/ModalCheckout'
import { Link } from 'react-router-dom';

const dummyData = [
  {
    img: vintage,
    title: 'Vintage Shirt',
    description: 'Vintage short sleeve female shirt',
    rating: 4.0,
    price: 'NGN 35,000'
  },
  {
    img: Josh,
    title: 'Josh Stripes kid’s Top',
    description: 'Multi-color Long sleeve male children top',
    rating: 4.0,
    price: 'NGN 30,000'
  },
  {
    img: dropGown,
    title: 'Drop Gown',
    description: 'Flower Lady’s drop grown',
    rating: 4.0,
    price: 'NGN 50,000'
  }
];

const Cart = () => {

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < Math.floor(rating)) {
        stars.push(<FaStar key={i} className='text-[#EEAB00]' />);
      } else {
        stars.push(<FaRegStar key={i} className='text-[#EEAB00]' />);
      }
    }
    return stars;
  };

  return (
    <div className='container max-w-full mx-auto p-5'>
      <div className='flex flex-col md:flex-row justify-between items-center mt-6'>
        <div className="mb-8 w-full md:w-auto">
          <h1 className='border-b-8 border-purple-300 text-[#4F4F4F] text-[28px] font-semibold'>Cart Corner</h1>
        </div>
        <Link to='/shop' className='flex items-center gap-1 font-bold text-[20px] mt-4 md:mt-0'>
          <TbArrowBackUp size={34}/> Back to Shopping
        </Link>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-4 gap-10'>
        <div className='col-span-1 lg:col-span-3 shadow-lg'>
          <div className='mb-4'>
            <div className='grid grid-cols-12 p-2 bg-gray-200 py-3 rounded-t-xl px-6 font-bold text-gray-700'>
              <div className='col-span-6'>Item Details</div>
              <div className='col-span-3 text-center'>Quantity</div>
              <div className='col-span-3 text-right'>Price</div>
            </div>
            {dummyData.map((item, index) => (
              <div key={index} className='grid grid-cols-1 md:grid-cols-12 items-center px-4 py-4 mb-4 bg-white shadow-md rounded-lg'>
                <div className='md:col-span-6 flex flex-col md:flex-row items-start md:items-center mb-4 md:mb-0'>
                  <img src={item.img} alt={item.title} className='w-full md:w-40 h-40 object-cover rounded-lg mr-4' />
                  <div className='flex-1 mt-4 md:mt-0'>
                    <h1 className='text-lg font-bold'>{item.title}</h1>
                    <p className='text-sm'>{item.description}</p>
                    <div className='flex items-center'>
                      <span className='ml-2 text-gray-600'>{item.rating}</span>
                      {renderStars(item.rating)}    
                    </div>
                    <button className='text-red-600 flex items-center mt-2'>
                      <FaTrash className='mr-1' />
                      Remove Item
                    </button>
                  </div>
                </div>
                <div className='md:col-span-3 flex items-center gap-5 justify-center mb-4 md:mb-0'>
                  <button className='bg-gray-300 px-5 py-2 text-[24px] rounded font-bold'>-</button>
                  <span className='mx-2 text-[24px] font-bold'>1</span>
                  <button className='bg-gray-300 px-5 py-2 text-[24px] rounded font-bold'>+</button>
                </div>
                <div className='md:col-span-3 text-right'>
                  <h1 className='text-[24px] font-bold'>{item.price}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='col-span-1'>
          <div className='shadow-lg p-4 rounded-lg'>
            <h2 className='text-lg font-bold my-4'>Order Summary</h2>
            <hr />
            <div className='flex flex-col gap-2 mt-3'>
              <div className='flex justify-between items-start'>
                <p className='text-sm font-bold'>Delivery Charges:</p>
                <p className='text-sm text-blue-500 underline w-[140px]'>Add your Delivery address at checkout to see delivery charge</p>
              </div>
              <div className='flex justify-between items-center'>
                <p className='text-sm font-bold'>Subtotal:</p>
                <p className='text-2xl font-bold pr-8 pl-3'>N 115,000</p>
              </div>
              <div className='flex justify-between items-center'>
                <p className='text-sm font-bold'>Total:</p>
                <p className='text-2xl font-bold mb-4 pr-8 pl-3'>N 115,000</p>
              </div>
              <div className='flex justify-center items-center gap-2 mb-5'>
                <div className='w-16 h-2'></div>
                <p className='text-sm'>We accept:</p>
                <div className='w-16 h-2'></div>
              </div>
              <div className='flex justify-center items-center my-6 space-x-2'>
                <img src={paypal} alt='PayPal' className='w-[42px] h-[43px]' />
                <img src={visa} alt='Visa' className='w-[42px] h-[43px]' />
                <img src={Master} alt='MasterCard' className='w-[42px] h-[43px]' />
              </div>
            </div>
          </div>

          <button className='bg-[#A8DADC] w-full text-[22px] mt-8 text-white px-4 py-3 rounded-md block mx-auto'>Continue to Check out</button>
        </div>
      </div>

      <Modalcheckout/>
    </div>
  );
};

export default Cart;
