import React from 'react';
import { 
  FaShoppingCart, 
  FaDollarSign, 
  FaHeartbeat, 
  FaBook, 
  FaLaptopCode, 
  FaHome, 
  FaFilm, 
  FaCar, 
  FaPlane, 
  FaTshirt 
} from 'react-icons/fa';

const IndustrySection = () => {
  return (
    <div>
      {/* Industries Section */}
      <section className="bg-black m-8 md:m-15 p-5 md:p-15 md:rounded-2xl mx-auto">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-10 md:mb-12 tracking-tight">
            Industries We Excel In
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12">
            <div className="text-white flex items-center justify-start md:justify-center space-x-3">
              <FaShoppingCart className="text-xl md:text-2xl text-gray-300" />
              <span className="text-sm md:text-base">e-Commerce</span>
            </div>
            <div className="text-white flex items-center justify-start md:justify-center space-x-3">
              <FaDollarSign className="text-xl md:text-2xl text-gray-300" />
              <span className="text-sm md:text-base">Financial Services</span>
            </div>
            <div className="text-white flex items-center justify-start md:justify-center space-x-3">
              <FaHeartbeat className="text-xl md:text-2xl text-gray-300" />
              <span className="text-sm md:text-base">Healthcare & Wellness</span>
            </div>
            <div className="text-white flex items-center justify-start md:justify-center space-x-3">
              <FaBook className="text-xl md:text-2xl text-gray-300" />
              <span className="text-sm md:text-base">Education & Learning</span>
            </div>
            <div className="text-white flex items-center justify-start md:justify-center space-x-3">
              <FaLaptopCode className="text-xl md:text-2xl text-gray-300" />
              <span className="text-sm md:text-base">Technology & Solutions</span>
            </div>
            <div className="text-white flex items-center justify-start md:justify-center space-x-3">
              <FaHome className="text-xl md:text-2xl text-gray-300" />
              <span className="text-sm md:text-base">Real Estate</span>
            </div>
            <div className="text-white flex items-center justify-start md:justify-center space-x-3">
              <FaFilm className="text-xl md:text-2xl text-gray-300" />
              <span className="text-sm md:text-base">Media & Entertainment</span>
            </div>
            <div className="text-white flex items-center justify-start md:justify-center space-x-3">
              <FaCar className="text-xl md:text-2xl text-gray-300" />
              <span className="text-sm md:text-base">Automotive</span>
            </div>
            <div className="text-white flex items-center justify-start md:justify-center space-x-3">
              <FaPlane className="text-xl md:text-2xl text-gray-300" />
              <span className="text-sm md:text-base">Travel & Hospitality</span>
            </div>
            <div className="text-white flex items-center justify-start md:justify-center space-x-3">
              <FaTshirt className="text-xl md:text-2xl text-gray-300" />
              <span className="text-sm md:text-base">Fashion & Lifestyle</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustrySection;