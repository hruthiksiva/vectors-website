// src/pages/Services.jsx
import React from 'react';
import IndustrySection from '../components/IndustrySection';
import marketing from "../assets/images/service/Marketing.png";
import ai from "../assets/images/service/Ai.png";
import design from "../assets/images/service/Design.png";
import web from "../assets/images/service/Web.png";
import business from "../assets/images/service/Business-enablement.png"; // ✅ updated unique image
import { motion } from "framer-motion";

const services = [
  {
    id: 'design',
    title: 'Creative Design',
    tagline: 'Build a Memorable Brand Through Exceptional Design',
    description:
      'From brand identity to motion graphics, we craft visually compelling experiences across all digital and physical mediums.',
    image: design,
    points: [
      'UI/UX Design',
      'Brand Identity & Logos',
      'Web & App Design',
      'Print & Packaging Design',
      'Motion Graphics & Video',
      'Social Media Visuals',
    ],
    note:
      'Great design drives better engagement. We help your brand stand out and communicate effectively.',
  },
  {
    id: 'development',
    title: 'Web & App Development',
    tagline: 'Scalable Digital Platforms Built for Performance',
    description:
      'We engineer secure, responsive, and scalable web and mobile solutions tailored to your business needs.',
    image: web,
    points: [
      'Website Development',
      'Mobile App Development',
      'Progressive Web Apps (PWA)',
      'Content Management Systems (CMS)',
      'eCommerce Solutions',
      'Custom Software & Product Development',
      'Maintenance & Support',
    ],
    note:
      'Our development services ensure fast, functional, and user-focused digital experiences.',
  },
  {
    id: 'marketing',
    title: 'Digital Marketing',
    tagline: 'Maximize Reach with Insight-Driven Marketing Strategies',
    description:
      'We combine creativity with data to deliver personalized marketing campaigns that convert and scale.',
    image: marketing,
    points: [
      'Social Media Marketing',
      'Search Engine Optimization (SEO)',
      'Pay-Per-Click (PPC) Advertising',
      'Content Marketing & Strategy',
      'Email Marketing & Automation',
      'Performance Marketing (PPC)',
      'Content & Video Marketing',
      'Influencer Campaigns',
      'Cause & Data-Driven Marketing',
    ],
    note:
      'Reach the right audience with the right message—every time. We drive real business growth.',
  },
  {
    id: 'ai',
    title: 'AI & Automation',
    tagline: 'Leverage Artificial Intelligence for Smarter Workflows',
    description:
      'Transform business operations through AI-powered solutions like chatbots, analytics, and automation.',
    image: ai,
    points: [
      'Machine Learning Models',
      'Natural Language Processing (NLP)',
      'Computer Vision Applications',
      'AI Chatbots & Assistants',
      'Predictive Analytics',
      'Robotic Process Automation (RPA)',
    ],
    note:
      'Streamline operations and unlock new possibilities with cutting-edge AI technology.',
  },
  {
    id: 'business',
    title: 'Business Enablement',
    tagline: 'Comprehensive Support for Business Setup & Growth',
    description:
      'Beyond digital services, we offer strategic support to help businesses set up, stay compliant, and scale.',
    image: business, // ✅ updated with unique business image
    points: [
      'Business Consulting & Planning',
      'Company Registration & Compliance',
      'Rebranding & Go-to-Market Strategy',
      'Financial Planning & Analytics',
      'Cost Accounting',
      'GST Registration',
      'Tax Saving Consultation',
      'Legal Advisory',
    ],
    note:
      'A strong foundation powers long-term success. We provide the tools and guidance to help you grow sustainably.',
  },
];

const Services = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col pt-20">
      <main className="flex-grow">
        {/* Header Section */}
        <section className="bg-blue-50 py-20 px-6 text-center">
          <div className="max-w-5xl mx-auto p-20">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              Accelerate Your Growth with Vectors
            </h1>
            <p className="text-gray-600 text-lg">
              Discover a powerful suite of AI, Design, Marketing, and Web Development services—crafted to elevate your brand, drive measurable results, and turn your vision into reality. Whether you're starting up or scaling fast, Vectors builds exactly what your business needs to succeed.
            </p>
          </div>
        </section>

        {/* Service Sections */}
        {services.map(({ id, title, tagline, description, image, points, note }, index) => (
          <motion.section
            key={id}
            id={id}
            className={`py-16 px-6 ${index % 2 === 0 ? 'bg-white' : 'bg-blue-50'}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">{title}</h2>
                <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-4">{tagline}</h3>
                <p className="text-gray-600 mb-6">{description}</p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  {points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className="text-blue-600 hover:text-blue-800 mt-4 inline-block font-medium"
                >
                  Learn More
                </a>
                <p className="text-gray-600 mt-4 text-sm">{note}</p>
              </div>
              <div>
                <img
                  src={image}
                  alt={title}
                  className="rounded-xl w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.section>
        ))}

        {/* Industry Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <IndustrySection />
        </motion.div>
      </main>
    </div>
  );
};

export default Services;
