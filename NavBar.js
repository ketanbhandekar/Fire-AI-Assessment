// src/components/NavBar.js
import React from 'react';

const NavBar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white h-full">
      <div className="flex items-center justify-center h-16 border-b border-gray-700">
        <h1 className="text-xl font-bold">Company Logo</h1>
      </div>
      <nav className="mt-10">
        <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          Home
        </a>
        <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          Analytics
        </a>
        <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          Settings
        </a>
      </nav>
    </div>
  );
};

export default NavBar;