"use client";

import { useEffect, useState } from "react";
import CryptoJS from "crypto-js";  // Import crypto-js for AES encryption
import type { NextPage } from "next";
import { notification } from "~~/utils/scaffold-eth";
import { addToIPFS } from "~~/utils/simpleNFT/ipfs-fetch";
import { useRouter } from 'next/navigation'; // Import useRouter for navigation

const IpfsUpload: NextPage = () => {
  const [email, setEmail] = useState<string | null>("");
  const [fullLegalName, setFullLegalName] = useState<string | null>("");
  const [phoneNumber, setPhoneNumber] = useState<string | null>("");
  const [defendantName, setDefendantName] = useState<string | null>("");
  const [defendantWalletAddresses, setDefendantWalletAddresses] = useState<string | null>("");
  const [stakeholderNames, setStakeholderNames] = useState<string | null>("");
  const [allegations, setAllegations] = useState<string | null>("");
  const [arrearageDate, setArrearageDate] = useState<string | null>("");
  const [arrearageAmount, setArrearageAmount] = useState<string | null>("");
  const [arrearageCurrency, setArrearageCurrency] = useState<string | null>("");
  const [loading, setLoading] = useState(false);
  const [uploadedIpfsPath, setUploadedIpfsPath] = useState("");
  const secretKey = "your-secret-key";  // Replace with a secure key

  const router = useRouter(); // For navigation after IPFS upload

  // Retrieve data from localStorage (data entered in QuestionnairePage)
  useEffect(() => {
    setFullLegalName(localStorage.getItem("full-legal-nameInput"));
    setEmail(localStorage.getItem("emailInput"));
    setPhoneNumber(localStorage.getItem("phone-numberInput"));
    setDefendantName(localStorage.getItem("defendant-nameInput"));
    setDefendantWalletAddresses(localStorage.getItem("defendant-wallet-addressesInput"));
    setStakeholderNames(localStorage.getItem("stakeholder-namesInput"));
    setAllegations(localStorage.getItem("allegationsInput"));
    setArrearageDate(localStorage.getItem("arrearage-dateInput"));
    setArrearageAmount(localStorage.getItem("arrearage-amountInput"));
    setArrearageCurrency(localStorage.getItem("arrearage-currencyInput"));
  }, []);



  const encryptData = (data: object) => {
    const stringifiedData = JSON.stringify(data);
    return CryptoJS.AES.encrypt(stringifiedData, secretKey).toString();  // Encrypt JSON with AES
  };

  const handleIpfsUpload = async () => {
    setLoading(true);
    const notificationId = notification.loading("Encrypting and uploading to IPFS...");

    try {
      // Prepare JSON to upload from the retrieved inputs
      const claimMetadata = {
        email,
        fullLegalName,
        phoneNumber,
        defendantName,
        defendantWalletAddresses,
        stakeholderNames,
        allegations,
        arrearageDate,
        arrearageAmount,
        arrearageCurrency
      };

      const encryptedData = encryptData(claimMetadata);  // Encrypt the JSON data before uploading
      const uploadedItem = await addToIPFS(encryptedData);  // Upload encrypted data to IPFS
      notification.remove(notificationId);
      notification.success("Encrypted and uploaded to IPFS");

      setUploadedIpfsPath(uploadedItem.path);
    } catch (error) {
      notification.remove(notificationId);
      notification.error("Error uploading to IPFS");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleNext = () => {
    router.push('/get-tokens');  // Navigate to /test when the "Next" button is clicked
  };

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <h1 className="text-center mb-4">
          <span className="block text-4xl font-bold">Create Claim</span>
        </h1>

        {/* Claim intake form answers (same layout as CreateClaim page) */}
        <div className="flex flex-col items-center bg-base-100 shadow-lg shadow-secondary border-8 border-secondary rounded-xl p-6 mb-8 w-full max-w-lg">
          <div className="text-xl font-bold mb-4">Your Submitted Information</div>

          <p><strong>Email:</strong> {email || 'Not provided'}</p>
          <p><strong>Full Legal Name:</strong> {fullLegalName || 'Not provided'}</p>
          <p><strong>Phone Number:</strong> {phoneNumber || 'Not provided'}</p>
          <p><strong>Defendant Name:</strong> {defendantName || 'Not provided'}</p>
          <p><strong>Defendant Wallet Addresses:</strong> {defendantWalletAddresses || 'Not provided'}</p>
          <p><strong>Stakeholder Names:</strong> {stakeholderNames || 'Not provided'}</p>
          <p><strong>Allegations:</strong> {allegations || 'Not provided'}</p>
          <p><strong>Date of Arrearage:</strong> {arrearageDate || 'Not provided'}</p>
          <p><strong>Arrearage Amount:</strong> {arrearageAmount || 'Not provided'}</p>
          <p><strong>Arrearage Currency:</strong> {arrearageCurrency || 'Not provided'}</p>
        </div>
        {/* Verify Claim Details */}
        <div className="flex flex-col items-center space-y-4 bg-base-100 shadow-lg shadow-secondary border-8 border-secondary rounded-xl p-6 mt-8 w-full max-w-lg">
          <div className="text-xl">To the best of my knowledge the above statements are true and accurate</div>
          
        </div>

        {/* Button to encrypt and upload to IPFS */}
        <button
          className={`btn btn-primary mt-4 ${loading ? "loading" : ""}`}
          disabled={loading}
          onClick={handleIpfsUpload}
        >
          Verify Claim
        </button>
        
     

        {/* IPFS link display */}
        {uploadedIpfsPath && (
          <div className="mt-4">
            <a href={`https://ipfs.io/ipfs/${uploadedIpfsPath}`} target="_blank" rel="noreferrer">
              {`https://ipfs.io/ipfs/${uploadedIpfsPath}`}
            </a>
          </div>
        )}
   {/* NEXT button */}
        <button
          className="btn btn-primary mt-8"
          onClick={handleNext}
        >
          Submit Claim for CryptoLawyer Network Validation
        </button>
        
      </div>
    </>
  );
};

export default IpfsUpload;
