"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CompletionPartC() {
  const [results, setResults] = useState({});
  const router = useRouter();

  useEffect(() => {
    const data = {
      c1: localStorage.getItem('c1Input'),
      c2: localStorage.getItem('c2Input'),
      c3: localStorage.getItem('c3Input'),
      c4: localStorage.getItem('c4Input'),
      c5: localStorage.getItem('c5Input'),
      c6: localStorage.getItem('c6Input'),
      c7: localStorage.getItem('c7Input'),
      c8: localStorage.getItem('c8Input'),
      c9: localStorage.getItem('c9Input'),
    };
    setResults(data);
  }, []);

  // This function maps each answer key to its corresponding page
  const getPageForKey = (key) => {
    return `/Part_C/${key}`; // Assuming the pages are named according to their keys
  };

  const handleRedirect = (key) => {
    const page = getPageForKey(key);
    router.push(page);
  };

  const handleContinueToPartD = () => {
    router.push('/Part_D/d1');
  };

  return (
    <div>
      <div className="max-w-2xl mx-auto mb-12">
        <h1 className="text-2xl font-semibold text-left text-black mb-4">Completion Page for Part C</h1>
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
          onClick={handleContinueToPartD}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          Continue to Part D
        </button>
      </div>
    </div>
  );
}
