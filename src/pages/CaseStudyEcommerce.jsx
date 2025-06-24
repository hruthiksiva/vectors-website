import React from 'react'

import casestudy0 from '../assets/images/casestudy/casestudy-2-0.png'
import casestudy1 from '../assets/images/casestudy/casestudy-2-1.png'
import casestudy2 from '../assets/images/casestudy/casestudy-2-2.png'
import casestudy3 from '../assets/images/casestudy/casestudy-2-3.png'
import casestudy4 from '../assets/images/casestudy/casestudy-2-4.png'
import casestudy5 from '../assets/images/casestudy/casestudy-2-5.png'

const CaseStudyEcommerce = () => {
  return (
    <div>
      <div className="pt-20">
        {/* Title and Paragraph Container */}
        <div className="flex bg-gray-100 justify-center mb-10">
          <div className="w-full text-black rounded-lg p-6 text-center pb-40 pt-40">
            <h1 className="text-2xl md:text-5xl font-extrabold mb-4">
            Case Study : Building An E-Commerce Platform
            </h1>
            <p className="text-sm md:text-base">
              Discover how we transformed a vision into a high-performing, user-friendly website that drives business success.
            </p>
          </div>
        </div>
            <div>
            <img src={casestudy0} className='w-full' loading="lazy"></img>
            <img src={casestudy1} className='w-full' loading="lazy"></img>
            <img src={casestudy2} className='w-full' loading="lazy"></img>
            <img src={casestudy3} className='w-full' loading="lazy"></img>
            <img src={casestudy4} className='w-full' loading="lazy"></img>
            <img src={casestudy5} className='w-full' loading="lazy"></img>
            </div>

        </div>
        
    </div>
  )
}

export default CaseStudyEcommerce