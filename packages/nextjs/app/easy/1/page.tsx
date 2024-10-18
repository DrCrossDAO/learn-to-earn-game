"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const QuestionPage1 = () => {
  const router = useRouter(); // Using the new App Router hook
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  // Save the answer to localStorage and navigate to the next question (easy/2)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission
    if (selectedAnswer) {
      localStorage.setItem('easy_1_answer', selectedAnswer); // Store answer in localStorage
      router.push('/easy/2'); // Navigate to easy/2
    } else {
      alert('Please select an answer before proceeding.');
    }
  };

  return (
    <div className="flex items-center flex-col flex-grow pt-10">
      {/* Question Box */}
      <div className="flex flex-col items-center bg-base-100 shadow-lg shadow-secondary border-8 border-secondary rounded-xl p-6 mb-8 w-full max-w-lg text-center">
        <h1 className="text-2xl font-bold mb-4">What is cryptolaw?</h1>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="answer"
                value="a"
                onChange={() => setSelectedAnswer('a')}
                checked={selectedAnswer === 'a'}
              />
              A set of global regulations governing cryptocurrency
            </label>
          </div>
          <div className="mb-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="answer"
                value="b"
                onChange={() => setSelectedAnswer('b')}
                checked={selectedAnswer === 'b'}
              />
              A system that combines technology, regulations, and intelligence management
            </label>
          </div>
          <div className="mb-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="answer"
                value="c"
                onChange={() => setSelectedAnswer('c')}
                checked={selectedAnswer === 'c'}
              />
              The principle that "code is law," where smart contracts are self-executing and final
            </label>
          </div>
          <button
            type="submit"
            className="btn btn-primary mt-4 w-full"
          >
            Submit Answer
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuestionPage1;
