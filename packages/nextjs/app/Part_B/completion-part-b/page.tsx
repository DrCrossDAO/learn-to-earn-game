"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CompletionPartB() {
  const [results, setResults] = useState({});
  const router = useRouter();

  useEffect(() => {
    const data = {
      b1: localStorage.getItem('b1Input'),
      b2: localStorage.getItem('b2Input'),
      b3: localStorage.getItem('b3Input'),
      b4: localStorage.getItem('b4Input'),
      b5: localStorage.getItem('b5Input'),
      b6: localStorage.getItem('b6Input'),
      b7: localStorage.getItem('b7Input'),
      b8: localStorage.getItem('b8Input'),
      b9: localStorage.getItem('b9Input'),
    };
    setResults(data);
  }, []);

  // This function maps each answer key to its corresponding page
  const getPageForKey = (key) => {
    return `/Part_B/${key}`; // Assuming the pages are named according to their keys
  };

  const handleRedirect = (key) => {
    const page = getPageForKey(key);
    router.push(page);
  };

  const handleContinueToPartC = () => {
    router.push('/Part_C/c0');
  };

  return (
    <div>
      <div className="max-w-2xl mx-auto mb-12">
        <h1 className="text-2xl font-semibold text-left text-black mb-4">Completion Page for Part B</h1>
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
          onClick={handleContinueToPartC}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          Continue to Part C
        </button>
      </div>
    </div>
  );
}
