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
        <h2 className="text-lg font-semibold text-black">UCC and UNCITRAL</h2>
        <p className="text-black">{helpText}</p>
        <p className="text-black mt-4">
          The Uniform Commercial Code (UCC) is a comprehensive set of laws governing commercial transactions in the United States, while UNCITRAL (United Nations Commission on International Trade Law) develops international standards and frameworks for commercial law. Both aim to harmonize and unify legal frameworks, but the UCC is U.S.-focused, while UNCITRAL applies globally. Citation: <em>"Uniform Commercial Code (UCC)"</em> {' '}
          <a
            href="https://www.law.cornell.edu/ucc"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read more
          </a> and <em>"UNCITRAL Overview."</em> {' '}
          <a
            href="https://uncitral.un.org/"
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
