"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CompletionPartD() {
  const [results, setResults] = useState({});
  const router = useRouter();

  useEffect(() => {
    const data = {
      d1: localStorage.getItem('d1Input'),
      d2: localStorage.getItem('d2Input'),
      d3: localStorage.getItem('d3Input'),
      d4: localStorage.getItem('d4Input'),
      d5: localStorage.getItem('d5Input'),
      d6: localStorage.getItem('d6Input'),
      d7: localStorage.getItem('d7Input'),
      d8: localStorage.getItem('d8Input'),
      d9: localStorage.getItem('d9Input'),
    };
    setResults(data);
  }, []);

  // This function maps each answer key to its corresponding page
  const getPageForKey = (key) => {
    return `/Part_D/${key}`; // Assuming the pages are named according to their keys
  };

  const handleRedirect = (key) => {
    const page = getPageForKey(key);
    router.push(page);
  };

  const handleContinueToPartE = () => {
    router.push('/Part_E/e1');
  };

  return (
    <div>
      <div className="max-w-2xl mx-auto mb-12">
        <h1 className="text-2xl font-semibold text-left text-black mb-4">Completion Page for Part D</h1>
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
          onClick={handleContinueToPartE}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          Continue to Part E
        </button>
      </div>
    </div>
  );
}
