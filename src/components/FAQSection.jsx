import React, { useState } from 'react';

const FAQSection = () => {
  // State to track which FAQ is open (null if all closed)
  const [openFAQ, setOpenFAQ] = useState(0);

  // FAQ data array for better organization
  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We specialize in design, development, and digital marketing services, including branding, website/app development, SEO, social media marketing, and paid advertising."
    },
    {
      question: "How long does a project take?",
      answer: "Project timelines depend on the complexity and scope. On average, branding projects take 2-4 weeks, website development 4-8 weeks, and marketing campaigns vary based on strategy."
    },
    {
      question: "What are your pricing models?",
      answer: "We offer flexible pricing, including fixed pricing, hourly rates, and retainer models for ongoing marketing support."
    },
    {
      question: "Do you offer revisions on design work?",
      answer: "Yes, we offer a limited number of revisions based on the project scope to ensure client satisfaction."
    },
    {
      question: "How do you measure marketing success?",
      answer: "We track key performance indicators (KPIs) such as website traffic, conversion rates, lead generation, and ROI on ad spend."
    },
    {
      question: "Can you work with an existing design or website?",
      answer: "Yes, we can enhance or redesign existing websites and branding materials based on your business needs."
    },
    {
      question: "How do I get started?",
      answer: "Simply contact us with your requirements, and we'll schedule a consultation to discuss your project in detail."
    }
  ];
  // Toggle FAQ handler
  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-16 px-6 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl md:text-5xl font-extrabold text-gray-900 mb-8">Frequently Asked Questions?</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="border-b border-gray-200 pb-4 cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900 py-2">{faq.question}</h3>
                  <span className="text-blue-600 text-2xl">
                    {openFAQ === index ? "−" : "+"}
                  </span>
                </div>
                {openFAQ === index && (
                  <p className="text-gray-600 mt-2">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;