// src/components/PortfolioGrid.jsx
import React from 'react';
import { ExternalLink } from 'lucide-react';
import image1 from "../assets/images/client/Biotik.svg";
import image2 from "../assets/images/client/Social.svg";
import image3 from "../assets/images/client/Airshine.svg";
import image4 from "../assets/images/client/Bringer.svg";
import image5 from "../assets/images/client/Appflow.svg";
import image6 from "../assets/images/client/ExponentFinserv.svg";
import image7 from "../assets/images/client/sengadu.svg";
import image8 from "../assets/images/client/Augmented.svg";

const portfolioItems = [
  {
    title: "Biotik",
    badge: ["Long-Term Client", "Featured"],
    image: image1,
    description:
      "Biotik empowers impact-driven individuals and organizations to communicate effectively through compelling storytelling, design, and engagement.",
    tags: ["Startup", "Product Visioning", "1+ Year Partnership", "UI/UX", "Web Development", "Branding"],
    url: "https://biotik.in"
  },
  {
    title: "EduComfy",
    badge: ["Long-Term Client"],
    image: image2,
    description:
      "EduComfy is a comprehensive learning platform that empowers tutors to generate passive income and connects students with high-quality educators.",
    tags: ["Startup", "Product Marketing", "Maintenance", "UI/UX Design", "AI", "Marketing"],
    url: "https://educomfy.in"
  },
  {
    title: "ExponentFinserv",
    image: image6,
    description:
      "ExponentFinserv delivers seamless financing solutions and expert consulting services to help you realize your goals.",
    tags: ["Marketing", "Web Development", "Maintenance"],
    url: "https://exponentfinserv.com"
  },

  {
    title: "Social Gallery",
    image: image2,
    description:
      "Social Gallery is an AI-driven photo-sharing platform that automatically curates photos from your network.",
    tags: ["Startup","App Development", "Product Marketing", "Maintenance", "UI/UX Design", "AI", "Marketing"],
    url: "https://play.google.com/store/apps/details?id=com.smoose.photoowldev&hl=en_IN"
  },
  {
    title: "Bringer",
    image: image4,
    description:
      "Bringer is a B2B AI-enabled platform that organizes all your photos seamlessly with a single selfie upload.",
    tags: ["Startup", "Product Marketing", "Maintenance", "UI/UX Design", "AI", "B2B"],
    url: "https://business.bringerapp.com/"
  },

  {
    title: "Appflow.ai",
    image: image5,
    description:
      "Appflow.ai enables mobile apps to drive growth with robust subscription analytics and targeted marketing tools.",
    tags: ["Singapore", "Content Creation", "Marketing", "25+ Articles"],
    url: "https://appflow.ai"
  },

  {
    title: "Pythonistaplanet",
    image: image8,
    description:
      "Pythonistaplanet provides in-depth online courses covering Python programming, artificial intelligence, and data science.",
    tags: ["Python", "Content Writing", "Content Generation", "Artificial Intelligence", "5+ Videos"],
    url: "https://pythonistaplanet.com/"
  },
  {
    title: "Probic Consultancy",
    image: image8,
    description: "Probic Consultancy is a platform that helps you find the best consultant for your business.",
    tags: ["Marketing", "Web Development", "Maintenance"],
    url: "https://probic.co.in/"
  },

  {
    title: "Augmented Startup",
    image: image8,
    description:
      "Augmented Startup offers comprehensive online courses in AI, computer vision, OpenCV, large language models, and robotics.",
    tags: ["South Africa", "YouTube", "Content Writing", "Content Generation", "Artificial Intelligence", "5+ Videos"],
    url: "http://augmentedstartups.com/"
  },
  {
    title: "Sengadu Organics",
    image: image7,
    description:
      "Sengadu Organics delivers fresh, organic produce sourced from heritage-rich red soil regions.",
    tags: ["Web Development", "Product Marketing", "UI/UX Design", "Sales", "Organic"],
    url: "https://sengaduorganics.com"
  },

  {
    title: "Hawt Gallery",
    badge: ["In-Progress"],
    image: image2,
    description:
      "Hawt Gallery is a gamified photo platform that automatically collects images, organizes them based on user engagement and preferences, and efficiently archives or removes redundant photos.",
    tags: ["Startup", "Product Marketing", "Maintenance", "UI/UX Design", "AI", "Marketing"],
    url: ""
  },
  {
    title: "Airshine Tours and Travel",
    image: image3,
    badge: ["In-Progress"],
    description:
      "Airshine Tours and Travel crafts personalized itineraries for unforgettable adventures and immersive cultural experiences.",
    tags: ["30 Years in Industry", "Offline To Online", "3+ Years of Partnership", "Travel Agency", "UI/UX", "Web Development"],
    url: ""
  },
  {
    title: "trackpe.money",
    image: image2,
    badge: ["In-Progress"],
    description: "trackpe.money is a platform that helps you track your expenses and income.",
    tags: ["Startup", "Product Marketing", "Maintenance", "UI/UX Design", "AI", "Marketing"],
    url: "https://trackpe.money"
  },
  {
    title: "A1 Pod",
    image: image2,
    badge: ["In-Progress"],
    description:
      "A1Pod is an event management platform that brings people together by creating and facilitating engaging events.",
    tags: ["Startup", "Product Marketing", "Maintenance", "UI/UX Design", "AI", "Marketing"],
    url: "https://a1pod.example.com"
  },
  {
    title: "This Could Be You",
    image: "src/assets/images/client/you.jpg",
    description:
      "Your business could be featured here. Let’s embark on a successful journey together!",
    tags: ["Web Development", "Marketing", "Design", "UI/UX Design", "Artificial Intelligence"],
    url: "#"
  },
];

const PortfolioGrid = () => {
  return (
    <section className="bg-white py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioItems.map((item, idx) => (
          <div
            key={idx}
            className="group border border-gray-200 rounded-2xl shadow hover:shadow-xl transition duration-300 bg-gradient-to-br from-white to-gray-50 overflow-hidden"
          >
            <div className="bg-teal-50 p-6 flex justify-center items-center h-48">
              <img
                src={item.image}
                alt={item.title}
                className="object-contain h-full max-w-full filter invert group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              {item.badge && item.badge.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-3">
                  {item.badge.map((b, i) => (
                    <span
                      key={i}
                      className="inline-block text-xs font-semibold text-amber-800 bg-amber-100 px-3 py-1 rounded-full"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              )}

              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-teal-600 transition-colors">
                  {item.title}
                </h3>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 hover:text-teal-800"
                >
                  <ExternalLink size={16} />
                </a>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="text-xs bg-teal-100 text-teal-700 font-medium px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioGrid;
