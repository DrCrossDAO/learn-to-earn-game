import React from 'react';
import PrivacyLayout from './layout'; // assuming layout.tsx is in the same folder

const PrivacyPolicy = () => {
  return (
    <PrivacyLayout>
      <h1 style={{ textAlign: 'center', fontWeight: 'bold' }}>Cryptolawyer.net</h1>
      <h2 style={{ textAlign: 'center', fontWeight: 'bold' }}>Privacy Policy</h2>
      <p><strong>Effective Date:</strong> September 24, 2024</p>
      <p><strong>Last Updated:</strong> September 24, 2024</p>

      <h2>1. Introduction</h2>
      <p>This Privacy Policy explains how Cryptolawyer.net ("we," "us," or "our") collects, uses, discloses, and protects your personal data when you visit or use our services, which include blockchain and decentralized technologies.</p>
      <p>By using our services, you agree to the collection and use of your information in accordance with this Privacy Policy. If you do not agree with this policy, please do not use our services.</p>

      <h2>2. Information We Collect</h2>
      
      <h3>a. Information You Provide</h3>
      <p>We may collect personal identification information when you interact with us. This may include your name, email address, and other contact information you voluntarily provide when creating an account, subscribing to our newsletter, or using our services.</p>

      <h3>b. Information Collected Automatically</h3>
      <p>We may collect information about your device and how you interact with our site, such as your IP address, browser type, operating system, and usage information. We may also collect data through cookies and similar tracking technologies to improve user experience.</p>

      <h3>c. Information from Blockchain Interactions</h3>
      <p>Since our services use blockchain technology, any blockchain transactions you engage in are stored on a public ledger and may be viewed by anyone. We may also collect data from these transactions, such as your wallet address and transaction details.</p>

      <h2>3. How We Use Your Information</h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Provide and maintain our services.</li>
        <li>Notify you about changes to our services or products.</li>
        <li>Allow you to participate in interactive features.</li>
        <li>Improve our website and marketing efforts.</li>
        <li>Comply with legal obligations related to blockchain transactions.</li>
      </ul>

      <h2>4. How We Share Your Information</h2>
      
      <h3>a. With Service Providers</h3>
      <p>We may share your personal data with third-party service providers that help us operate our site, provide analytics, and enhance our services. These service providers may have access to your personal information only to perform tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>

      <h3>b. For Legal Reasons</h3>
      <p>We may disclose your information to comply with legal obligations, protect our rights, or prevent fraud and security issues. Additionally, any data stored on the blockchain cannot be deleted or altered due to the nature of blockchain technology.</p>

      <h2>5. Your Rights</h2>
      <p>You have the right to request access to the personal data we hold about you, as well as ask for corrections or deletions. However, please note that blockchain data is immutable and cannot be changed or deleted after it has been recorded.</p>

      <h2>6. Data Retention</h2>
      <p>We retain your personal data for as long as necessary to provide our services, fulfill legal requirements, or protect our rights. Once data is no longer necessary, we will securely delete or anonymize it, except for information stored on public blockchains.</p>

      <h2>7. Security</h2>
      <p>We take the security of your personal data seriously and implement reasonable safeguards to protect it from unauthorized access or disclosure. However, no method of transmission or storage is completely secure, particularly when dealing with blockchain transactions, which are publicly viewable.</p>

      <h2>8. Changes to This Privacy Policy</h2>
      <p>We may update this Privacy Policy periodically to reflect changes in our practices or legal obligations. When changes are made, we will post the updated policy on this page with a new effective date. We encourage you to review this Privacy Policy regularly.</p>

      <h2>9. Contact Us</h2>
<p>If you have any questions or concerns about this Privacy Policy, please <a href="mailto:info@cryptolawyer.net" style={{ color: 'blue', textDecoration: 'underline' }}>contact us</a>.</p>

         </PrivacyLayout>
  );
};

export default PrivacyPolicy;
