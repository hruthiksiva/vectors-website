import React from 'react';
import client1 from "../assets/images/client1.svg" 
import client2 from "../assets/images/client2.svg" 
import client3 from "../assets/images/client3.svg" 
import client4 from "../assets/images/client4.svg" 

const OurPartnership = () => {
  return (
    <div>
      <section className="bg-indigo-100 py-20 px-4 m-1 rounded-lg max-w-7xl mx-auto plus-jakarta-sans-2">
        <div className="text-gray-600">
          <p className="text-center text-lg md:text-2xl">Our Distinguished Clientele</p>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-6 md:flex-nowrap md:gap-0 md:space-x-20">
          <img 
            src={client1}
            alt="Sengadu Organics" 
            className="h-6 md:h-8 w-auto flex-shrink-0 basis-[calc(50%-1.5rem)] md:basis-auto object-contain"
            loading="lazy"
          />
          <img 
            src={client2} 
            alt="Appflow.ai" 
            className="h-6 md:h-8 w-auto flex-shrink-0 basis-[calc(50%-1.5rem)] md:basis-auto object-contain"
            loading="lazy"
          />
          <img 
            src={client3}
            alt="ExponentFinserv" 
            className="h-6 md:h-8 w-auto flex-shrink-0 basis-[calc(50%-1.5rem)] md:basis-auto object-contain"
            loading="lazy"
          />
          <img 
            src={client4}
            alt="Bringer" 
            className="h-6 md:h-8 w-auto flex-shrink-0 basis-[calc(50%-1.5rem)] md:basis-auto object-contain"
            loading="lazy"
          />
        </div>
      </section>
    </div>
  );
};

export default OurPartnership;