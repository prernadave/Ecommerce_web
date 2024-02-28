import React from 'react';

function Footer() {
  return (
    <>
      <hr />
      <div className='flex flex-wrap justify-between mt-9 bg-black text-white pt-16 px-9 text-sm md:text-base'>
        <div className='w-full md:w-1/4 lg:w-1/6 mb-8 md:mb-0'>
          <p className='font-semibold mb-4'>VISIT STORE</p>
          <p>Delhi Store Shiv Vihar</p>
          <p>Get Direction</p>
        </div>
        <div className='w-full md:w-1/4 lg:w-1/6 mb-8 md:mb-0'>
          <p className='font-semibold mb-4'>Contact</p>
          <p>Instagram</p>
          <p>Mail</p>
        </div>
        <div className='w-full md:w-1/4 lg:w-1/6 mb-8 md:mb-0'>
          <p className='font-semibold mb-4'>Track Order</p>
          <p>Place Return Exchange</p>
          <p>Exchange Policy</p>
        </div>
        <div className='w-full md:w-1/4 lg:w-1/6 mb-8 md:mb-0'>
          <p className='font-semibold mb-4'>Customer Care</p>
          <p>Timing 10:AM - 6:PM</p>
        </div>
      </div>
      <div className='text-center bg-black text-white py-4 text-xs md:text-sm hover:text-gray-300'>
        @2024 StyleSpire | ALL Rights Reserved
      </div>
    </>
  );
}

export default Footer;
