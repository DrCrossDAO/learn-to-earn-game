"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function E21() {
  const [input, setInput] = useState(null); // null represents no selection
  const router = useRouter();

  const handleChange = (e) => setInput(e.target.value === 'yes');

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('e21Input', JSON.stringify(input));
    router.push('/Part_E/e22');
  };

  return (
    <div>
      <div className="max-w-2xl mx-auto mb-12">
        <h1 className="text-2xl font-semibold text-left ">
          Does your token launch include multiple stages?
        </h1>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="inline-flex items-center mr-4">
            <input
              type="radio"
              name="businessYears"
              id="input-e-22"
              value="yes"
              checked={input === true}
              onChange={handleChange}
              className="form-radio h-5 w-5 text-indigo-600 transition duration-150 ease-in-out"
            />
            <span className="ml-2 text-gray-700">Yes</span>
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
            <span className="ml-2 text-gray-700">No</span>
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
