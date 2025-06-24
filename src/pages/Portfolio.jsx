import React from 'react';
import { motion } from 'framer-motion';

import CaseStudySection from '../components/CaseStudySection';
import PortfolioGrid from '../components/PortfolioGrid';

const sectionVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1 }
};

const Portfolio = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col pt-20">
      <main className="flex-grow">
        {/* Header Section */}
        <motion.section
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="bg-teal-100 py-34 px-6"
        >
          <div className="container mx-auto">
            <h1 className="text-2xl md:text-5xl font-bold text-gray-800 text-center m-5">Our Portfolio</h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-center mb-8">
              Explore a collection of our best work—where strategy meets creativity.  
              From high-converting marketing campaigns to captivating designs and high-performance websites,  
              our portfolio reflects the measurable success we deliver for forward-thinking brands.
            </p>
          </div>
        </motion.section>

        <motion.div
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <PortfolioGrid />
        </motion.div>

        <motion.div
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <CaseStudySection />
        </motion.div>
      </main>
    </div>
  );
};

export default Portfolio;
