import React from 'react';
import { IoCall } from "react-icons/io5";
import banner1 from "../assets/images/home/Banner 1.png";
import banner2 from "../assets/images/home/Banner 2.png";
import banner3 from "../assets/images/home/Banner 3.png";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const HeroSection = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-white py-10 md:py-20 px-4 md:px-10 m-0 md:m-15 pt-35 md:pt-35">
        <div className="container mx-auto flex flex-col md:flex-row justify-between gap-4 md:gap-6">
          
          {/* Image */}
          <div className="order-1 md:order-2 flex justify-center mb-8 md:mb-0">
            <div className="w-full max-w-[400px] md:max-w-[600px] lg:w-160 flex flex-row">
              <img 
                src={banner1}
                alt="Banner 1" 
                className="w-3/10 object-contain m-1 animate-bounce-up"
                loading="lazy"
              />
              <img 
                src={banner2}
                alt="Banner 2" 
                className="w-3/10 object-contain m-1 animate-bounce-down"
                loading="lazy"
              />
              <img 
                src={banner3}
                alt="Banner 3" 
                className="w-3/10 object-contain m-1 animate-bounce-up"
                loading="lazy"
              />
            </div>
          </div>

          {/* Text content */}
          <div className="order-2 md:order-1 md:w-1/2 text-center pr-9">
            <div className="flex justify-center gap-2 md:gap-5 flex-wrap mb-4 p-5">
              <p className="text-gray-400">Marketing</p>
              <p>•</p>
              <p className="text-gray-400">Development</p>
              <p>•</p>
              <p className="text-gray-400">Design</p>
            </div>
            
            <h1 className="text-2xl md:text-5xl mb-4 mt-4">
              Exponential Growth Through Premium Marketing, Design & Development
            </h1>
            
            <div className="flex justify-center gap-3 md:gap-5 flex-wrap mb-6">
              <p className="text-blue-600">✓ Trusted by Industry Leaders</p>
              <p className="text-blue-600">✓ 100% Results</p>
            </div>

            {/* CountUp Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-8">
              {[
                { label: "Projects", end: 120 },
                { label: "Clients", end: 85 },
                { label: "Campaigns", end: 200 },
                { label: "Success Rate", end: 100, suffix: "%" }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="text-center"
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
                    <CountUp end={item.end} duration={2} suffix={item.suffix || ''} />
                  </h2>
                  <p className="text-sm md:text-base text-gray-500">{item.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Call Button */}
            <div className="flex justify-center">
              <a href="tel:+919884679119">
                <button className="plus-jakarta-sans-2 bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 inline-flex items-center gap-2 transform transition duration-300 hover:scale-105 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                  <IoCall />
                  <span>Call Us Now</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;

