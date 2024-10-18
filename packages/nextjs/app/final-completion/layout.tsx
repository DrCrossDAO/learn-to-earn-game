import React from 'react';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800">
      <div className="w-full max-w-4xl p-8 bg-white rounded shadow-md">
        {children}
      </div>
      
    </div>
  );
}
