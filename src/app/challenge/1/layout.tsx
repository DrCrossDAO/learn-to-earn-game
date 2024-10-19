"use client";

import { useState } from 'react';
// import AppNavbar from '../components/AppNavbar';
import Popup from './popup';

export default function Layout({ children, helpText }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800">
      {/* Adjusted width and padding for responsiveness */}
      <div className="w-full max-w-md p-4 md:w-3/5 md:p-8 bg-gray-900 rounded shadow-md relative">
        {children}
        <button
          onClick={openModal}
          className="ml-4 px-4 py-2 bg-yellow-500 text-black rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 absolute top-0 right-0 mt-2 mr-2 md:mt-4 md:mr-4"
        >
          Help
        </button>
      </div>
      {isModalOpen && <Popup helpText={helpText} closePopup={closeModal} />}
    </div>
  );
}
