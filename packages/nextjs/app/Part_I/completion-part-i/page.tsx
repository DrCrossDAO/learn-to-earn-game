"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CompletionPartI() {
  const [results, setResults] = useState({});
  const router = useRouter();

  useEffect(() => {
    const data = {
      i1: localStorage.getItem('i1Input'),
      i2: localStorage.getItem('i2Input'),
      i3: localStorage.getItem('i3Input'),
      i4: localStorage.getItem('i4Input'),
      i5: localStorage.getItem('i5Input'),
    };
    setResults(data);
  }, []);

  // This function maps each answer key to its corresponding page
  const getPageForKey = (key) => {
    return `/Part_I/${key}`; // Assuming the pages are named according to their keys
  };

  const handleRedirect = (key) => {
    const page = getPageForKey(key);
    router.push(page);
  };

  const handleCompleteWhitepaper = () => {
    router.push('/final-completion');
  };

  return (
    <div>
      <div className="max-w-2xl mx-auto mb-12">
        <h1 className="text-2xl font-semibold text-left text-black mb-4">Completion Page for Part I</h1>
        <div className="space-y-4">
          {Object.entries(results).map(([key, value]) => (
            <div key={key} className="flex justify-between items-center">
              <div>
                <h2 className="text-lg font-semibold text-gray-700">{key.toUpperCase()}</h2>
                <p className="text-gray-900">{value || 'No data provided'}</p>
              </div>
              <button
                onClick={() => handleRedirect(key)}
                className="ml-4 px-4 py-2 bg-yellow-500 text-black rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                Go Back
              </button>
            </div>
          ))}
        </div>
        <button
          onClick={handleCompleteWhitepaper}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          Complete Whitepaper
        </button>
      </div>
    </div>
  );
}
