import React from 'react';
import vision from "../assets/images/Vision2.png";

const VisionSection = () => {
  return (
    <div>
      {/* Vision Section */}
      <section className="bg-cyan-50 py-34 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <img 
              src={vision}
              alt="Vision" 
              className="mb-4 w-full max-w-md animate-zoom"
              loading="lazy"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-black-800 mb-4 flex items-center">
              <span className="text-black-800 mr-2">VISION</span>
            </h2>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Redefining the Future of Digital Excellence
            </h3>
            <p className="text-gray-600">
              We envision a future where every business, regardless of size, leverages cutting-edge digital tools to achieve exponential growth, transform operations, shaping the future of business success. Learn more.
            </p>
            <p className='text-blue-800 mt-4'><a href='/contact'>Learn More</a></p>
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

export default VisionSection;