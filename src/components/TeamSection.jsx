import React from 'react';
import Member1 from '/src/assets/images/member-1.png';
import Member2 from '/src/assets/images/member-4.jpeg';
import Member3 from '/src/assets/images/member-2.jpeg';
import Member4 from '/src/assets/images/member-5.jpg';

const TeamSection = () => {
  return (
    <div>
      {/* Team Section */}
      <section className="bg-cyan-50 py-16 sm:py-24 px-4 sm:px-6 m-10 rounded-3xl">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6 sm:mb-8">Our Team</h2>
          <p className="text-gray-600 mb-6 sm:mb-8 pb-4 sm:pb-5 text-sm sm:text-xl">
            The team behind this wonderful company
          </p>
          <div className="grid grid-cols-2 gap-6 sm:gap-8 md:flex md:flex-row md:justify-center">
            {/* Team Member 1 */}
            <div className="relative group w-32 sm:w-40 h-48 sm:h-60">
              <img
                src={Member1}
                alt="Team Member 1 - Developer"
                className="w-full h-full object-cover shadow-md animate-float-up transition-all duration-300 group-hover:brightness-50"
                style={{ borderRadius: '50% / 30%' }}
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center transition-opacity animate-float-up transition-all duration-300 opacity-0 group-hover:opacity-100">
                <span className="text-white text-lg font-semibold">Data Science</span>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="relative group w-32 sm:w-40 h-48 sm:h-60">
              <img
                src={Member2}
                alt="Team Member 2 - Tester"
                className="w-full h-full object-cover shadow-md animate-float-down transition-all duration-300 group-hover:brightness-50"
                style={{ borderRadius: '50% / 30%' }}
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center transition-opacity animate-float-down transition-all duration-300 opacity-0 group-hover:opacity-100">
                <span className="text-white text-lg font-semibold">Marketing</span>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="relative group w-32 sm:w-40 h-48 sm:h-60">
              <img
                src={Member3}
                alt="Team Member 3 - Marketer"
                className="w-full h-full object-cover shadow-md animate-float-up transition-all duration-300 group-hover:brightness-50"
                style={{ borderRadius: '50% / 30%' }}
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center transition-opacity animate-float-up transition-all duration-300 opacity-0 group-hover:opacity-100">
                <span className="text-white text-lg font-semibold">Development</span>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="relative group w-32 sm:w-40 h-48 sm:h-60">
              <img
                src={Member4}
                alt="Team Member 4 - Designer"
                className="w-full h-full object-cover shadow-md animate-float-down transition-all duration-300 group-hover:brightness-50"
                style={{ borderRadius: '50% / 30%' }}
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center transition-opacity animate-float-down transition-all duration-300 opacity-0 group-hover:opacity-100">
                <span className="text-white text-lg font-semibold">Design</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamSection;