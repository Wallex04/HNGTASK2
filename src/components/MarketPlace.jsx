
import React from 'react';
import T_shirt from '../assets/t-shirt.png';
import BabyGown from '../assets/babyGown.png';
import Josh from '../assets/joshStripes.png';
import DropDown from '../assets/Dropdown.png';
import dropGown from '../assets/drogGown.png';
import vintage from '../assets/vintage.png';
import { FaStar, FaRegStar } from 'react-icons/fa';

const MarketPlace = () => {
    const markets = [
        { img: T_shirt, text: 'T-Shirt', paragraph: 'Multi-color Long sleeve shirt', star: '4.0', price: 'NGN 50,000', button: 'Add' },
        { img: BabyGown, text: 'Baby Gown', paragraph: 'Colored child grown', star: '4.0', price: 'NGN 20,000', button: 'Add' },
        { img: Josh, text: 'Josh stripes kids Top', paragraph: 'Multi-color Long sleeve male children top', star: '4.0', price: 'NGN 30,000', button: 'Add' },
        { img: DropDown, text: 'Baby pullover jacket', paragraph: 'Jean child jacket', star: '4.0', price: 'NGN 15,000', button: 'Add' },
        { img: dropGown, text: 'Drop Gown', paragraph: 'Flower Lady’s drop grown', star: '4.0', price: 'NGN 50,000', button: 'Add' },
        { img: vintage, text: 'Vintage Shirt', paragraph: 'Vintage short sleeve female shirt', star: '4.0', price: 'NGN 35,000', button: 'Add' }
    ];

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
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {markets.map((market, index) => (
                <div key={index} className='flex flex-col mb-3 border border-gray-500 rounded-lg'>
                    <div>
                        <img className='w-full h-48 object-cover rounded-t-lg' src={market.img} alt="product" />
                    </div>
                    <div className='flex flex-col mb-2 px-5 mt-4'>
                        <h1 className='text-[22px] font-bold'>{market.text}</h1>
                        <p className='text-[14px] mb-3'>{market.paragraph}</p>
                        <div className='flex gap-1 items-center mb-3'>
                            <p className='text-[#1D204D] font-bold'>{market.star}</p>
                            <div className='flex gap-1 items-center'>
                                {renderStars(market.star)}
                            </div>
                        </div>
                        <div className='flex justify-between items-center'>
                            <h1 className='font-bold text-[#1D3557] text-[20px] lg:text-[24px]'>{market.price}</h1>
                            <button className='bg-[#CCE7EB] px-4 py-1 lg:px-5 lg:py-2 font-bold rounded-3xl'>{market.button}</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default MarketPlace;
