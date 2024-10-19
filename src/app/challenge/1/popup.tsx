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
        <h2 className="text-lg font-semibold text-black">Ethereum Virtual Machine (EVM)</h2>
        <p className="text-black">{helpText}</p>
        <p className="text-black mt-4">
          The Ethereum Virtual Machine (EVM) is the environment in which all Ethereum accounts and smart contracts live. It is responsible for executing smart contracts and ensuring decentralized consensus across the Ethereum blockchain. The EVM allows developers to build decentralized applications (dApps) that can run autonomously without the need for intermediaries. Citation: <em>"Ethereum Virtual Machine (EVM) Overview."</em> {' '}
          <a
            href="https://ethereum.org/en/developers/docs/evm/"
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
