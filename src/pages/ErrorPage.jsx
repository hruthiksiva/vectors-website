import React from 'react';
import errorimg from "../assets/images/404.png";

const ErrorPage = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col pt-10 md:pt-20">
      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center py-8 px-4 sm:px-6">
        <div className="flex flex-col md:flex-row w-full max-w-4xl items-center gap-6 md:gap-8">
          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img 
              src={errorimg}
              alt="404 Error Illustration" 
              className="w-full max-w-xs md:max-w-full object-contain"
              loading="lazy"
            />
          </div>

          {/* Text and Button */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">Oops!</h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-4">We can’t seem to find the page you’re looking for.</p>
            <p className="text-gray-500 mb-6">Error code: 404</p>
            <p className="text-gray-500 mb-6">Go To Homepage Instead:</p>
            <a href="/">
              <button className="bg-yellow-400 text-black px-4 py-2 sm:px-6 sm:py-3 rounded-md font-semibold hover:bg-yellow-500 transition-colors duration-300">
                Go Home
              </button>
            </a>
            <p className="text-base sm:text-lg text-gray-900 mt-6">404 ERROR</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ErrorPage;