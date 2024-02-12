import React from 'react'
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="bg-gray-800 pt-[3rem] pb-[3rem]">
      <div className="w-[95%] border-b-[1.2px] pb-[2rem] border-b-slate-500 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[3rem]">
        <div>
          <h1 className="text-[25px] uppercase text-white mb-[1rem]">Gaming</h1>
          <p className="text-[14px] text-white mb-[1rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            labore fuga, assumenda laborum veniam iste vel nihil saepe excepturi
            tenetur eum voluptatum ut impedit nobis ratione?
          </p>
          <p className="text-[14px] mt-[1.4rem] text-white opacity-80">
            (+000) 1234 5678 90 <br /> info@example.com
          </p>
        </div>
        <div className="lg:mx-auto">
          <h1 className="text-[20px] text-white mb-[1.5rem]">Information</h1>
          <p className="footer-link">About Us</p>
          <p className="footer-link">Privacy Police</p>
          <p className="footer-link">Return Police</p>
          <p className="footer-link">Shipping Police</p>
          <p className="footer-link">Dropshipping</p>
        </div>
        <div className="lg:mx-auto">
          <h1 className="text-[20px] text-white mb-[1.5rem]">Account</h1>
          <p className="footer-link">Dashboard</p>
          <p className="footer-link">My Orders</p>
          <p className="footer-link">Account Details</p>
          <p className="footer-link">Track My Orders</p>
        </div>
        <div className="lg:mx-auto">
          <h1 className="text-[20px] text-white mb-[1.5rem]">Shop</h1>
          <p className="footer-link">Affiliate</p>
          <p className="footer-link">Best sellers</p>
          <p className="footer-link">Latest Products</p>
          <p className="footer-link">Sale Products</p>
        </div>
      </div>
      <div className='mt-[2rem] grid grid-cols-1 gap-[1.4rem] sm:grid-cols-2 justify-between w-[95%] mx-auto'>
        <p className='text-[14px] text-white opacity-60'>&#169; Copyright Ahad Hossain 2024</p>
        <Image src="/images/pay.svg" alt='pay' width={230} height={230} className='object-contain sm:ml-auto' />
      </div>
    </div>
  );
}

export default Footer
