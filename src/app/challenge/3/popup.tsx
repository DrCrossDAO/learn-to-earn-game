"use client";

import React from 'react';

const Popup = ({ helpText, closePopup }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-black bg-opacity-50 absolute inset-0" onClick={closePopup}></div>
      <div className="bg-white p-4 rounded shadow-md z-10 max-w-md mx-auto mt-20">
        <h2 className="text-lg font-semibold text-black">Uniform Electronic Transactions Act (UETA)</h2>
        <p className="text-black">{helpText}</p>
        <p className="text-black mt-4">
          The Uniform Electronic Transactions Act (UETA) provides a legal framework that ensures the validity of electronic signatures and electronic records in commercial and legal transactions. By establishing that electronic signatures are just as legally binding as traditional handwritten signatures, UETA supports the broader adoption of digital contracts. Citation: <em>"Uniform Electronic Transactions Act (UETA)."</em> {' '}
          <a
            href="https://www.uniformlaws.org/committees/community-home?CommunityKey=e104aaa8-c10f-45a7-a34a-0423c2106778"
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
