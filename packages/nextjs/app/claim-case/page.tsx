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
          <div className="text-xl font-bold">Congratulations!</div>
          
        </div>

        

        {/* Claim CASE Tokens */}
        <div className="flex flex-col items-center space-y-4 bg-base-100 shadow-lg shadow-secondary border-8 border-secondary rounded-xl p-6 mt-8 w-full max-w-lg">
          <div className="text-xl">You have successfully completed</div>
          <div className="text-xl font-bold">Token Trials Module 1</div>
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
