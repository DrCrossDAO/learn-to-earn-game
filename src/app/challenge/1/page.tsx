"use client"; // Enables client-side rendering

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter hook
import Popup from './popup';

const QuestionPage1 = () => {
  const router = useRouter(); // Initialize router for navigation
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedAnswer) {
      localStorage.setItem('challenge_1_answer', selectedAnswer);
      router.push('/challenge/2'); // Redirect to the next challenge (change to the correct path)
    } else {
      alert('Please select an answer before proceeding.');
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex items-center flex-col flex-grow pt-10">
      {/* Question Box */}
      <div className="flex flex-col items-center bg-base-100 shadow-lg shadow-secondary border-8 border-secondary rounded-xl p-6 mb-8 w-full max-w-lg text-center">
        <h1 className="text-2xl font-bold mb-4">
          How does the Ethereum Virtual Machine (EVM) contribute to blockchain development?
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
              It limits the types of smart contracts that can be executed on the Ethereum network.
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
              It is a decentralized computing environment that executes smart contracts across the Ethereum network.
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
              It centralizes blockchain data to make it more efficient.
            </label>
          </div>
          <button type="submit" className="btn bg-highlight text-black mt-4 w-full">
            Submit Answer
          </button>
        </form>
        {/* Popup Button */}
        <button
          onClick={openModal}
          className="ml-4 px-4 py-2 bg-yellow-500 text-black rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 mt-4"
        >
          Help
        </button>
      </div>

      {/* Popup Modal */}
      {isModalOpen && <Popup helpText="Here is the information about the question." closePopup={closeModal} />}
    </div>
  );
};

export default QuestionPage1;
