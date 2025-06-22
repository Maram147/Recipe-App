import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import logo from '../../assets/images/logo-BfNap0Pe.png'
import { Link } from 'react-router-dom';
import { Utensils,LandPlot,BookOpenText } from 'lucide-react';

export default function Navbar() {
  return <>
  
<div>
  <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden  focus:outline-none focus:ring-1 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
    <span className="sr-only">Open sidebar</span>
    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z" />
    </svg>
  </button>
   <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-white shadow"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto">
        <Link to="/" className="flex items-center ps-2.5 mb-5">
          <img src={logo} className="w-full" alt="Logo" />
        </Link>
        <ul className="space-y-2 font-medium">
          <li>
            <Link to="/" className="flex items-center p-2 text-white bg-[#f29724] rounded-lg gap-3">
              <Utensils className="text-white" />
              <span className='text-white'>Meals</span>
            </Link>
          </li>
          <li>
            <Link to="/ingredients" className="flex items-center p-2 text-black rounded-lg gap-3">
              <BookOpenText />
              Ingredients
            </Link>
          </li>
          <li>
            <Link to="/area" className="flex items-center p-2 text-black rounded-lg gap-3">
              <LandPlot />
              Area
            </Link>
          </li>
        </ul>
      </div>
    </aside>
 
</div>

  </>
   
  
}
