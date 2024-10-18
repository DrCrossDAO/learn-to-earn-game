"use client"; // This enables client-side rendering

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const QuestionPage10 = () => {
  const router = useRouter(); // Using the new App Router hook
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  // Save the answer to localStorage and navigate to the next question (easy/11)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission
    if (selectedAnswer) {
      localStorage.setItem('easy_10_answer', selectedAnswer); // Store answer in localStorage
      router.push('/easy/11'); // Navigate to easy/11
    } else {
      alert('Please select an answer before proceeding.');
    }
  };

  return (
    <div className="flex items-center flex-col flex-grow pt-10">
      {/* Question Box */}
      <div className="flex flex-col items-center bg-base-100 shadow-lg shadow-secondary border-8 border-secondary rounded-xl p-6 mb-8 w-full max-w-lg text-center">
        <h1 className="text-2xl font-bold mb-4">
          What is FINTRAC's role in regulating cryptocurrencies in Canada?
        </h1>
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
              To ban all cryptocurrency activities in Canada
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
              To monitor financial transactions and enforce anti-money laundering (AML) regulations
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
              To oversee blockchain technology development
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

export default QuestionPage10;
