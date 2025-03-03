import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-6 sm:gap-12 my-10 mt-40 text-sm border border-amber-900/50 p-3 ">
        <div className="mb-3 sm:mb-6 md:mb-0">
       <Link to={'/'} >   <img src={assets.logo} className="w-24 mb-2" alt="Fabrix Logo" /> </Link>
          <p className="w-full md:w-2/3 text-gray-600 font-outfit font-light">
          At Fabrix, we craft timeless fashion that blends elegance with comfort. Our designs speak of sophistication, quality, and effortless style, ensuring every piece feels as luxurious as it looks.
          </p>
        </div>
        <div>
            <p className="text-xl mb-3 sm:mb-5 font-outfit">COMPANY</p>
            <ul className="flex flex-col font-outfit gap-1 text-gray-600 ">
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div>
            <p className="text-xl mb-3 sm:mb-5 font-outfit">GET IN TOUCH</p>
            <ul className="flex flex-col font-outfit gap-1 text-gray-600 ">
                <li>+1-212-456-7890</li>
                <li>contact@fabrix.com</li>
            </ul>
        </div>
      </div>
      {/* copy right text */}
      <div>
            <hr />
            <p className="pt-3 text-sm text-center text-gray-500 font-outfit">copyright 2025@ fabrix.com - All Rights Reserved.</p>
            <p className="py-5 text-xs text-center text-gray-500 font-outfit">Designed by Aayush Soni</p>
            
      </div>

    </div>
  );
};

export default Footer;
