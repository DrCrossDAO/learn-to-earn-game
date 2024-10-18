"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function FinalCompletion() {
  const [results, setResults] = useState({});
  const router = useRouter();

  useEffect(() => {
    const data = {
      // Part A
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
      // Part B
      b1: localStorage.getItem('b1Input'),
      b2: localStorage.getItem('b2Input'),
      b3: localStorage.getItem('b3Input'),
      b4: localStorage.getItem('b4Input'),
      b5: localStorage.getItem('b5Input'),
      b6: localStorage.getItem('b6Input'),
      b7: localStorage.getItem('b7Input'),
      b8: localStorage.getItem('b8Input'),
      b9: localStorage.getItem('b9Input'),
      // Part C
       c0: localStorage.getItem('c0Input'),
      c1: localStorage.getItem('c1Input'),
      c2: localStorage.getItem('c2Input'),
      c3: localStorage.getItem('c3Input'),
      c4: localStorage.getItem('c4Input'),
      c5: localStorage.getItem('c5Input'),
      c6: localStorage.getItem('c6Input'),
      c7: localStorage.getItem('c7Input'),
      c8: localStorage.getItem('c8Input'),
      c9: localStorage.getItem('c9Input'),
      c10: localStorage.getItem('c10Input'),
      // Part D
      d1: localStorage.getItem('d1Input'),
      d2: localStorage.getItem('d2Input'),
      d3: localStorage.getItem('d3Input'),
      d4: localStorage.getItem('d4Input'),
      d5: localStorage.getItem('d5Input'),
      d6: localStorage.getItem('d6Input'),
      d7: localStorage.getItem('d7Input'),
      d8: localStorage.getItem('d8Input'),
      // Part E
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
      // Part F
      f1: localStorage.getItem('f1Input'),
      f2: localStorage.getItem('f2Input'),
      // Part G
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
      // Part H
      h1: localStorage.getItem('h1Input'),
      h2: localStorage.getItem('h2Input'),
      h3: localStorage.getItem('h3Input'),
      h4: localStorage.getItem('h4Input'),
      h5: localStorage.getItem('h5Input'),
      // Part I
      i1: localStorage.getItem('i1Input'),
      i2: localStorage.getItem('i2Input'),
      i3: localStorage.getItem('i3Input'),
      i4: localStorage.getItem('i4Input'),
      i5: localStorage.getItem('i5Input'),
    };
    setResults(data);
  }, []);


  const handleDownload = () => {
    const dataStr = JSON.stringify(results, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'whitepaper_answers.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const redirectToCompletionPage = (part) => {
    const completionPage = `/Part_${part}/completion-part-${part.toLowerCase()}`;
    router.push(completionPage);
  };

  const handleClaimRewards = () => {
    router.push('/claim-case2');
  };

  return (
  <div>
    <div className="max-w-2xl mx-auto mb-12">
      <h1 className="text-2xl font-semibold text-left text-black mb-4">REVIEW RESPONSES</h1>
      
      {/* PART A */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-gray-800">Part A</h2>
        {Array.from({ length: 16 }, (_, i) => `a${i + 1}`).map((key) => (
          <div key={key}>
            <h2 className="text-lg font-semibold text-gray-700">{key.toUpperCase()}</h2>
            <p className="text-gray-900">{results[key] || 'No data provided'}</p>
          </div>
        ))}
        <button
          onClick={() => redirectToCompletionPage('A')}
          className="mt-4 px-4 py-2 bg-yellow-500 text-black rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          Go Back to Part A
        </button>
      </div>

      {/* PART B */}
      <div className="space-y-4 mt-8">
        <h2 className="text-xl font-bold text-gray-800">Part B</h2>
        {Array.from({ length: 9 }, (_, i) => `b${i + 1}`).map((key) => (
          <div key={key}>
            <h2 className="text-lg font-semibold text-gray-700">{key.toUpperCase()}</h2>
            <p className="text-gray-900">{results[key] || 'No data provided'}</p>
          </div>
        ))}
        <button
          onClick={() => redirectToCompletionPage('B')}
          className="mt-4 px-4 py-2 bg-yellow-500 text-black rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          Go Back to Part B
        </button>
      </div>

      {/* PART C */}
      <div className="space-y-4 mt-8">
        <h2 className="text-xl font-bold text-gray-800">Part C</h2>
        {Array.from({ length: 11 }, (_, i) => `c${i}`).map((key) => (
          <div key={key}>
            <h2 className="text-lg font-semibold text-gray-700">{key.toUpperCase()}</h2>
            <p className="text-gray-900">{results[key] || 'No data provided'}</p>
          </div>
        ))}
        <button
          onClick={() => redirectToCompletionPage('C')}
          className="mt-4 px-4 py-2 bg-yellow-500 text-black rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          Go Back to Part C
        </button>
      </div>

      {/* PART D */}
      <div className="space-y-4 mt-8">
        <h2 className="text-xl font-bold text-gray-800">Part D</h2>
        {Array.from({ length: 8 }, (_, i) => `d${i + 1}`).map((key) => (
          <div key={key}>
            <h2 className="text-lg font-semibold text-gray-700">{key.toUpperCase()}</h2>
            <p className="text-gray-900">{results[key] || 'No data provided'}</p>
          </div>
        ))}
        <button
          onClick={() => redirectToCompletionPage('D')}
          className="mt-4 px-4 py-2 bg-yellow-500 text-black rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          Go Back to Part D
        </button>
      </div>

      {/* PART E */}
      <div className="space-y-4 mt-8">
        <h2 className="text-xl font-bold text-gray-800">Part E</h2>
        {Array.from({ length: 26 }, (_, i) => `e${i + 1}`).map((key) => (
          <div key={key}>
            <h2 className="text-lg font-semibold text-gray-700">{key.toUpperCase()}</h2>
            <p className="text-gray-900">{results[key] || 'No data provided'}</p>
          </div>
        ))}
        <button
          onClick={() => redirectToCompletionPage('E')}
          className="mt-4 px-4 py-2 bg-yellow-500 text-black rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          Go Back to Part E
        </button>
      </div>

      {/* PART F */}
      <div className="space-y-4 mt-8">
        <h2 className="text-xl font-bold text-gray-800">Part F</h2>
        {Array.from({ length: 2 }, (_, i) => `f${i + 1}`).map((key) => (
          <div key={key}>
            <h2 className="text-lg font-semibold text-gray-700">{key.toUpperCase()}</h2>
            <p className="text-gray-900">{results[key] || 'No data provided'}</p>
          </div>
        ))}
        <button
          onClick={() => redirectToCompletionPage('F')}
          className="mt-4 px-4 py-2 bg-yellow-500 text-black rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          Go Back to Part F
        </button>
      </div>

      {/* PART G */}
      <div className="space-y-4 mt-8">
        <h2 className="text-xl font-bold text-gray-800">Part G</h2>
        {Array.from({ length: 11 }, (_, i) => `g${i + 1}`).map((key) => (
          <div key={key}>
            <h2 className="text-lg font-semibold text-gray-700">{key.toUpperCase()}</h2>
            <p className="text-gray-900">{results[key] || 'No data provided'}</p>
          </div>
        ))}
        <button
          onClick={() => redirectToCompletionPage('G')}
          className="mt-4 px-4 py-2 bg-yellow-500 text-black rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          Go Back to Part G
        </button>
      </div>

      {/* PART H */}
      <div className="space-y-4 mt-8">
        <h2 className="text-xl font-bold text-gray-800">Part H</h2>
        {Array.from({ length: 5 }, (_, i) => `h${i + 1}`).map((key) => (
          <div key={key}>
            <h2 className="text-lg font-semibold text-gray-700">{key.toUpperCase()}</h2>
            <p className="text-gray-900">{results[key] || 'No data provided'}</p>
          </div>
        ))}
        <button
          onClick={() => redirectToCompletionPage('H')}
          className="mt-4 px-4 py-2 bg-yellow-500 text-black rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          Go Back to Part H
        </button>
      </div>

      {/* PART I */}
      <div className="space-y-4 mt-8">
        <h2 className="text-xl font-bold text-gray-800">Part I</h2>
        {Array.from({ length: 5 }, (_, i) => `i${i + 1}`).map((key) => (
          <div key={key}>
            <h2 className="text-lg font-semibold text-gray-700">{key.toUpperCase()}</h2>
            <p className="text-gray-900">{results[key] || 'No data provided'}</p>
          </div>
        ))}
        <button
          onClick={() => redirectToCompletionPage('I')}
          className="mt-4 px-4 py-2 bg-yellow-500 text-black rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          Go Back to Part I
        </button>
      </div>

      {/* Existing Download JSON button */}
      <button
        onClick={handleDownload}
        className="mt-8 px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
      >
        Download JSON
      </button>

      {/* Claim Rewards button */}
      <div className="mt-4">
        <button
          onClick={handleClaimRewards}
          className="px-4 py-2 bg-green-500 text-white rounded-md shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          Claim Rewards
        </button>
      </div>
    </div>
  </div>
);

}
