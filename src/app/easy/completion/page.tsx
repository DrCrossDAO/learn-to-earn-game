"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CompletionPage() {
  const [score, setScore] = useState(0);
  const router = useRouter();

  useEffect(() => {
    // Define correct answers
    const correctAnswers = {
      easy_1_answer: 'c',
      easy_2_answer: 'b',
      easy_3_answer: 'b',
      easy_4_answer: 'a',
      easy_5_answer: 'b',
      easy_6_answer: 'a',
      easy_7_answer: 'a',
      easy_8_answer: 'b',
      easy_9_answer: 'b',
      easy_10_answer: 'b',
      easy_11_answer: 'a',
      easy_12_answer: 'b',
      easy_13_answer: 'b',
      easy_14_answer: 'b',
      easy_15_answer: 'b',
    };

    // Retrieve user answers from localStorage and calculate score
    let correctCount = 0;
    let totalQuestions = Object.keys(correctAnswers).length;

    Object.entries(correctAnswers).forEach(([key, correctAnswer]) => {
      const userAnswer = localStorage.getItem(key);
      if (userAnswer === correctAnswer) {
        correctCount += 1;
      }
    });

    // Set score as a percentage
    setScore((correctCount / totalQuestions) * 100);
  }, []);

  const handleTryAgain = () => {
    // Clear the answers and restart the quiz
    Object.keys(localStorage).forEach((key) => {
      if (key.startsWith('easy_')) {
        localStorage.removeItem(key);
      }
    });
    router.push('/easy/1'); // Redirect to the first easy question
  };

  const handleChallengeQuestions = () => {
    router.push('/challenge/1'); // Redirect to the first challenge question
  };

  return (
    <div className="container mx-auto p-6">
      <div className="max-w-2xl mx-auto mb-12 text-center">
        <h1 className="text-2xl font-semibold text-white mb-4">Quiz Complete</h1>
        <p className="text-lg text-gray-300 mb-6">
          You scored <span className="font-bold">{score.toFixed(0)}%</span> correct!
        </p>
        <div className="space-y-4">
          <button
            onClick={handleTryAgain}
            className="px-4 py-2 bg-yellow-500 text-black rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            Try Again
          </button>
          <button
            onClick={handleChallengeQuestions}
            className="ml-4 px-4 py-2 bg-yellow-500 text-black rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            Continue to Challenge Questions
          </button>
        </div>
      </div>
    </div>
  );
}
