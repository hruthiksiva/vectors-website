import React from 'react'
import CaseStudy3 from '../assets/images/casestudy/casestudy-3-0.png'
import CaseStudy1 from '../assets/images/casestudy/casestudy-1-cover.png'
import CaseStudy2 from '../assets/images/casestudy/casestudy-2-cover.png'

const CaseStudySection = () => {
  return (
    <div>
        {/* Latest Case Study Section */}
        <section className="bg-indigo-100 py-16 px-6">
          <div className="container mx-auto">
            <h2 className="text-2xl md:text-5xl font-bold text-gray-800 mb-8 text-center">Latest Case Study</h2>
            <p className="text-gray-600 mb-8 text-center">Speak with your clients or colleagues around the world</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Farmers Problems */}
              <a href='/casestudy-professional'>
              <div className="bg-white p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                <img 
                  src={CaseStudy2} 
                  alt="Farmers Problems" 
                  className="rounded-lg mb-4 w-100 object-contain"
                  loading="lazy"
                />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Case Study 1: Professional Website</h3>
                <p className="text-gray-600">Transportation Service Website.</p>
              </div>
              </a>
              

              {/* External Communication */}
              <a href='/casestudy-ecommerce'>
              <div className="bg-white p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                <img 
                  src={CaseStudy1} 
                  alt="External Communication" 
                  className="rounded-lg mb-4 w-full"
                  loading="lazy"
                />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Case Study 2: E-Commerce Platform</h3>
                <p className="text-gray-600">Food Ordering and Delivery Platform.</p>
              </div>
              
              </a>
              
              {/* External Communication */}
              <a href='/casestudy-brand-identity'>
              <div className="bg-white p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                <img 
                  src={CaseStudy3} 
                  alt="External Communication" 
                  className="rounded-lg mb-4 w-full"
                  loading="lazy"
                />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Case Study 3: Brand Identity</h3>
                <p className="text-gray-600">Reinventing How People Buy Things Online.</p>
              </div>
              </a>
              
              
            </div>
          </div>
        </section>
    </div>
  )
}

export default CaseStudySection