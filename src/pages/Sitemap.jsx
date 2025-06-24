// App.jsx
import React from 'react';

const SiteMap = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col">

      {/* Main Content */}
      <main className="flex-grow">
        {/* Header Section */}
        <section className="bg-blue-600 py-34 px-6 text-white">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Site Map</h1>
            <div className="flex justify-end">
              <span className="text-sm flex items-center">
                <a href="tel:+919884679119" className="">
                TALK TO AN EXPERT
                </a>
                
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </div>
          </div>
        </section>

        {/* Sitemap List */}
        <section className="py-16 px-6">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Sitemap</h2>
            <ul className="list-disc pl-5 text-blue-600 space-y-2">
              <li><a href='/' >Home Page</a></li>
              <li><a href='/services' >Service Page</a></li>
              <li><a href='/portfolio' >Portfolio Page</a></li>
              <li><a href='/about' >About Page</a></li>
              <li><a href='/contact' >Contact Page</a></li>
              <li><a href='/contact' >Frequently Asked Questions Page</a></li>
              <li><a href='/portfolio' >Lastest Case Study</a></li>
              <li><a href='/casestudy-professional' >Case Study: Building A Professional Website</a></li>
              <li><a href='/casestudy-ecommerce' >Case Study : Building An E-Commerce Platform</a></li>
              <li><a href='/casestudy-brand-identity' >Case Study : Creating a Brand Identity</a></li>
              <li><a href='/terms-and-conditions' >Terms and Conditions</a></li>
              <li><a href='/privacy-policy' >Privacy Policy</a></li>
            </ul>
          </div>
        </section>
      </main>

    </div>
  );
};

export default SiteMap;