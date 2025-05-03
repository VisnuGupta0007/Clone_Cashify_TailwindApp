import React from 'react';
import { FaTwitter, FaFacebookF, FaYoutube } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";

function Footer() {
  return (
    <div className=" py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          
       
          <div className="flex flex-col items-start justify-start space-y-4">
            <div className="flex items-center justify-start">
              <img
                src="https://tse4.mm.bing.net/th?id=OIP.5DkEtIqsU6OSrRP2JxjupQHaF7&pid=Api&P=0&h=180"
                alt="Logo"
                className="h-20 w-[200px] object-contain"
              />
            </div>
            <p className="text-gray-600 font-semibold">Follow us on</p>
            <div className="flex gap-3 mt-4">
              <div className="rounded-full border p-2 bg-gray-500 text-white text-xl cursor-pointer">
                <FaTwitter />
              </div>
              <div className="rounded-full border p-2 bg-gray-500 text-white text-xl cursor-pointer">
                <FaFacebookF />
              </div>
              <div className="rounded-full border p-2 bg-gray-500 text-white text-xl cursor-pointer">
                <LuInstagram />
              </div>
              <div className="rounded-full border p-2 bg-gray-500 text-white text-xl cursor-pointer">
                <FaYoutube />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-gray-500 font-bold mb-6">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>Sell Phone</li>
              <li>Sell Television</li>
              <li>Sell Smart Watch</li>
              <li>Sell Smart Speakers</li>
              <li>Sell DSLR Camera</li>
              <li>Sell Earbuds</li>
              <li>Repair Phone</li>
              <li>Buy Phone</li>
              <li>Recycle Phone</li>
              <li>Find New Phone</li>
              <li>Partner With Us</li>
            </ul>
          </div>

       
          <div>
            <h4 className="text-gray-500 font-bold mb-6">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>About Us</li>
              <li>Careers</li>
              <li>Articles</li>
              <li>Press Releases</li>
              <li>Become Cashify Partner</li>
              <li>Become Supersale Partner</li>
              <li>Corporate Information</li>
            </ul>
          </div>

        
          <div>
            <h4 className="text-gray-500 font-bold mb-6">Sell Device</h4>
            <ul className="space-y-2 text-sm">
              <li>Mobile Phone</li>
              <li>Laptop</li>
              <li>Tablet</li>
              <li>iMac</li>
              <li>Gaming Consoles</li>
            </ul>
          </div>

        
          <div>
            <h4 className="text-gray-500 font-bold mb-6">Help & Support</h4>
            <ul className="space-y-2 text-sm">
              <li>FAQ</li>
              <li>Contact Us</li>
              <li>Warranty Policy</li>
              <li>Refund Policy</li>
            </ul>
          </div>

        
          <div className="flex flex-col justify-between">
            <h4 className="text-gray-500 font-bold mb-6">More Info</h4>
            <ul className="space-y-2 text-sm">
              <li>Terms & Condition</li>
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
              <li>E-Waste Policy</li>
              <li>Cookie Policy</li>
              <li>GDPR Compliance</li>
              <li>What is Refurbished</li>
              <li>Device Safety</li>
            </ul>

            <div className="flex items-start gap-3 bg-teal-500 text-white p-3 rounded-lg mt-5">
              <img
                src="https://s3n.cashify.in/imageLibrary/Group_1000004325_adde26f035a5.svg"
                alt="Chat Icon"
                className="w-10 h-10 object-contain"
              />
              <div>
                <h4 className="font-bold text-sm">Chat with Us</h4>
                <p className="text-xs">Got questions? Just ask.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-sm text-gray-500 mt-8">
          <p>&copy; 2025 Your Company. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
