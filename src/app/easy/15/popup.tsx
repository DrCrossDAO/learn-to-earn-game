'use client';

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
        <h2 className="text-lg font-semibold text-black">U.S. Stance on Cryptocurrency Regulation</h2>
        <p className="text-black">{helpText}</p>
        <p className="text-black mt-4">
          The U.S. regulatory stance on cryptocurrency encourages innovation while imposing necessary regulations to ensure investor protection and prevent fraud. Regulatory bodies like the SEC and CFTC oversee crypto-related securities and commodities, and companies involved in cryptocurrency transactions must comply with federal Money Services Business (MSB) requirements. Citation: <em>"Blockchain Laws and Regulations: USA."</em> {' '}
          <a
            href="https://www.globallegalinsights.com/practice-areas/blockchain-laws-and-regulations/usa/#:~:text=by%20existing%20regulations.-,Sales%20regulation,MSB%E2%80%9D)%20under%20federal%20law"
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
