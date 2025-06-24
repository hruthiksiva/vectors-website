import React from 'react'
import casestudyprofessional from "../assets/images/casestudy/casestudy-2-cover.png" 
import casestudyecommerce from "../assets/images/casestudy/casestudy-1-cover.png" 
import brand from "../assets/images/casestudy/casestudy-3-0.png" 

const PortfolioSection = () => {
  return (
    <div>
      {/* Portfolio Section */}
      <section className="bg-white-50 py-16 px-6">
          <div className="container mx-auto">
            <h2 className="text-2xl md:text-5xl font-bold text-gray-800 mb-8 text-center">Latest Case Study</h2>
            <p className="text-gray-600 mb-8 text-base md:text-xl text-center">Explore our most recent success stories. Discover insights that drive real impact.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Farmers Problems */}
              <a href='/casestudy-professional'>
              <div className="bg-white p-6 rounded-lg shadow-md custom-card transform transition duration-300 hover:scale-105 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                <img 
                  src={casestudyprofessional}
                  alt="Farmers Problems" 
                  className="rounded-lg mb-4 w-100 object-contain"
                  loading="lazy"
                />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Professional Website</h3>
                <p className="text-gray-600">Transportation Service Website.</p>
              </div>
              </a>
              

              {/* External Communication */}
              <a href='/casestudy-ecommerce'>
              <div className="bg-white p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                <img 
                  src={casestudyecommerce}
                  alt="External Communication" 
                  className="rounded-lg mb-4 w-full"
                  loading="lazy"
                />
                <h3 className="text-xl font-bold text-gray-800 mb-2">E-Commerce Platform</h3>
                <p className="text-gray-600">Food Ordering and Delivery Platform.</p>
              </div>
              
              </a>
              
              {/* External Communication */}
              <a href='/casestudy-brand-identity'>
              <div className="bg-white p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                <img 
                  src={brand}
                  alt="External Communication" 
                  className="rounded-lg mb-4 w-full"
                  loading="lazy"
                />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Brand Identity</h3>
                <p className="text-gray-600">Reinventing How People Buy Things Online.</p>
              </div>
              </a>
              
            </div>
          </div>
        </section>
    </div>
  )
}

export default PortfolioSection