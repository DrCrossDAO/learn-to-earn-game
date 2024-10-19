"use client";

import 'normalize.css/normalize.css';
import '../../_assets/globals.css';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-800 text-lightText flex items-center justify-center"> {/* Dark background and light text */}
      <div className="w-full max-w-lg p-6 bg-gray-900 rounded-lg shadow-lg text-center"> {/* Slightly lighter background for content */}
        {children}
      </div>
    </div>
  );
}
