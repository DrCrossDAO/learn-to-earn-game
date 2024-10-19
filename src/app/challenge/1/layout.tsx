import 'normalize.css/normalize.css';
import '../../_assets/globals.css';
import { ReactNode } from 'react';  // Import ReactNode for typing 'children'

interface LayoutProps {
  children: ReactNode;  // Define the type of 'children'
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-800 text-lightText flex items-center justify-center">
      {/* Dark background and light text */}
      <div className="w-full max-w-lg p-6 bg-gray-900 rounded-lg shadow-lg text-center">
        {children}
      </div>
    </div>
  );
}
