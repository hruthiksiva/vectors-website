import React from 'react';
import  SectionImg from '../assets/images/home/Section Image 2.png'
import Metrics from '../assets/images/home/metrics.png'
const MetricsSection = () => {
  return (
    <section className="bg-white py-40 px-6">
      <div className="container mx-auto">
        {/* Text Content - Stacks on mobile, side by side on larger screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"> {/* Increased mb-8 to mb-16 */}
          <div>
            <h2 className="text-2xl md:text-5xl font-bold text-gray-800 mb-4">
              At Vectors, we don’t just build – we accelerate.
            </h2>
          </div>
          <div>
            <p className="text-gray-400 text-lg">
              With world-class designers, strategic marketers, and expert developers, we craft solutions that exponentially grow your business. Whether it’s a high-converting brand identity, scalable web & app solutions, or AI-driven automation, we deliver results that push boundaries and drive success.
            </p>
          </div>
        </div>

        {/* Metrics and Images - Stacks on mobile, side by side on larger screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
        <div>
  {/* Metrics Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
    <div className="bg-purple-100 rounded-lg p-6 shadow-md flex flex-col justify-center items-center min-h-[150px]">
      <p className="text-3xl sm:text-4xl font-bold text-gray-800 text-center">100+</p>
      <p className="text-gray-600 text-center">Businesses Transformed</p>
    </div>
    <div className="bg-green-100 rounded-lg p-6 shadow-md flex flex-col justify-center items-center min-h-[150px]">
      <p className="text-3xl sm:text-4xl font-bold text-gray-800 text-center">10k+</p>
      <p className="text-gray-600 text-center">Hours of Innovation Delivered</p>
    </div>
    <div className="bg-yellow-100 rounded-lg p-6 shadow-md flex flex-col justify-center items-center min-h-[150px]">
      <p className="text-3xl sm:text-4xl font-bold text-gray-800 text-center">99%</p>
      <p className="text-gray-600 text-center">Client Satisfaction Rate</p>
    </div>
    <div className="bg-blue-100 rounded-lg p-6 shadow-md flex flex-col justify-center items-center min-h-[150px]">
      <p className="text-3xl sm:text-4xl font-bold text-gray-800 text-center">500%</p>
      <p className="text-gray-600 text-center">Average Business Growth</p>
    </div>
  </div>
</div>
      </div>
      <div>
  {/* Images */}
  <div className="grid grid-cols-1 gap-4 place-items-center">
    <div>
      <img
        src={SectionImg}
        alt="Team working at desks"
        className="w-full max-w-[400px] h-auto object-cover"
        loading="lazy"
      />
    </div>
    <div className="bg-gray-300 rounded-lg overflow-hidden" style={{ borderRadius: '20px' }}>
      <img
        src={Metrics}
        alt="Team working at desks"
        className="w-full max-w-[600px] h-auto object-cover"
        loading="lazy"
      />
    </div>
  </div>
</div>
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;