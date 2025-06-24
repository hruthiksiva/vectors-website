import React, { useState } from 'react';
import Cta from '../assets/images/home/cta.png';

const CalltoActionSection = () => {
  const [email, setEmail] = useState(''); // State to store email input

  // Function to handle PDF download
  const handleDownload = () => {
    if (email.trim() === '') {
      alert('Please enter your email to download the PDF.');
      return;
    }

    // Replace this URL with your actual PDF file path
    const pdfUrl = '/path/to/your/Top_Trends_2025.pdf'; // Example: hosted PDF or public asset
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Top_Trends_2025.pdf'; // Filename for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
      <section
        className="p-4 md:p-50 m-5 md:m-15 bg-cover bg-center h-full flex items-center md:flex"
        style={{
          backgroundImage: `url(${Cta})`,
        }}
      >
        <div className="container mx-auto flex justify-end">
          <div className="w-full md:w-1/2 p-8 bg-opacity-80 rounded-lg">
            {/* Content on the right */}
            <div className="w-full flex flex-col items-center justify-center text-center text-black h-full p-4">
              <h2 className="text-xl md:text-2xl font-bold mb-4">Stay Ahead in 2025!</h2>
              <p className="text-black mb-6 text-sm md:text-base">
                Download our Top Trends in Branding & Web Design
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-md">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your Email"
                  className="w-full sm:w-auto flex-1 px-4 py-2 rounded-full text-white bg-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm md:text-base"
                  required
                > 
                </input>
                <button
                  onClick={handleDownload}
                  className="bg-yellow-400 text-black px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold hover:bg-yellow-500 text-sm md:text-base"
                >
                  Download
                </button>
                
              </div>
            </div>
          </div>
        </div>
      </section>

  );
};

export default CalltoActionSection;