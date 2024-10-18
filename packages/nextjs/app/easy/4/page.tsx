"use client"; // This enables client-side rendering

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const QuestionPage4 = () => {
  const router = useRouter(); // Using the new App Router hook
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  // Save the answer to localStorage and navigate to the next question (easy/5)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission
    if (selectedAnswer) {
      localStorage.setItem('easy_4_answer', selectedAnswer); // Store answer in localStorage
      router.push('/easy/5'); // Navigate to easy/5
    } else {
      alert('Please select an answer before proceeding.');
    }
  };

  return (
    <div className="flex items-center flex-col flex-grow pt-10">
      {/* Question Box */}
      <div className="flex flex-col items-center bg-base-100 shadow-lg shadow-secondary border-8 border-secondary rounded-xl p-6 mb-8 w-full max-w-lg text-center">
        <h1 className="text-2xl font-bold mb-4">
          How does decentralization in blockchain prevent false statements in legal and commercial contexts?
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
              False statements are easy to detect and disprove as blockchain creates a transparent, tamper-proof record of all transactions
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
              False statements can be hidden by powerful users
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
              Decentralization has no effect on detecting false claims
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

export default QuestionPage4;
