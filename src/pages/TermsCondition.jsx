// TermsAndConditions.jsx
import React from 'react';

const TermsConditions = () => {
  return (
    <section className="py-30 px-4 md:px-8 max-w-4xl mx-auto">
      <div className="flex flex-col gap-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
        </div>

        {/* Terms and Conditions Content */}
        <div className="space-y-8">
          {/* Introduction */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
            <p className="mb-4">
              These Terms and Conditions govern your use of our website and services. By accessing or using our services, you agree to these terms.
            </p>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">2. Services</h2>
            <p className="mb-4">
              We offer design, development, and marketing services tailored to clients' needs. Service specifics, timelines, and deliverables will be defined in the project agreement.
            </p>
          </div>

          {/* Payment Terms */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">3. Payment Terms</h2>
            <p className="mb-4">
              Payments must be made as per the agreed schedule. Late payments may result in service suspension.
            </p>
          </div>

          {/* Client Responsibilities */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">4. Client Responsibilities</h2>
            <p className="mb-4">
              Clients must provide necessary information, feedback, and approvals in a timely manner to ensure smooth project execution.
            </p>
          </div>

          {/* Intellectual Property */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">5. Intellectual Property</h2>
            <p className="mb-4">
              All materials created by us remain our property until full payment is received. Upon payment, ownership rights are transferred to the client.
            </p>
          </div>

          {/* Refund Policy */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">6. Refund Policy</h2>
            <p className="mb-4">
              Refunds are only applicable if a project is canceled before work begins or if there is a failure to deliver as agreed.
            </p>
          </div>

          {/* Liability Limitation */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">7. Liability Limitation</h2>
            <p className="mb-4">
              We are not liable for any indirect, incidental, or consequential damages resulting from service use.
            </p>
          </div>

          {/* Changes to Terms */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">8. Changes to Terms</h2>
            <p className="mb-4">
              We reserve the right to modify these Terms and Conditions at any time. Continued use of services constitutes acceptance of the revised terms.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TermsConditions;