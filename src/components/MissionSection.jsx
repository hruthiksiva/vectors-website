import React from 'react';
import mission from "../assets/images/mission.png";

const MissionSection = () => {
  return (
    <div>
      {/* Mission Section */}
      <section className="bg-white py-34 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 order-last md:order-none">
            <h2 className="text-4xl font-bold text-black-800 mb-4 flex items-center">
              <span className="text-black-800 mr-2">MISSION</span>
            </h2>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Empowering Growth Through Unmatched Innovation
            </h3>
            <p className="text-gray-600">
              At Vectors, our mission is to deliver premium, bespoke digital experiences that transform the digital landscape. We transform industries, empower businesses, and create powerful connections through innovative strategies and unparalleled success.
            </p>
            <p className="text-blue-800 mt-4">
              <a href="/contact">Learn More</a>
            </p>
          </div>
          <div className="md:w-1/2 flex justify-end order-first md:order-none">
            <img 
              src={mission}
              alt="Mission" 
              className="rounded-lg w-full max-w-md animate-zoom"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Custom Styles for Animation */}
      <style jsx global>{`
        @keyframes zoom {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .animate-zoom {
          animation: zoom 3s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default MissionSection;