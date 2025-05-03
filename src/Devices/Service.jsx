import React from 'react';

function Service() {
  return (
    <>
      <h1 className="text-2xl sm:text-3xl font-bold px-6 sm:px-24 mt-10">Our Services</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 px-6 sm:px-24 mt-6">
        {/* Card 1 */}
        <div className="w-full flex flex-col items-center">
          <img
            src="https://s3no.cashify.in/builder/cd13764b153e46e19f9c6551ee52b5e6.webp?p=default&s=lg"
            alt="Sell Phone"
            className="w-20 h-20 object-contain"
          />
          <h2 className="text-center mt-2">Sell Phone</h2>
        </div>

        {/* Card 2 */}
        <div className="w-full flex flex-col items-center">
          <img
            src="https://s3no.cashify.in/builder/caa3a1efa51541a5aa37fd292790ea81.webp?p=default&s=lg"
            alt="Buy Phone"
            className="w-20 h-20 object-contain"
          />
          <h2 className="text-center mt-2">Buy Phone</h2>
        </div>

        {/* Card 3 */}
        <div className="w-full flex flex-col items-center">
          <img
            src="https://s3no.cashify.in/builder/3e1f26febd3f4056a7ac5104a122aa94.webp?p=default&s=lg"
            alt="Buy Laptop"
            className="w-20 h-20 object-contain"
          />
          <h2 className="text-center mt-2">Buy Laptop</h2>
        </div>

        {/* Card 4 */}
        <div className="w-full flex flex-col items-center">
          <img
            src="https://s3no.cashify.in/builder/b35c134330e5422699aed92d1254789d.webp?p=default&s=lg"
            alt="Repair Phone"
            className="w-20 h-20 object-contain"
          />
          <h2 className="text-center mt-2">Repair Phone</h2>
        </div>

        {/* Card 5 */}
        <div className="w-full flex flex-col items-center">
          <img
            src="https://s3no.cashify.in/builder/16f1d0a9fb4448f8a971e259dc612f54.webp?p=default&s=lg"
            alt="Repair Laptop"
            className="w-20 h-20 object-contain"
          />
          <h2 className="text-center mt-2">Repair Laptop</h2>
        </div>

        {/* Card 6 */}
        <div className="w-full flex flex-col items-center">
          <img
            src="https://s3no.cashify.in/builder/4060695bca3447c2b7296aa5ba9ce827.webp?p=default&s=lg"
            alt="Find New Phone"
            className="w-20 h-20 object-contain"
          />
          <h2 className="text-center mt-2">Find New Phone</h2>
        </div>

        {/* Card 7 */}
        <div className="w-full flex flex-col items-center">
          <img
            src="https://s3no.cashify.in/builder/522d89598f594f0ca6f9d22e40517db6.webp?p=default&s=lg"
            alt="Nearby Stores"
            className="w-20 h-20 object-contain"
          />
          <h2 className="text-center mt-2">Nearby Stores</h2>
        </div>

        {/* Card 8 */}
        <div className="w-full flex flex-col items-center">
          <img
            src="https://s3no.cashify.in/builder/f1f0df2917bd410b8da95675c63be2d1.webp?p=default&s=lg"
            alt="Buy Smartwatches"
            className="w-20 h-20 object-contain"
          />
          <h2 className="text-center mt-2">Buy Smartwatches</h2>
        </div>

        {/* Card 9 */}
        <div className="w-full flex flex-col items-center">
          <img
            src="https://s3no.cashify.in/builder/ed7d743ec18f40f6b0cbb58bc6783d5b.webp?p=default&s=lg"
            alt="Recycle"
            className="w-20 h-20 object-contain"
          />
          <h2 className="text-center mt-2">Recycle</h2>
        </div>
      </div>
    </>
  );
}

export default Service;
