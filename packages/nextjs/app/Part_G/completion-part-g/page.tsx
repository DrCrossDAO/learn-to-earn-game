"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CompletionPartG() {
  const [results, setResults] = useState({});
  const router = useRouter();

  useEffect(() => {
    const data = {
      g1: localStorage.getItem('g1Input'),
      g2: localStorage.getItem('g2Input'),
      g3: localStorage.getItem('g3Input'),
      g4: localStorage.getItem('g4Input'),
      g5: localStorage.getItem('g5Input'),
      g6: localStorage.getItem('g6Input'),
      g7: localStorage.getItem('g7Input'),
      g8: localStorage.getItem('g8Input'),
      g9: localStorage.getItem('g9Input'),
      g10: localStorage.getItem('g10Input'),
      g11: localStorage.getItem('g11Input'),
    };
    setResults(data);
  }, []);

  // This function maps each answer key to its corresponding page
  const getPageForKey = (key) => {
    return `/Part_G/${key}`; // Assuming the pages are named according to their keys
  };

  const handleRedirect = (key) => {
    const page = getPageForKey(key);
    router.push(page);
  };

  const handleContinueToPartH = () => {
    router.push('/Part_H/h1');
  };

  return (
    <div>
      <div className="max-w-2xl mx-auto mb-12">
        <h1 className="text-2xl font-semibold text-left text-black mb-4">Completion Page for Part G</h1>
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
          onClick={handleContinueToPartH}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          Continue to Part H
        </button>
      </div>
    </div>
  );
}
