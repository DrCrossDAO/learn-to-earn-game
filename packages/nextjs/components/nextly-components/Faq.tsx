"use client";
import React, { useState } from "react";
import { Container } from "@/components/nextly-components/Container";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <div
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center bg-gray-800 p-4 rounded-lg cursor-pointer dark:bg-gray-800"
            >
              <h3 className="text-lg font-medium text-white dark:text-gray-100">
                {item.question}
              </h3>
              <ChevronUpIcon
                className={`h-6 w-6 transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </div>

            {openIndex === index && (
              <div className="mt-2 p-4 bg-gray-100 rounded-lg dark:bg-gray-700">
                <p className="text-gray-700 dark:text-gray-300">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </Container>
  );
};

const faqdata = [
  {
    question: "Token Trials",
    answer:
      "Learn to earn game enhances market integrity and trains legal matter validators",
  },
  {
    question: "Gamified Litigation Finance",
    answer:
      "Competitive marketplace enhances efficiency & outcomes",
  },
  {
    question: "Tokenization",
    answer:
      "ERC20 & ERC721 power legal operations and enable multi-jurisdiction matter & cost management",
  },
  {
    question: "Cryptolawyer.net DAO",
    answer:
      "Global Multichain Evidence Validators & Governance Community",
  },
];
