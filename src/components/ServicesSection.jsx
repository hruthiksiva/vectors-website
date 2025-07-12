import React from 'react';

const ServicesSection = () => {
  return (
    <section className="bg-black py-34 px-6">
      <div className="container mx-auto">
        <div className="text-left mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h2 className="text-2xl md:text-5xl text-white mb-4">Our Services</h2>
              <h3 className="text-lg md:text-2xl text-white mb-4">
                Vectors Digital Consultancy & Premium Services
              </h3>
            </div>
            <div>
              <h3 className="text-white text-lg">
                At Vectors, we offer a comprehensive suite of services designed to accelerate your business growth. Our expertise spans across Marketing, Web & App Development, Design, and Artificial Intelligence, with each service customized to your unique needs. We create strategic, high-impact solutions that ensure your business not only adapts but thrives in the ever-evolving digital world.
              </h3>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-stretch">
          {/* Marketing */}
          <a href='/services#marketing' className="h-full">
          <div className="bg-indigo-100 rounded-2xl p-6 shadow-md flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:shadow-lg hover:-translate-y-1 cursor-pointer h-full">
            <div className="flex items-center justify-center mb-4">
              <h4 className="text-xl text-gray-800 mr-2">Marketing</h4>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 448 512" 
                className="w-5 h-5"
              >
                <path d="M384 32c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0zM160 144c-13.3 0-24 10.7-24 24s10.7 24 24 24l94.1 0L119 327c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l135-135L288 328c0 13.3 10.7 24 24 24s24-10.7 24-24l0-160c0-13.3-10.7-24-24-24l-152 0z"/>
              </svg>
            </div>
            <p className="text-gray-700 text-sm flex-grow">
              At Vectors, we craft data-driven, results-oriented marketing strategies tailored for premium brands. By combining creativity, advanced analytics, and cutting-edge technologies, we help businesses amplify their presence and drive conversions.
            </p>
          </div>
          </a>
          

          {/* Design */}
          <a href='/services#design' className="h-full">
          <div className="bg-lime-100 rounded-2xl p-6 shadow-md flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:shadow-lg hover:-translate-y-1 cursor-pointer h-full">
            <div className="flex items-center justify-center mb-4">
              <h4 className="text-xl text-gray-800 mr-2">Design</h4>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 448 512" 
                className="w-5 h-5"
              >
                <path d="M384 32c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0zM160 144c-13.3 0-24 10.7-24 24s10.7 24 24 24l94.1 0L119 327c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l135-135L288 328c0 13.3 10.7 24 24 24s24-10.7 24-24l0-160c0-13.3-10.7-24-24-24l-152 0z"/>
              </svg>
            </div>
            <p className="text-gray-700 text-sm flex-grow">
              Our design philosophy at Vectors is rooted in creating beautiful, user-centered experiences that engage and convert. We leverage innovative design techniques and strategic thinking to develop premium digital identities that resonate with your audience.
            </p>
          </div>
          </a>
          

          {/* Web Development */}
          <a href='/services#webdevelopment' className="h-full">
          <div className="bg-yellow-100 rounded-2xl p-6 shadow-md flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:shadow-lg hover:-translate-y-1 cursor-pointer h-full">
            <div className="flex items-center justify-center mb-4">
              <h4 className="text-xl text-gray-800 mr-2">Web Development</h4>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 448 512" 
                className="w-5 h-5"
              >
                <path d="M384 32c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0zM160 144c-13.3 0-24 10.7-24 24s10.7 24 24 24l94.1 0L119 327c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l135-135L288 328c0 13.3 10.7 24 24 24s24-10.7 24-24l0-160c0-13.3-10.7-24-24-24l-152 0z"/>
              </svg>
            </div>
            <p className="text-gray-700 text-sm flex-grow">
              We specialize in building high-performance, scalable websites and applications as they are visually compelling. With a focus on user experience, security, and optimized performance. We focus on Application Building for iOS and Android, Web Applications and Systems Software.
            </p>
          </div>
          </a>
          

          {/* AI Assistance */}
          <a href='/services#AI' className="h-full">
          <div className="bg-blue-100 rounded-2xl p-6 shadow-md flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:shadow-lg hover:-translate-y-1 cursor-pointer h-full">
            <div className="flex items-center justify-center mb-4">
              <h4 className="text-xl text-gray-800 mr-2">AI Assistance</h4>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 448 512" 
                className="w-5 h-5"
              >
                <path d="M384 32c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0zM160 144c-13.3 0-24 10.7-24 24s10.7 24 24 24l94.1 0L119 327c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l135-135L288 328c0 13.3 10.7 24 24 24s24-10.7 24-24l0-160c0-13.3-10.7-24-24-24l-152 0z"/>
              </svg>
            </div>
            <p className="text-gray-700 text-sm flex-grow">
              Harness the power of artificial intelligence to drive business intelligence to drive business innovation. At Vectors, we develop AI-driven solutions that automate, optimize, and transform your operations. Whether it's predictive analytics, or machine learning.
            </p>
          </div>
          </a>
          
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;