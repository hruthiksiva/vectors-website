import React from 'react';

import CaseStudySection from '../components/CaseStudySection';
import PortfolioGrid from '../components/PortfolioGrid';

const Portfolio = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col pt-20">
      <main className="flex-grow">
        {/* Header Section */}
        <section className="bg-teal-100 py-34 px-6">
          <div className="container mx-auto">
            <h1 className="text-2xl md:text-5xl font-bold text-gray-800 text-center m-5">Our Portfolio</h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-center mb-8">
              Explore a collection of our best work—where strategy meets creativity.  
              From high-converting marketing campaigns to captivating designs and high-performance websites,  
              our portfolio reflects the measurable success we deliver for forward-thinking brands.
            </p>
          </div>
        </section>

        <div>
          <PortfolioGrid />
        </div>

        <div>
          <CaseStudySection />
        </div>
      </main>
    </div>
  );
};

export default Portfolio;

