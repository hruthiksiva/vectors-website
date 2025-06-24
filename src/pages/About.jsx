// App.jsx
import React from 'react';
import CoreStrengthSection from '../components/CoreStrengthSection';
import VisionSection from '../components/VisionSection';
import MissionSection from '../components/MissionSection';
import TeamSection from '../components/TeamSection';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col pt-20">
      {/* Main Content */}
      <main className="flex-grow">
        {/* Header Section */}
        <motion.section
          className="bg-cyan-50 py-34 px-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="container mx-auto">
            <h1 className="text-2xl md:text-5xl font-bold plus-jakarta-sans-1 text-gray-800 text-center py-5">
              Our Story
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-center plus-jakarta-sans-2">
              At Vectors, we believe every business deserves to thrive in the digital world with the digital world's focused vision to bridge the gap between offline excellence and online success. We've empowered countless brands to scale businesses, make their mark, and achieve lasting growth.
            </p>
          </div>
        </motion.section>

        <MissionSection />
        <VisionSection />
        <CoreStrengthSection />
        <TeamSection />
      </main>
    </div>
  );
};

export default About;
