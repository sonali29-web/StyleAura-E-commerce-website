import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="px-4 md:px-6 py-4">
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 p-6 md:p-8 bg-purple-100 rounded-2xl shadow-md">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold">
            Style<span className="text-purple-900">Aura</span>
          </h2>
          <p className="text-sm">@ 2024 StyleAura All Rights reserved</p>
        </div>

        <div className="flex flex-col gap-4 text-center md-text-left">
          <h2 className="text-lg font-semibold">Shop</h2>
          <h2>All Products</h2>
          <h2>New Collection</h2>
          <h2>Best Rating </h2>
          <h2>Best offers</h2>
        </div>

        <div className="flex flex-col gap-4 text-center md-text-left">
          <h2 className="text-lg font-semibold">Customer Service</h2>
          <h2>Contact Us</h2>
          <h2>FAQs</h2>
          <h2>Shipping and Delivery</h2>
          <h2>Return</h2>
        </div>

        <div className="flex flex-col gap-4 text-center md-text-left">
          <h2 className="text-lg font-semibold">Information</h2>
          <h2>About Us </h2>
          <h2>Privacy Policy</h2>
          <h2>Terms and Conditions</h2>
        </div>

        <div className="flex flex-col gap-4 text-center md-text-left">
          <h2 className="text-lg font-semibold">Follow Us</h2>
          <div className="flex justify-center md:justify-start items-center gap-4">
            <FaFacebookF
              size={25}
              className=" cursor-pointer hover:scale-90 transition-transform duration-300"
            />
            <FaInstagram
              size={25}
              className="cursor-pointer hover:scale-90 transition-transform duration-300"
            />
            <FaTwitter
              size={25}
              className="cursor-pointer hover:scale-90 transition-transform duration-300"
            />

            <FaPinterest
              size={25}
              className="cursor-pointer hover:scale-90 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
