import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f8f5f0] relative">
      <Navbar />
      <div className="flex-1 ml-0 sm:ml-64">
        <main className="p-4">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}