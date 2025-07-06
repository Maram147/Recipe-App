import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Utensils, LandPlot, BookOpenText, Menu } from 'lucide-react';
import logo from '../../assets/images/logo-BfNap0Pe.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
     {sidebarOpen && (
    <div
      className="fixed inset-0 bg-black/80 bg-opacity-50 z-30 sm:hidden"
      onClick={() => setSidebarOpen(false)}
    />
  )}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        type="button"
        className="inline-flex items-center max-w-fit p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden focus:outline-none focus:ring-1 focus:ring-gray-200 hover:bg-gray-100 focus:bg-gray-100 border border-gray-300"
      >
        <span className="sr-only">Open sidebar</span>
        <Menu aria-hidden="true" />
      </button>
      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform duration-300 bg-white shadow-md ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } sm:translate-x-0`}
        aria-label="Sidebar"
      >

        <div className="h-full px-3 py-4 overflow-y-auto">
          <Link to="/" className="flex items-center ps-2.5 mb-5">
            <img src={logo} className="w-full" alt="Logo" />
          </Link>
          <ul className="space-y-2 font-medium">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center p-2 rounded-lg gap-3 border border-gray-300 transition-colors ${isActive
                    ? 'text-white bg-[#f29724]'
                    : 'text-black hover:bg-gray-100'
                  }`
                }
              >
                <Utensils aria-hidden="true" />
                <span>Meals</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/ingredients"
                className={({ isActive }) =>
                  `flex items-center p-2 rounded-lg gap-3 border border-gray-300 transition-colors ${isActive
                    ? 'text-white bg-[#f29724]'
                    : 'text-black hover:bg-gray-100'
                  }`
                }
              >
                <BookOpenText aria-hidden="true" />
                <span>Ingredients</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/area"
                className={({ isActive }) =>
                  `flex items-center p-2 rounded-lg gap-3 border border-gray-300 transition-colors ${isActive
                    ? 'text-white bg-[#f29724]'
                    : 'text-black hover:bg-gray-100'
                  }`
                }
              >
                <LandPlot aria-hidden="true" />
                <span>Area</span>
              </NavLink>
            </li>
          </ul>

        </div>
      </aside>
    </>
  );
}