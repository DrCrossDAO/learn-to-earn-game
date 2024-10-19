"use client";

import { useState } from 'react';
// import AppNavbar from '../components/AppNavbar';


export default function Layout({ children, helpText }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800">
        <div className="w-3/5 max-w-3/5 p-8 bg-gray-900 rounded shadow-md relative">
          {children}
          <button
            onClick={openModal}
            className="ml-4 px-4 py-2 bg-yellow-500 text-black rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 absolute top-0 right-0 mt-4 mr-4"
          >
            Help
          </button>
        </div>
        
      </div>
    </div>
  );
}
