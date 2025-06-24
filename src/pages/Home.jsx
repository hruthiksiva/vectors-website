import React from 'react';
import { motion } from 'framer-motion';

import MetricsSection from '../components/MetricsSection';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import TestimonialSection from "../components/TestimonialSection";
import CalltoActionSection from '../components/CalltoActionSection';
import PortfolioSection from '../components/PortfolioSection';
import OurPartnership from '../components/OurPartnership';

const sectionVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1 }
};

const Home = () => {
  return (
    <div>
      {/* Header Section */}
      <HeroSection />

      <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <OurPartnership />
      </motion.div>

      <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <MetricsSection />
      </motion.div>

      <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <ServicesSection />
      </motion.div>

      <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <PortfolioSection />
      </motion.div>

      <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <TestimonialSection />
      </motion.div>

      <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <CalltoActionSection />
      </motion.div>
    </div>
  );
};

export default Home;
