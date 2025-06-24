import React from 'react';
import iandr from '../assets/images/about/Our Core Strengths/Innovation and R&D.svg'
import scale from '../assets/images/about/Our Core Strengths/Scalability.svg'
import customer from '../assets/images/about/Our Core Strengths/Customer Support.svg'
import security from '../assets/images/about/Our Core Strengths/Security & Compliance.svg'
import problem from '../assets/images/about/Our Core Strengths/Problem Solving.svg'
import deadline from '../assets/images/about/Our Core Strengths/Commitment to Deadlines.svg'

const CoreStrengthSection = () => {
  return (
    <section className="bg-black py-25 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-white">Our Core Strengths</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-purple-100 p-6 rounded-lg text-center items-center">
            <img src={iandr} className='mx-auto'></img>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Innovation & R&D</h3>
            <p className="text-gray-600">Driving cutting-edge solutions through research and development.</p>
          </div>
          <div className="bg-green-100 p-6 rounded-lg text-center">
          <img src={scale} className='mx-auto'></img>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Scalability</h3>
            <p className="text-gray-600">Building solutions that grow with your business needs.</p>
          </div>
          <div className="bg-pink-100 p-6 rounded-lg text-center">
          <img src={customer} width={40} className='mx-auto'></img>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Customer Support</h3>
            <p className="text-gray-600">Dedicated support to ensure your success at every step.</p>
          </div>
          <div className="bg-red-100 p-6 rounded-lg text-center">
          <img src={security} width={40}  className='mx-auto'></img>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Security & Compliance</h3>
            <p className="text-gray-600">Ensuring data safety and regulatory adherence.</p>
          </div>
          <div className="bg-yellow-100 p-6 rounded-lg text-center">
          <img src={problem} width={40}  className='mx-auto'></img>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Problem Solving</h3>
            <p className="text-gray-600">Creative solutions to complex business challenges.</p>
          </div>
          <div className="bg-blue-100 p-6 rounded-lg text-center">
          <img src={deadline} width={40} className='mx-auto'></img>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Commitment to Deadlines</h3>
            <p className="text-gray-600">Delivering on time, every time.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreStrengthSection;