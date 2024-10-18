import React from 'react';

const PrivacyLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="privacy-layout" style={{
      backgroundColor: '#ffffff',
      color: '#000000',
      padding: '50px',
      fontFamily: 'Georgia, serif',
      lineHeight: '1.8',
      maxWidth: '800px',
      margin: '0 auto',
      border: '1px solid #ddd',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    }}>
      {/* Header is now empty, no duplicated title */}
      <main>
        {children}
      </main>
      
    </div>
  );
};

export default PrivacyLayout;
