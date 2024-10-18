"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CompletionPartA() {
  const [results, setResults] = useState({});
  const router = useRouter();

  useEffect(() => {
    const data = {
      a1: localStorage.getItem('a1Input'),
      a2: localStorage.getItem('a2Input'),
      a3: localStorage.getItem('a3Input'),
      a4: localStorage.getItem('a4Input'),
      a5: localStorage.getItem('a5Input'),
      a6: localStorage.getItem('a6Input'),
      a7: localStorage.getItem('a7Input'),
      a8: localStorage.getItem('a8Input'),
      a9: localStorage.getItem('a9Input'),
      a10: localStorage.getItem('a10Input'),
      a11: localStorage.getItem('a11Input'),
      a12: localStorage.getItem('a12Input'),
      a13: localStorage.getItem('a13Input'),
      a14: localStorage.getItem('a14Input'),
      a15: localStorage.getItem('a15Input'),
      a16: localStorage.getItem('a16Input'),
    };
    setResults(data);
  }, []);

  // This function maps each answer key to its corresponding page
  const getPageForKey = (key) => {
    return `/Part_A/${key}`; // Assuming the pages are named according to their keys
  };

  const handleRedirect = (key) => {
    const page = getPageForKey(key);
    router.push(page);
  };

  const handleContinueToPartB = () => {
    router.push('/Part_B/b1');
  };

  return (
    <div>
      <div className="max-w-2xl mx-auto mb-12">
        <h1 className="text-2xl font-semibold text-left text-black mb-4">Completion Page for Part A</h1>
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
          onClick={handleContinueToPartB}
          className="mt-4 px-4 py-2 bg-yellow-500 text-black rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          Continue to Part B
        </button>
      </div>
    </div>
  );
}
