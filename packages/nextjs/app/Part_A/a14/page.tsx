"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function A14() {
  const [input, setInput] = useState(null); // null represents no selection
  const router = useRouter();

  const handleChange = (e) => setInput(e.target.value === 'yes');

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('a14Input', JSON.stringify(input));
    router.push('/Part_A/a15');
  };

  return (
    <div>
      <div className="max-w-2xl mx-auto mb-12">
        <h1 className="text-2xl font-semibold text-left">
          Has your company been in business for fewer than three (3) years?
        </h1>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="inline-flex items-center mr-4">
            <input
              type="radio"
              name="businessYears"
              id="input-a-14"
              value="yes"
              checked={input === true}
              onChange={handleChange}
              className="form-radio h-5 w-5 text-indigo-600 transition duration-150 ease-in-out"
            />
            <span className="ml-2 text-gray-200">Yes</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="businessYears"
              value="no"
              checked={input === false}
              onChange={handleChange}
              className="form-radio h-5 w-5 text-indigo-600 transition duration-150 ease-in-out"
            />
            <span className="ml-2 text-gray-200">No</span>
          </label>
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
