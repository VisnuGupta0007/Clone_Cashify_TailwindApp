import React from 'react';

function Download() {
  return (
    <>
      <div className='flex flex-col sm:flex-row mx-6 sm:mx-32 px-6 sm:px-20 pt-10 mt-5 h-auto sm:h-[330px] bg-emerald-300 rounded-lg gap-10 justify-between mb-10'>
        <div className='text-white mt-10 sm:mt-0'>
          <h1 className='text-3xl sm:text-4xl font-bold'>
            Download the App
          </h1>
          <p className='mt-4 sm:mt-6 w-full sm:w-[550px] text-lg sm:text-xl font-semibold'>
            Sell your old phone | Buy top-quality refurbished phones | Get your phone repaired
          </p>
          <div className='flex flex-wrap sm:flex-nowrap mt-6 sm:mt-10 gap-6 sm:gap-10'>
            <div>
              <img
                src="https://s3n.cashify.in/cashify/web/images/landing/svgs/google-play.svg"
                alt="Google Play"
                className='w-32 sm:w-40'
              />
            </div>

            <div>
              <img
                src="https://s3n.cashify.in/cashify/web/images/landing/svgs/apple-store.svg"
                alt="Apple Store"
                className='w-32 sm:w-40'
              />
            </div>
          </div>
        </div>

        <div className='w-full sm:w-auto flex justify-center sm:justify-end'>
          <img
            src="https://s3no.cashify.in/estore/0f23d2860f77401db5d650d9e4e06344.webp?p=default&s=lg"
            alt="Download App"
            className='w-full sm:h-72 sm:w-auto object-contain'
          />
        </div>
      </div>
    </>
  );
}

export default Download;
