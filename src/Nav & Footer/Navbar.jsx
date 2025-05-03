import React from 'react';
import { FaSearch } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

function Navbar() {
    return (
        <>
            {/* Top Navbar */}
            <div className="flex flex-col md:flex-row h-auto md:h-24 px-4 md:px-16 gap-4 md:gap-10 fixed top-0 left-0 right-0 bg-white z-50 py-4 items-center">
                <img
                    src="https://tse4.mm.bing.net/th?id=OIP.5DkEtIqsU6OSrRP2JxjupQHaF7&pid=Api&P=0&h=180"
                    alt="Banner"
                    className='h-16 md:h-24 w-[150px] md:w-[200px] object-contain'
                />

                {/* Search */}
                <div className="flex-1 w-full">
                    <div className='flex items-center rounded-lg gap-4 bg-gray-100 px-4 py-2 w-full'>
                        <FaSearch className="text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search for mobiles, accessories & more"
                            className='flex-1 h-10 md:h-12 outline-none bg-transparent text-sm md:text-base'
                        />
                    </div>
                </div>

                {/* Location & Login */}
                <div className="flex items-center gap-4 mt-2 md:mt-0">
                    <IoLocationSharp className="text-xl text-teal-400" />
                    <select name="location" className='outline-none text-sm md:text-lg'>
                        <option >Delhi</option>
                        <option >Bangalore</option>
                        <option >Chennai</option>
                        <option >Gurgaon</option>
                        <option >Hyderbad</option>
                        <option >Kolkata</option>
                        <option >Mumbai</option>
                        <option >Noida</option>
                        <option >Pune</option>
                    </select>
                    <button type="button" className='bg-teal-500 h-10 px-6 rounded-lg text-white text-sm md:text-base hover:bg-teal-700 font-bold'>
                        Login
                    </button>
                </div>
            </div>

            {/* Dropdown Section */}
            <div className='mt-[110px] md:mt-[100px] overflow-x-auto whitespace-nowrap px-4 md:px-20'>
                <div className='flex flex-nowrap gap-4 py-4 text-sm md:text-base font-bold'>

                    <select className='min-w-[160px] px-2 py-1 '>
                        <option >All</option>
                        <option>Phone</option>
                        <option>Laptop</option>
                        <option>Smart watch</option>
                        <option>Tablet</option>
                        <option>Repair</option>
                        <option>Buy Phone</option>
                        <option>Recycle</option>
                        <option>Sell Gadgets</option>
                        <option>Find New Phone</option>
                        <option>Cashify Store</option>
                    </select>

                    <select className='min-w-[160px] px-2 py-1 '>
                        <option>Sell Phone</option>
                        <option className=' font-bold'>Top Brands</option>
                        <option >Apple</option>
                        <option>Xiaomi</option>
                        <option>Samsung</option>
                        <option>Oneplus</option>
                        <option>Nokia</option>
                        <option>Poco</option>
                        <option className=' font-bold'>Top Selling Phones</option>
                        <option>Apple iPhone 12</option>
                        <option>Samsung Galaxy Note 20</option>
                        <option>Apple iPhone 11</option>
                        <option>One Plus 9 Pro</option>
                        <option>Xiaomi Redmi Note 14</option>
                    </select>

                    <select className='min-w-[160px] px-2 py-1 '>
                        <option className=' font-bold'>Sell Gadgets</option>
                        <option className=' font-bold'>Phone</option>
                        <option className=' font-bold'>Laptop</option>
                        <option className=' font-bold'>Smart Speaker</option>
                        <option className=' font-bold'>Tablet</option>
                        <option className=' font-bold'>Gaming Consoles</option>
                        <option className=' font-bold'>iMac</option>
                        <option className=' font-bold'>Smartwatch</option>
                        <option className=' font-bold'>TV</option>
                        <option className=' font-bold'>Earbuds</option>
                        <option className=' font-bold'>DSLR Camera</option>
                        <option className=' font-bold'>AC</option>
                    </select>

                    <select className='min-w-[160px] px-2 py-1 '>
                        <option>Buy Phone</option>
                        <option>Refurbished Phones</option>
                        <option>Refurbished Laptop</option>
                        <option>Refurbished Smart Watches</option>
                        <option>Refurbished Tablets</option>
                        <option>Refurbished Gaming Consoles</option>
                        <option>Refurbished Cameras</option>
                        <option className=' font-bold'> Top Brands</option>
                        <option>Apple</option>
                        <option>Xiaomi</option>
                        <option>Samsung</option>
                        <option>Oneplus</option>
                        <option>Google</option>
                        <option>Oppo</option>
                        <option>Vivo</option>
                    </select>

                    <select className='min-w-[160px] px-2 py-1 '>
                        <option className=' font-bold'>Find New Gadgets</option>
                        <option className=' font-bold'>Find New Phone</option>
                        <option className=' font-bold'>Find New Laptop</option>
                        <option className=' font-bold'>Find New Smartwatch</option>
                        <option className=' font-bold'>Find New Tablet</option>
                        <option className=' font-bold'>Explore</option>
                        <option>Videos</option>
                        <option>News</option>
                        <option>Reviews</option>
                        <option>Articles</option>
                        <option>QnA</option>
                        <option>Tips and Tricks</option>
                        <option>Tech News</option>
                    </select>

                    <select className='min-w-[160px] px-2 py-1 '>
                        <option>Buy Laptop</option>
                        <option>Apple</option>
                        <option>Dell</option>
                        <option>Lenovo</option>
                        <option>HP</option>
                        <option>Acer</option>
                        <option>Asus</option>
                        <option className=' font-bold'> Top Selling Laptops</option>
                        <option>Apple MacBook Air Mid 2017</option>
                        <option>Apple MacBook Air Early 2015</option>
                        <option>Apple MacBook Air 2020</option>
                    </select>

                    <select className='min-w-[160px] px-2 py-1 '>
                        <option>Cashify Store</option>
                        <option>Delhi</option>
                        <option>Gurgaon</option>
                        <option>Noida</option>
                        <option>Bengaluru</option>
                        <option>Chennai</option>
                        <option>Pune</option>
                        <option>Agra</option>
                        <option>Patna</option>
                        <option>Ghaziabad</option>
                        <option>Meerut</option>
                        <option>Mohali</option>
                        <option>Thane</option>
                    </select>

                    <select className='min-w-[160px] px-2 py-1 '>
                        <option>More</option>
                        <option>New Offers</option>
                        <option>Partner with Us</option>
                        <option>Contact Us</option>
                        <option>Warranty Policy</option>
                        <option>Refer & Earn</option>
                        <option>About Us</option>
                        <option>Careers</option>
                        <option>Articles</option>
                        <option>Become Supersale Partner</option>
                        <option>Press Releases</option>
                        <option>Terms & Conditions</option>
                    </select>

                </div>
            </div>
        </>
    );
}

export default Navbar;
