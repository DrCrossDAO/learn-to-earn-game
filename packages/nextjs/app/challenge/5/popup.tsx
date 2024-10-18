"use client";

import React from 'react';

const Popup = ({ helpText, closePopup }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-black bg-opacity-50 absolute inset-0" onClick={closePopup}></div>
      <div className="bg-white p-4 rounded shadow-md z-10 max-w-md mx-auto mt-20">
        <h2 className="text-lg font-semibold text-black">Legal Informatics</h2>
        <p className="text-black">{helpText}</p>
        <p className="text-black mt-4">
          Legal informatics involves the intersection of law and technology, where data analytics, artificial intelligence, and information systems are used to streamline legal processes. Legal informatics helps with document management, case law research, contract analysis, and other aspects of the legal industry, enhancing efficiency and accessibility in legal systems. Citation: <em>"Legal Informatics."</em> {' '}
          <a
            href="https://clp.law.harvard.edu/knowledge-hub/magazine/issues/legal-informatics/legal-informatics/"
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
