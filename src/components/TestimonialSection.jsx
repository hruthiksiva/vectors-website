import React, { useState, useEffect } from 'react';
import ashwinImage from '../assets/images/home/Testimonial.jpg'; // Adjust the path
import rethikImage from '../assets/images/client/client-1.jpg';
import nickyImage from '../assets/images/client/client-2.jpeg';
import tagline from '../assets/images/home/quote.svg'
import { FaStar } from 'react-icons/fa';

// Sample review data
const reviews = [
  {
    name: "Ashwin Joy",
    title: "Founder of Pythonistaplanet",
    quote: "Working with Vectors was a game-changer for Pythonistaplanet. We needed a premium, high-converting website that truly reflected our brand's values and elevated our online presence and that's exactly what they delivered.",
    image: ashwinImage,
    rating: 5,
  },
  {
    name: "Rethik Kumar",
    title: "CEO of Sengadu Organics",
    quote: "The team at Vectors transformed our digital presence with their innovative approach. Their attention to detail and commitment to quality is unmatched.",
    image: rethikImage,
    rating: 5,
  },
  {
    name: "Nicky Alfred",
    title: "CEO of Social Gallery",
    quote: "Vectors delivered beyond our expectations. Their strategic insight and technical expertise helped us reach new heights in customer engagement.",
    image: nickyImage,
    rating: 5,
  },
];

const TestimonialSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatic sliding every 7 seconds
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <FaStar
          key={i}
          className={i < rating ? "text-yellow-400" : "text-gray-300"}
        />
      ));
  };

  return (
    <section className="bg-blue-50 py-16 sm:py-20 md:py-28 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-2">
            Trusted Words By Businesses
          </h2>
          <p className="text-gray-500 text-sm sm:text-base md:text-lg">
            It is a long established fact that a reader will be distracted by the readable content.
          </p>
        </div>

        <div className="relative flex justify-center items-center">
          <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-6 md:gap-10 p-6 md:p-8">
            {/* Image and Background */}
            <div
              className="w-7/12 md:w-5/12 h-1/2 md:h-full rounded-2xl overflow-hidden transition-all duration-700 ease-in-out shadow-lg"
              key={`image-${currentSlide}`}
            >
              <img
                src={reviews[currentSlide].image}
                alt={reviews[currentSlide].name}
                className="w-full h-full object-cover transition-opacity duration-700 ease-in-out"
                loading="lazy"
              />
            </div>

            {/* Review Text */}
            <div
              className="w-full md:w-7/12 text-center md:text-left transition-all duration-700 ease-in-out"
              key={`text-${currentSlide}`}
            >
              <div className='pb-6 flex justify-center md:justify-start items-center'>
              <img src={tagline} className=''></img>
              </div>

              <div className="flex justify-center md:justify-start items-center mb-4 md:mb-6">
                {renderStars(reviews[currentSlide].rating)}
              </div>
              
              <blockquote className="italic text-base sm:text-lg md:text-xl mb-4 md:mb-6">
                “{reviews[currentSlide].quote}”
              </blockquote>
              <p className="font-semibold text-lg md:text-xl">
                {reviews[currentSlide].name},
              </p>
              <p className="text-gray-600 text-sm md:text-base">
                {reviews[currentSlide].title}
              </p>
            </div>
          </div>
        </div>

        {/* Dots for navigation */}
        <div className="flex justify-center mt-6 md:mt-8 gap-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full ${
                currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;