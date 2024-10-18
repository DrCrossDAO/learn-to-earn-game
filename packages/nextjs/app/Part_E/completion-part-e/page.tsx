"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CompletionPartE() {
  const [results, setResults] = useState({});
  const router = useRouter();

  useEffect(() => {
    const data = {
      e1: localStorage.getItem('e1Input'),
      e2: localStorage.getItem('e2Input'),
      e3: localStorage.getItem('e3Input'),
      e4: localStorage.getItem('e4Input'),
      e5: localStorage.getItem('e5Input'),
      e6: localStorage.getItem('e6Input'),
      e7: localStorage.getItem('e7Input'),
      e8: localStorage.getItem('e8Input'),
      e9: localStorage.getItem('e9Input'),
      e10: localStorage.getItem('e10Input'),
      e11: localStorage.getItem('e11Input'),
      e12: localStorage.getItem('e12Input'),
      e13: localStorage.getItem('e13Input'),
      e14: localStorage.getItem('e14Input'),
      e15: localStorage.getItem('e15Input'),
      e16: localStorage.getItem('e16Input'),
      e17: localStorage.getItem('e17Input'),
      e18: localStorage.getItem('e18Input'),
      e19: localStorage.getItem('e19Input'),
      e20: localStorage.getItem('e20Input'),
      e21: localStorage.getItem('e21Input'),
      e22: localStorage.getItem('e22Input'),
      e23: localStorage.getItem('e23Input'),
      e24: localStorage.getItem('e24Input'),
      e25: localStorage.getItem('e25Input'),
      e26: localStorage.getItem('e26Input'),
    };
    setResults(data);
  }, []);

  // This function maps each answer key to its corresponding page
  const getPageForKey = (key) => {
    return `/Part_E/${key}`; // Assuming the pages are named according to their keys
  };

  const handleRedirect = (key) => {
    const page = getPageForKey(key);
    router.push(page);
  };

  const handleContinueToPartF = () => {
    router.push('/Part_F/f1');
  };

  return (
    <div>
      <div className="max-w-2xl mx-auto mb-12">
        <h1 className="text-2xl font-semibold text-left text-black mb-4">Completion Page for Part E</h1>
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
          onClick={handleContinueToPartF}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          Continue to Part F
        </button>
      </div>
    </div>
  );
}
