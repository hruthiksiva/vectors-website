// App.jsx
import React from 'react';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="font-sans bg-white min-h-screen flex flex-col m-2 pt-10 md:m-5 md:pt-20 md:mx-8">
      {/* Main Content */}
      <main className="flex-grow">
        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <ContactSection />
        </motion.div>

        <hr className="border-neutral-200" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <FAQSection />
        </motion.div>
      </main>
    </div>
  );
};

export default Contact;
