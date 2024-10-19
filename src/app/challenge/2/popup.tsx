"use client";

import React from 'react';

// Define the types for the props
interface PopupProps {
  helpText: string;
  closePopup: () => void;
}

const Popup: React.FC<PopupProps> = ({ helpText, closePopup }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-black bg-opacity-50 absolute inset-0" onClick={closePopup}></div>
      <div className="bg-white p-4 rounded shadow-md z-10 max-w-md mx-auto mt-20">
        <h2 className="text-lg font-semibold text-black">Bitcoin Halving</h2>
        <p className="text-black">{helpText}</p>
        <p className="text-black mt-4">
          Bitcoin halving is an event that occurs approximately every four years, where the reward for mining new Bitcoin blocks is halved. This event reduces the rate at which new Bitcoins are created, controlling inflation and ensuring that the total supply of Bitcoin remains capped at 21 million. Halvings play a crucial role in Bitcoin’s monetary policy by limiting supply over time. Citation: <em>"Bitcoin Halving."</em> {' '}
          <a
            href="https://www.coinbase.com/bitcoin-halving"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read more
          </a>.
        </p>
        <button
          onClick={closePopup}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
