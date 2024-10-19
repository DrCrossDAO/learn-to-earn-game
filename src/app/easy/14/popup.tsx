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
        <h2 className="text-lg font-semibold text-black">Cryptocurrency in the Caribbean</h2>
        <p className="text-black">{helpText}</p>
        <p className="text-black mt-4">
          Caribbean nations, such as the Bahamas and Jamaica, are actively exploring the use of cryptocurrency and blockchain technology. For instance, the Bahamas introduced the "Sand Dollar," a state-backed digital currency that allows for faster, more secure transactions. However, these countries are also implementing strict regulatory frameworks to combat financial crimes, like money laundering and fraud. They emphasize compliance with Anti-Money Laundering (AML) and Know Your Customer (KYC) regulations to ensure that cryptocurrency can be safely integrated into their economies. Citation: <em>"Legality of Cryptocurrency by Country or Territory."</em> {' '}
          <a
            href="https://en.wikipedia.org/wiki/Legality_of_cryptocurrency_by_country_or_territory"
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
