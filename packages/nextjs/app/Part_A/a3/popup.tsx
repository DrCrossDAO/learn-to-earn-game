"use client";

import React from 'react';

const Popup = ({ helpText, closePopup }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-black bg-opacity-50 absolute inset-0" onClick={closePopup}></div>
      <div className="bg-white p-4 rounded shadow-md z-10 max-w-md mx-auto mt-20">
        <h2 className="text-lg font-semibold text-black">This is the official address of a company, recorded with the relevant authorities for legal and administrative purposes. It is primarily used for receiving official communications and legal documents. The registered office must be a physical address where legal notices and correspondence from the government, such as tax documents and court summons, can be sent. It's a requirement in many jurisdictions for regulatory, tax, and legal purposes.</h2>
        <p className="text-black">{helpText}</p>
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
