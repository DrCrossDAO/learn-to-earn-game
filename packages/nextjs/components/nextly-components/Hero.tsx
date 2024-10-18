"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter from the app router
import { Container } from "@/components/nextly-components/Container";
import Image from "next/image";
import AirtableModal from "@/components/nextly-components/AirtableModal"; // Import AirtableModal

// Import your SVG images
import bitcoinLogo from "../../public/img/brands/bitcoin.svg";
import ethereumLogo from "../../public/img/brands/ethereum.svg";
import avalancheLogo from "../../public/img/brands/avalanche.svg";
import cardanoLogo from "../../public/img/brands/cardano.svg";
import solanaLogo from "../../public/img/brands/solana.svg";

export const Hero = () => {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter(); // Initialize useRouter

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleButtonClick1 = () => {
    router.push("/easy/1"); // Redirect to app/easy/1
  };
  const handleButtonClick2 = () => {
    router.push("/Part_A/a1"); // Redirect to app/easy/1
  };

  return (
    <>
      <Container className="flex flex-wrap justify-center items-center text-center">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-white lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              (code + law) x (games)
            </h1>
            <p className="py-5 text-xl leading-normal text-white lg:text-xl xl:text-2xl dark:text-gray-300">
              CryptoLawyer.net
            </p>

            {/* Add Button to Launch Token Trials Academy */}
            <div>
            <button
              onClick={handleButtonClick1}
              className="mt-4 px-6 py-2 bg-yellow-500 text-black rounded-full hover:bg-blue-700"
            >
              Token Trials Academy
            </button>
            </div>
            <div>
            <button
              onClick={handleButtonClick2}
              className="mt-4 px-6 py-2 bg-yellow-500 text-black rounded-full hover:bg-blue-700"
            >
              Blanca Whitepaper Assistant
            </button>
            </div>
          </div>
        </div>
      </Container>

      <Container>
        <div className="flex flex-col justify-center">
          <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around">
            <div className="pt-2 text-gray-400 dark:text-gray-400">
              <Image src={bitcoinLogo} alt="Bitcoin Logo" width={50} height={50} />
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              <Image src={ethereumLogo} alt="Ethereum Logo" width={50} height={50} />
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              <Image src={avalancheLogo} alt="Avalanche Logo" width={50} height={50} />
            </div>
            <div className="pt-1 text-gray-400 dark:text-gray-400">
              <Image src={cardanoLogo} alt="Cardano Logo" width={50} height={50} />
            </div>
            <div className="pt-2 text-gray-400 dark:text-gray-400">
              <Image src={solanaLogo} alt="Solana Logo" width={50} height={50} />
            </div>
          </div>
        </div>
      </Container>

      
    </>
  );
};
