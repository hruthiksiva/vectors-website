import React from 'react';
import casestudy0 from '../assets/images/casestudy/case-study-1.png';
import casestudy1 from '../assets/images/casestudy/case-study-1-1.png';
import casestudy2 from '../assets/images/casestudy/case-study-1-2.png';
import casestudy3 from '../assets/images/casestudy/case-study-1-3.png';
import casestudy4 from '../assets/images/casestudy/case-study-1-4.png';
import casestudy5 from '../assets/images/casestudy/case-study-1-5.png';

const CaseStudyProfessional = () => {
  return (
    <div>
      <div className="pt-20">
        {/* Title and Paragraph Container */}
        <div className="flex bg-gray-100 justify-center mb-10">
          <div className="w-full text-black rounded-lg p-6 text-center pb-40 pt-40">
            <h1 className="text-2xl md:text-5xl font-extrabold mb-4">
              Case Study: Building A Professional Website
            </h1>
            <p className="text-sm md:text-base">
              Discover how we transformed a vision into a high-performing, user-friendly website that drives business success.
            </p>
          </div>
        </div>

        {/* Images */}
        <div className="space-y-6">
          <img src={casestudy0} alt="Case Study Step 1" className="w-full" loading="lazy" />
          <img src={casestudy1} alt="Case Study Step 2" className="w-full" loading="lazy" />
          <img src={casestudy2} alt="Case Study Step 3" className="w-full" loading="lazy" />
          <img src={casestudy3} alt="Case Study Step 4" className="w-full" loading="lazy" />
          <img src={casestudy4} alt="Case Study Step 5" className="w-full" loading="lazy" />
          <img src={casestudy5} alt="Case Study Step 6" className="w-full" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default CaseStudyProfessional;