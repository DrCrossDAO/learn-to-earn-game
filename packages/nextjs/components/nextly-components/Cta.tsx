"use client"
import React, { useState } from "react";
import { Container } from "@/components/nextly-components/Container";
import AirtableModal from "@/components/nextly-components/AirtableModal"; // Import the modal component

export const Cta = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <Container>
        <div className="flex flex-wrap items-center justify-center max-w-2xl gap-5 mx-auto text-white bg-yellow-500 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
          
          <div className="flex-shrink-0 w-full text-center lg:w-auto">
            <button
              onClick={toggleModal} // Toggle the modal on click
              className="inline-block py-3 mx-auto text-lg font-medium text-center text-black bg-white rounded-md px-7 lg:px-10 lg:py-5"
            >
             Subscribe to the CryptoLawyer.net newsletter!
            </button>
          </div>
        </div>
      </Container>

      {/* Render the AirtableModal and pass the showModal state */}
      {showModal && <AirtableModal isOpen={showModal} toggleModal={toggleModal} />}
    </>
  );
};
