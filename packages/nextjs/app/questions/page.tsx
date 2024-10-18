"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Popup1 from './popup1';
import Popup2 from './popup2';

const QuestionnairePage = () => {
  const [email, setEmail] = useState('');
  const [fullLegalName, setFullLegalName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [defendantName, setDefendantName] = useState('');
  const [defendantWalletAddresses, setDefendantWalletAddresses] = useState('');
  const [stakeholderNames, setStakeholderNames] = useState('');
  const [allegations, setAllegations] = useState('');
  const [arrearageDate, setArrearageDate] = useState('');
  const [arrearageAmount, setArrearageAmount] = useState('');
  const [arrearageCurrency, setArrearageCurrency] = useState('');
  const [contractFile, setContractFile] = useState(null); // Contract upload
  const [additionalDoc, setAdditionalDoc] = useState(null); // Additional doc upload
  
  const [showPopup1, setShowPopup1] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);
  const [showPopup3, setShowPopup3] = useState(false);
  const [showPopup4, setShowPopup4] = useState(false);
  const [showPopup5, setShowPopup5] = useState(false);
  const [showPopup6, setShowPopup6] = useState(false);
  const [showPopup7, setShowPopup7] = useState(false);
  const [showPopup8, setShowPopup8] = useState(false);
  const [showPopup9, setShowPopup9] = useState(false);
  const [showPopup10, setShowPopup10] = useState(false);
  const [showPopup11, setShowPopup11] = useState(false);
  const [showPopup12, setShowPopup12] = useState(false);

  
  const router = useRouter();

  const handleFileUpload = (e, setFileState) => {
    const file = e.target.files[0];
    setFileState(file);
    // For now, you can handle the file by uploading it to a backend, saving it to localStorage, or processing it as needed
    console.log('File selected:', file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save inputs to localStorage
    localStorage.setItem('emailInput', email);
    localStorage.setItem('full-legal-nameInput', fullLegalName);
    localStorage.setItem('phone-numberInput', phoneNumber);
    localStorage.setItem('defendant-nameInput', defendantName);
    localStorage.setItem('defendant-wallet-addressesInput', defendantWalletAddresses);
    localStorage.setItem('stakeholder-namesInput', stakeholderNames);
    localStorage.setItem('allegationsInput', allegations);
    localStorage.setItem('arrearage-dateInput', arrearageDate);
    localStorage.setItem('arrearage-amountInput', arrearageAmount);
    localStorage.setItem('arrearage-currencyInput', arrearageCurrency);
    
    
    // You may want to handle the file upload here too, for now, just logging
    console.log("Contract file:", contractFile);
    console.log("Additional document:", additionalDoc);
    
    router.push('/create-claim');
  };
return (

  <div className="flex items-center flex-col flex-grow pt-10">
    {/* Email Address */}
    <div className="flex flex-col items-center bg-base-100 shadow-lg shadow-secondary border-8 border-secondary rounded-xl p-6 mb-8 w-full max-w-lg">
      <div className="text-xl font-bold mb-2">GET STARTED</div>
    <div className="text-xl font-bold mb-2">Answer questions about your claim</div>
      <div className="text-xl mb-2">Upload documentation.</div>
      <div className="text-xl mb-2">Your data is encrypted, hashed and deployed to IPFS for privacy, security and process control.</div>
      <div className="text-xl mb-2"> CryptoLawyer.net does not maintain a copy of your claim information.</div>
       <div className="text-xl mb-2">Delegated access to your data is managed by an ERC721 ClaimNFT.</div>
       <div className="text-xl mb-2">Your claim processes and litigation costs are managed by CASE tokens.</div>
       <div className="text-xl mb-2">After submitting your claim for validation, you will be able to get CASE tokens in order to delegate access and bind agreements related to your claim.</div>
      
    </div>
      {/* Email Address */}
    <div className="flex flex-col items-center bg-base-100 shadow-lg shadow-secondary border-8 border-secondary rounded-xl p-6 mb-8 w-full max-w-lg">
      <div className="text-xl font-bold mb-2"> Disclaimer: Not Legal Advice</div>
      <div className="text-xl mb-2"> The information provided on this platform, including but not limited to documentation, resources, or any written content, is for general informational purposes only and is not intended to be, nor should it be construed as, legal advice. This platform does not establish any attorney-client relationship between the user and the platform or its developers.</div>
      <div className="text-xl mb-2">If you need legal advice regarding any specific legal matters, please consult a licensed attorney who is qualified to provide legal services in your jurisdiction. The creators and operators of this platform expressly disclaim any and all liability concerning actions taken or not taken based on the content available on this platform.</div>
    </div>
    {/* Email Address */}
    <div className="flex flex-col items-center bg-base-100 shadow-lg shadow-secondary border-8 border-secondary rounded-xl p-6 mb-8 w-full max-w-lg">
      <div className="text-xl font-bold mb-2">Email Address</div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="p-2 flex-grow border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-white text-black"
      />
      
    </div>

    {/* Full Legal Name */}
    <div className="flex flex-col items-center bg-base-100 shadow-lg shadow-secondary border-8 border-secondary rounded-xl p-6 mb-8 w-full max-w-lg">
      <div className="text-xl font-bold mb-2">Your Full Legal Name</div>
      <input
        type="text"
        value={fullLegalName}
        onChange={(e) => setFullLegalName(e.target.value)}
        className="p-2 flex-grow border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-white text-black"
      />
    </div>

    {/* Phone Number */}
    <div className="flex flex-col items-center bg-base-100 shadow-lg shadow-secondary border-8 border-secondary rounded-xl p-6 mb-8 w-full max-w-lg">
      <div className="text-xl font-bold mb-2">Phone Number</div>
      <input
        type="text"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        className="p-2 flex-grow border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-white text-black"
      />
    </div>

    {/* Defendant Name */}
    <div className="flex flex-col items-center bg-base-100 shadow-lg shadow-secondary border-8 border-secondary rounded-xl p-6 mb-8 w-full max-w-lg">
      <div className="text-xl font-bold mb-2">Defendant Name</div>
      <input
        type="text"
        value={defendantName}
        onChange={(e) => setDefendantName(e.target.value)}
        className="p-2 flex-grow border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-white text-black"
      />
    </div>

    {/* Defendant Wallet Addresses */}
    <div className="flex flex-col items-center bg-base-100 shadow-lg shadow-secondary border-8 border-secondary rounded-xl p-6 mb-8 w-full max-w-lg">
      <div className="text-xl font-bold mb-2">Defendant Wallet Addresses</div>
      <input
        type="text"
        value={defendantWalletAddresses}
        onChange={(e) => setDefendantWalletAddresses(e.target.value)}
        className="p-2 flex-grow border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-white text-black"
      />
    </div>

    {/* Stakeholder Names */}
    <div className="flex flex-col items-center bg-base-100 shadow-lg shadow-secondary border-8 border-secondary rounded-xl p-6 mb-8 w-full max-w-lg">
      <div className="text-xl font-bold mb-2">Stakeholder Names</div>
      <input
        type="text"
        value={stakeholderNames}
        onChange={(e) => setStakeholderNames(e.target.value)}
        className="p-2 flex-grow border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-white text-black"
      />
    </div>

    {/* Allegations */}
    <div className="flex flex-col items-center bg-base-100 shadow-lg shadow-secondary border-8 border-secondary rounded-xl p-6 mb-8 w-full max-w-lg">
      <div className="text-xl font-bold mb-2">Describe your allegations</div>
      <textarea
        value={allegations}
        onChange={(e) => setAllegations(e.target.value)}
        className="p-2 flex-grow border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-white text-black"
      />
    </div>

    {/* Date of Arrearage */}
    <div className="flex flex-col items-center bg-base-100 shadow-lg shadow-secondary border-8 border-secondary rounded-xl p-6 mb-8 w-full max-w-lg">
      <div className="text-xl font-bold mb-2">Date of Arrearage</div>
      <input
        type="date"
        value={arrearageDate}
        onChange={(e) => setArrearageDate(e.target.value)}
        className="p-2 flex-grow border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-white text-black"
      />
    </div>

    {/* Arrearage Amount */}
    <div className="flex flex-col items-center bg-base-100 shadow-lg shadow-secondary border-8 border-secondary rounded-xl p-6 mb-8 w-full max-w-lg">
      <div className="text-xl font-bold mb-2">Arrearage Amount</div>
      <input
        type="number"
        value={arrearageAmount}
        onChange={(e) => setArrearageAmount(e.target.value)}
        className="p-2 flex-grow border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-white text-black"
      />
    </div>

    {/* Arrearage Currency */}
    <div className="flex flex-col items-center bg-base-100 shadow-lg shadow-secondary border-8 border-secondary rounded-xl p-6 mb-8 w-full max-w-lg">
      <div className="text-xl font-bold mb-2">Arrearage Currency</div>
      <input
        type="text"
        value={arrearageCurrency}
        onChange={(e) => setArrearageCurrency(e.target.value)}
        className="p-2 flex-grow border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-white text-black"
      />
    </div>

    {/* Contract Upload */}
    <div className="flex flex-col items-center bg-base-100 shadow-lg shadow-secondary border-8 border-secondary rounded-xl p-6 mb-8 w-full max-w-lg">
      <div className="text-xl font-bold mb-2">Upload your contract</div>
      <input
        type="file"
        onChange={(e) => handleFileUpload(e, setContractFile)}
        className="p-2 flex-grow border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-white text-black"
      />
    </div>

    {/* Additional Documentation Upload */}
    <div className="flex flex-col items-center bg-base-100 shadow-lg shadow-secondary border-8 border-secondary rounded-xl p-6 mb-8 w-full max-w-lg">
      <div className="text-xl font-bold mb-2">Upload any other documentation you have</div>
      <input
        type="file"
        onChange={(e) => handleFileUpload(e, setAdditionalDoc)}
        className="p-2 flex-grow border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-white text-black"
      />
    </div>

    {/* Submit Button */}
    <button
      onClick={handleSubmit}
      className="px-4 py-2 bg-blue-700 text-white rounded-md shadow hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
    >
      Submit
    </button>

    {/* Popups */}
      {showPopup1 && <Popup1 onClose={() => setShowPopup1(false)} />}
      {showPopup2 && <Popup2 onClose={() => setShowPopup2(false)} />}
      {showPopup3 && <Popup3 onClose={() => setShowPopup3(false)} />}
      {showPopup4 && <Popup4 onClose={() => setShowPopup4(false)} />}
      {showPopup5 && <Popup5 onClose={() => setShowPopup5(false)} />}
      {showPopup6 && <Popup6 onClose={() => setShowPopup6(false)} />}
      {showPopup7 && <Popup7 onClose={() => setShowPopup7(false)} />}
      {showPopup8 && <Popup8 onClose={() => setShowPopup8(false)} />}
      {showPopup9 && <Popup9 onClose={() => setShowPopup9(false)} />}
      {showPopup10 && <Popup10 onClose={() => setShowPopup10(false)} />}
      {showPopup11 && <Popup11 onClose={() => setShowPopup11(false)} />}
      {showPopup12 && <Popup12 onClose={() => setShowPopup12(false)} />}

    </div>
  );
};

export default QuestionnairePage;