"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CompletionPage() {
  const [overallScore, setOverallScore] = useState(0);
  const [easyScore, setEasyScore] = useState(0);
  const [challengeScore, setChallengeScore] = useState(0);
  const router = useRouter();

  useEffect(() => {
    // Define correct answers for easy and challenge questions
    const correctEasyAnswers = {
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

    const correctChallengeAnswers = {
      challenge_1_answer: 'b',
      challenge_2_answer: 'b',
      challenge_3_answer: 'b',
      challenge_4_answer: 'a',
      challenge_5_answer: 'b',
    };

    // Calculate easy score
    let correctEasyCount = 0;
    let totalEasyQuestions = Object.keys(correctEasyAnswers).length;

    Object.entries(correctEasyAnswers).forEach(([key, correctAnswer]) => {
      const userAnswer = localStorage.getItem(key);
      if (userAnswer === correctAnswer) {
        correctEasyCount += 1;
      }
    });

    // Calculate challenge score
    let correctChallengeCount = 0;
    let totalChallengeQuestions = Object.keys(correctChallengeAnswers).length;

    Object.entries(correctChallengeAnswers).forEach(([key, correctAnswer]) => {
      const userAnswer = localStorage.getItem(key);
      if (userAnswer === correctAnswer) {
        correctChallengeCount += 1;
      }
    });

    // Calculate scores as percentages
    const easyPercentage = (correctEasyCount / totalEasyQuestions) * 100;
    const challengePercentage = (correctChallengeCount / totalChallengeQuestions) * 100;
    const overallPercentage = ((correctEasyCount + correctChallengeCount) / (totalEasyQuestions + totalChallengeQuestions)) * 100;

    // Set scores in state
    setEasyScore(easyPercentage);
    setChallengeScore(challengePercentage);
    setOverallScore(overallPercentage);
  }, []);

  const handleTryAgain = () => {
    // Clear the challenge answers and restart the challenge
    Object.keys(localStorage).forEach((key) => {
      if (key.startsWith('challenge_')) {
        localStorage.removeItem(key);
      }
    });
    router.push('/challenge/1'); // Redirect to the first challenge question
  };

  const handleClaimRewards = () => {
    router.push('/claim-case'); // Redirect to the rewards claim page
  };

  return (
    <div className="container mx-auto p-6">
      <div className="max-w-2xl mx-auto mb-12 text-center">
        <h1 className="text-2xl font-semibold text-white mb-4">Challenge Complete</h1>
        <p className="text-lg text-gray-300 mb-6">
          Your overall score: <span className="font-bold">{overallScore.toFixed(0)}%</span>
        </p>
        <p className="text-lg text-gray-300 mb-4">
          Challenge questions correct: <span className="font-bold">{challengeScore.toFixed(0)}%</span>
        </p>
        <p className="text-lg text-gray-300 mb-8">
          Easy questions correct: <span className="font-bold">{easyScore.toFixed(0)}%</span>
        </p>
        <div className="space-y-4">
          <button
            onClick={handleTryAgain}
            className="px-4 py-2 bg-yellow-500 text-black rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            Try Again
          </button>
          <button
            onClick={handleClaimRewards}
            className="ml-4 px-4 py-2 bg-yellow-500 text-black rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            Claim Rewards
          </button>
        </div>
      </div>
    </div>
  );
}
