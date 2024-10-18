"use client";

import { useState, useEffect } from "react";
import type { NextPage } from "next";
import { useRouter } from 'next/navigation';
import { useAccount } from "wagmi";
import { useDeployedContractInfo, useScaffoldReadContract, useScaffoldWriteContract } from "~~/hooks/scaffold-eth";
import { useWatchBalance } from "~~/hooks/scaffold-eth/useWatchBalance";

const ClaimCase: NextPage = () => {
  const [projectName, setProjectName] = useState<string | null>("");
  const [projectWebsite, setProjectWebsite] = useState<string | null>("");

  const { address } = useAccount();
  const router = useRouter(); // Initialize useRouter

  const { data: caseTokenSymbol } = useScaffoldReadContract({
    contractName: "CaseToken",
    functionName: "symbol",
  });

  const { data: caseTokenBalance } = useScaffoldReadContract({
    contractName: "CaseToken",
    functionName: "balanceOf",
    args: [address],
  });

  const { data: vendorContractData } = useDeployedContractInfo("Vendor");
  const { writeContractAsync: writeVendorAsync } = useScaffoldWriteContract("Vendor");

  const { data: vendorTokenBalance } = useScaffoldReadContract({
    contractName: "CaseToken",
    functionName: "balanceOf",
    args: [vendorContractData?.address],
  });

  const { data: vendorEthBalance } = useWatchBalance({ address: vendorContractData?.address });

  useEffect(() => {
    setProjectName(localStorage.getItem("project-nameInput"));
    setProjectWebsite(localStorage.getItem("project-websiteInput"));
  }, []);

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        
        {/* Congratulations Box */}
        <div className="flex flex-col items-center bg-base-100 shadow-lg shadow-secondary border-8 border-secondary rounded-xl p-6 mb-8 w-full max-w-lg">
          <div className="text-xl font-bold">Your claim has been submitted for validation</div>
          
        </div>

        

        {/* Claim CASE Tokens */}
        <div className="flex flex-col items-center space-y-4 bg-base-100 shadow-lg shadow-secondary border-8 border-secondary rounded-xl p-6 mt-8 w-full max-w-lg">
          <div className="text-xl"></div>
          <div className="text-xl font-bold">What happens next?</div>
            <div className="text-xl">Your matter has been packaged into a ClaimNFT for privacy, security & legal process control.</div>
          <div className="text-xl">Validators will verify the chain-based allegations.</div>
            <div className="text-xl">You will receive an email notifying you when the validators have completed their work.</div>
              <div className="text-xl">You will be offered the opportunity to delegate access to your encrypted claim files to selected attorneys and investors.</div>
              <div className="text-xl">CASE token is used to bind Cryptolawyer marketplace contracts.</div>
              <div className="text-xl">Collect your CASE tokens by clicking the Get CASE Tokens button below.</div>

          <button
            className="btn btn-primary mt-2"
            onClick={async () => {
              try {
                await writeVendorAsync({ functionName: "buyTokens", value: 0 }); // Free claim
                
              } catch (err) {
                console.error("Error calling buyTokens function", err);
              }
            }}
          >
            Get CASE Tokens
          </button>
        </div>

      </div>
    </>
  );
};

export default ClaimCase;
