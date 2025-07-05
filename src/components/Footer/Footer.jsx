import React, { useState, useEffect } from 'react';
import logo from '../../assets/images/logo-BfNap0Pe.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';
export default function Footer() {



  return (
    <footer className="text-white">

      <div className="bg-white text-black text-sm flex justify-between py-1 px-6 items-center w-full ">
        <div className='flex items-center gap-2 px-4 '>
          <LazyLoadImage src={logo} alt="logo" className='h-8' />
          <span className=" text-2xl font-semibold text-black ">Recipe</span>
        </div>

        <span className="text-blue-700 font-bold text-2xl px-4">Route</span>

      </div>

      {/* Lower Footer */}
      <div className="bg-white text-center">
        <p className="m-0 py-3 text-sm text-[#6B7280]"> ©2025 Nagy Osama™. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
