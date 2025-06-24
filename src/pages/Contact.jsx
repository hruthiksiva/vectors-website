// App.jsx
import React from 'react';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';

const Contact = () => {
  return (
    <div className="font-sans bg-white min-h-screen flex flex-col m-2 pt-10 md:m-5 md:pt-20 md:mx-8">
      {/* Main Content */}
      <main className="flex-grow">
        {/* Contact Section */}
        <ContactSection />
        <hr className="border-neutral-200" />
        <FAQSection />
      </main>
    </div>
  );
};

export default Contact;