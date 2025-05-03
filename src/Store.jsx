import React from 'react'
import { MdLocationOn } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

function Store() {
  return (
    <>
      <h1 className='text-2xl sm:text-3xl font-bold px-4 sm:px-14 mt-5'>Our Exclusive Stores</h1>

      <div className='flex flex-col sm:flex-row gap-3 sm:gap-10 px-4 sm:px-14 mt-5 font-semibold text-sm sm:text-md'>
        <div className='flex items-center'>
          <span className='text-emerald-500 mr-2 text-lg'><MdLocationOn /></span>
          200+ Experience Centres
        </div>
        <div className='flex items-center'>
          <span className='text-emerald-500 mr-2 text-lg'><FaStar /></span>
          4.5+ Star Ratings
        </div>
      </div>

      <div className='bg-gray-200 p-4 sm:p-5 m-4 sm:m-16 mt-6 rounded-lg'>
        <div className='flex h-14 items-center shadow-md border w-full max-w-md mx-auto justify-between bg-white px-4 sm:px-8 rounded-xl'>
          <input
            type="text"
            placeholder='Enter Pincode'
            className='outline-none w-full py-2 px-2'
          />
          <div className='text-xl cursor-pointer text-emerald-500 ml-2'>
            <FaArrowCircleRight />
          </div>
        </div>

        <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center mt-10'>
        
          <div className='w-full max-w-xs bg-white p-4 rounded-lg shadow-md'>
            <h3 className='bg-black text-white text-sm rounded-md w-fit px-2 py-1 mb-2'>GURGAON</h3>
            <h1 className='font-bold text-base'>Cashify Buy, Sell and Repair Mobile Store Sushant Lok</h1>
            <p className='text-sm text-gray-500 mt-3'>GF 133, Sushant Vyapar Kendra, Sushant Lok,...</p>
            <p className='text-sm text-gray-500 mt-2'>Timings 10:00 AM - 09:00 PM</p>
            <p className='flex items-center gap-2 mt-3 text-green-500 font-bold'>View Details <FaArrowRightLong /></p>
          </div>

         
          <div className='w-full max-w-xs bg-white p-4 rounded-lg shadow-md'>
            <h3 className='bg-black text-white text-sm rounded-md w-fit px-2 py-1 mb-2'>GURGAON</h3>
            <h1 className='font-bold text-base'>Cashify Buy, Sell and Repair Mobile Store Sushant Lok</h1>
            <p className='text-sm text-gray-500 mt-3'>GF 133, Sushant Vyapar Kendra, Sushant Lok,...</p>
            <p className='text-sm text-gray-500 mt-2'>Timings 10:00 AM - 09:00 PM</p>
            <p className='flex items-center gap-2 mt-3 text-green-500 font-bold'>View Details <FaArrowRightLong /></p>
          </div>

          
          <div className='w-full max-w-xs bg-white p-4 rounded-lg shadow-md'>
            <h3 className='bg-black text-white text-sm rounded-md w-fit px-2 py-1 mb-2'>GURGAON</h3>
            <h1 className='font-bold text-base'>Cashify Buy, Sell and Repair Mobile Store Sushant Lok</h1>
            <p className='text-sm text-gray-500 mt-3'>GF 133, Sushant Vyapar Kendra, Sushant Lok,...</p>
            <p className='text-sm text-gray-500 mt-2'>Timings 10:00 AM - 09:00 PM</p>
            <p className='flex items-center gap-2 mt-3 text-green-500 font-bold'>View Details <FaArrowRightLong /></p>
          </div>

          
          <div className='w-full max-w-xs bg-white p-4 rounded-lg shadow-md'>
            <h3 className='bg-black text-white text-sm rounded-md w-fit px-2 py-1 mb-2'>GURGAON</h3>
            <h1 className='font-bold text-base'>Cashify Buy, Sell and Repair Mobile Store Sushant Lok</h1>
            <p className='text-sm text-gray-500 mt-3'>GF 133, Sushant Vyapar Kendra, Sushant Lok,...</p>
            <p className='text-sm text-gray-500 mt-2'>Timings 10:00 AM - 09:00 PM</p>
            <p className='flex items-center gap-2 mt-3 text-green-500 font-bold'>View Details <FaArrowRightLong /></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Store;
