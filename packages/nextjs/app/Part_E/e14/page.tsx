"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function E14() {
  const [input, setInput] = useState('');
  const router = useRouter();

  const handleChange = (e) => setInput(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('e14Input', input);
    router.push('/Part_E/e15');
  };

  return (
    <div>
      <div className="max-w-2xl mx-auto mb-12">
        <h1 className="text-2xl font-semibold text-left">
          Specific notice that purchasers participating in the offer to the public of crypto-assets will be able to be reimbursed if the minimum target subscription goal is not reached at the end of the offer to the public, if they exercise the right to withdrawal foreseen in Article 13 or if the offer is cancelled and detailed description of the refund mechanism, including the expected timeline of when such refunds will be completed
        </h1>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            id="input-e-14"
            value={input}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black"
          />
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
