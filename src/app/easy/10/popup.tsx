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
        <h2 className="text-lg font-semibold text-black">FINTRAC and Cryptocurrency AML Compliance</h2>
        <p className="text-black">{helpText}</p>
        <p className="text-black mt-4">
          FINTRAC (Financial Transactions and Reports Analysis Centre of Canada) ensures AML compliance in Canada’s financial system, including for cryptocurrencies. Citation: <em>"FINTRAC's Role in Monitoring Virtual Currencies."</em> {' '}
          <a
            href="https://fintrac-canafe.canada.ca/intro-eng"
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
