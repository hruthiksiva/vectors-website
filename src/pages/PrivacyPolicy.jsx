// PrivacyPolicy.jsx
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <section className="py-30 px-4 md:px-8 max-w-4xl mx-auto">
      <div className="flex flex-col gap-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          {/* Introduction */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
            <p className="mb-4">
              We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or use our services.
            </p>
          </div>

          {/* Information We Collect */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">2. Information We Collect</h2>
            <p className="mb-4">
              We may collect personal information such as your name, email address, phone number, company details, and payment information. Additionally, we collect non-personal information such as IP addresses, cookies, and analytics data.
            </p>
          </div>

          {/* How We Use Your Information */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">3. How We Use Your Information</h2>
            <p className="mb-4">
              We use your information to:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Provide and improve our services</li>
              <li>Process transactions and send invoices</li>
              <li>Respond to inquiries and customer support requests</li>
              <li>Send marketing communications with your consent</li>
              <li>Comply with legal obligations</li>
            </ul>
          </div>

          {/* Data Protection */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">4. Data Protection</h2>
            <p className="mb-4">
              We implement security measures to protect your personal information from unauthorized access, alteration, or disclosure.
            </p>
          </div>

          {/* Third-Party Sharing */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">5. Third-Party Sharing</h2>
            <p className="mb-4">
              We do not sell, trade, or rent your personal information. However, we may share data with third-party service providers for analytics, payment processing, and marketing purposes.
            </p>
          </div>

          {/* Your Rights */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">6. Your Rights</h2>
            <p className="mb-4">
              You have the right to request access, correction, or deletion of your personal information. You may also opt out of marketing emails at any time.
            </p>
          </div>

          {/* Updates to This Policy */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">7. Updates to This Policy</h2>
            <p className="mb-4">
              We may update this Privacy Policy from time to time. Any changes will be posted on our website.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;