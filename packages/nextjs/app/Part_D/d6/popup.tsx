"use client";

import React from 'react';

const Popup = ({ helpText, closePopup }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-black bg-opacity-50 absolute inset-0" onClick={closePopup}></div>
      <div className="bg-white p-4 rounded shadow-md z-10 max-w-md mx-auto mt-20">
        <h2 className="text-lg font-semibold text-black">Overview of Project Development: Provide a brief description of the crypto-asset project, including its primary objectives and underlying technology.Past Milestones: List key completed milestones, including development phases, testing results, and any major achievements or product launches. Include dates and details on significant updates to the technology, partnerships formed, and regulatory approvals obtained. Future Milestones: Outline expected future developments and goals with estimated timelines. Describe upcoming project phases, planned enhancements, and expansion into new markets or services.</h2>
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
