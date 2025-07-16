import React from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

import biotikImg from "../assets/images/client/biotik-new.svg";
import educomfyImg from "../assets/images/client/educomfy-new.svg";
import exponentImg from "../assets/images/client/exponent-new.svg";
import socialImg from "../assets/images/client/social-new.svg";
import bringerImg from "../assets/images/client/bringer-new.svg";
import appflowImg from "../assets/images/client/appflow-new.svg";
import pythonistaplanetImg from "../assets/images/client/pythonistplanet.svg";
import sengaduImg from "../assets/images/client/sengadu-new.svg";
import RaasImg from "../assets/images/client/RaasConsult.jpeg";
import probicImg from "../assets/images/client/probic.svg";
import img11Img from "../assets/images/client/Img11.svg";
import img12Img from "../assets/images/client/Img12.svg";
import img13Img from "../assets/images/client/Img13.svg";
import img14Img from "../assets/images/client/Img14.svg";
import img15Img from "../assets/images/client/you.svg";

const portfolioCategories = {
  "Enterprise Level SAAS Applications": [
    {
      title: "Byrd",
      image: img11Img,
      badge: ["In-Progress"],
      description:
        "Byrd is an enterprise-grade carbon neutralising calculator, maintenance management and collaboration platform that streamlines workflows across organizations.",
      tags: ["Enterprise", "SAAS", "Project Management", "Collaboration", "Cimate Change", "NGO"],
      url: "https://www.byrds.one/"
    },
    {
      title: "Feddup",
      image: img11Img,
      badge: ["In-Progress"],
      description:
        "Feddup is a comprehensive feedback management system that helps enterprises collect, analyze, and act on customer and employee feedback at scale.",
      tags: ["Enterprise", "SAAS", "Feedback Management", "Analytics", "Customer Experience", "Data Insights"],
      url: "https://www.feddup.me/"
    }
  ],
  "Professional Full Stack Websites": [
    {
      title: "Biotik",
      badge: ["Long-Term Client", "Featured"],
      image: biotikImg,
      description:
        "Biotik empowers impact-driven individuals and organizations to communicate effectively through compelling storytelling, design, and engagement.",
      tags: ["Startup", "Product Visioning", "1+ Year Partnership", "UI/UX", "Web Development", "Branding"],
      url: "https://biotik.in"
    },
    {
      title: "EduComfy",
      badge: ["Long-Term Client"],
      image: educomfyImg,
      description:
        "EduComfy is a comprehensive learning platform that empowers tutors to generate passive income and connects students with high-quality educators.",
      tags: ["Startup", "Product Marketing", "Maintenance", "UI/UX Design", "AI", "Marketing"],
      url: "https://educomfy.in"
    },
    {
      title: "Bringer",
      image: bringerImg,
      description:
        "Bringer is a B2B AI-enabled platform that organizes all your photos seamlessly with a single selfie upload.",
      tags: ["Startup", "Product Marketing", "Maintenance", "UI/UX Design", "AI", "B2B"],
      url: "https://business.bringerapp.com/"
    },
    {
      title: "Sengadu Organics",
      image: sengaduImg,
      description:
        "Sengadu Organics delivers fresh, organic produce sourced from heritage-rich red soil regions.",
      tags: ["Web Development", "Product Marketing", "UI/UX Design", "Sales", "Organic"],
      url: "https://www.sengaduorganics.in/"
    },
    {
      title: "trackpe.money",
      image: img13Img,
      badge: ["In-Progress"],
      description:
        "trackpe.money is a platform that helps you track your expenses and income.",
      tags: ["Startup", "Product Marketing", "Maintenance", "UI/UX Design", "AI", "Marketing"],
      url: "https://trackpe.money"
    }
  ],
  "Static Websites": [
    {
      title: "RAAS Consultancy",
      image: RaasImg,
      description:
        "RAAS Consultancy blends financial clarity with human-first thinking — offering ethical, tailored services for startups, freelancers, and growing businesses across India.",
      tags: ["Financial Consulting", "Tax Filing", "Compliance", "Startups", "Bookkeeping", "Advisory"],
      url: "https://www.raasconsultancy.in/"
    },
    {
      title: "ExponentFinserv",
      image: exponentImg,
      description:
        "ExponentFinserv delivers seamless financing solutions and expert consulting services to help you realize your goals.",
      tags: ["Marketing", "Web Development", "Maintenance"],
      url: "https://exponentfinserv.com"
    },
    {
      title: "Airshine Tours and Travel",
      image: img12Img,
      badge: ["In-Progress"],
      description:
        "Airshine Tours and Travel crafts personalized itineraries for unforgettable adventures and immersive cultural experiences.",
      tags: ["30 Years in Industry", "Offline To Online", "3+ Years of Partnership", "Travel Agency", "UI/UX", "Web Development"],
      url: "http://aqua-stinkbug-502877.hostingersite.com/"
    },
    {
      title: "Probic Consultancy",
      image: probicImg,
      description:
        "Probic Consultancy is a platform that helps you find the best consultant for your business.",
      tags: ["Marketing", "Web Development", "Maintenance"],
      url: "https://probic.co.in/"
    },
    
  ],
  "Mobile Applications": [
    {
      title: "A1 Pod",
      image: img14Img,
      badge: ["In-Progress"],
      description:
        "A1Pod is an event management platform that brings people together by creating and facilitating engaging events.",
      tags: ["Startup", "Product Marketing", "Maintenance", "UI/UX Design", "AI", "Marketing"],
      url: "https://a1pod.example.com"
    },
    {
      title: "Hawt Gallery",
      badge: ["In-Progress"],
      image: img11Img,
      description:
        "Hawt Gallery is a gamified photo platform that automatically collects images, organizes them based on user engagement and preferences, and efficiently archives or removes redundant photos.",
      tags: ["Startup", "Product Marketing", "Maintenance", "UI/UX Design", "AI", "Marketing"],
      url: "https://apps.apple.com/in/app/photo-cleaner-hawt/id6745742465"
    },
    {
      title: "Social Gallery",
      image: socialImg,
      description:
        "Social Gallery is an AI-driven photo-sharing platform that automatically curates photos from your network.",
      tags: ["Startup", "App Development", "Product Marketing", "Maintenance", "UI/UX Design", "AI", "Marketing"],
      url: "https://play.google.com/store/apps/details?id=com.smoose.photoowldev&hl=en_IN"
    },
  ],
  "Digital Marketing": [
    {
      title: "Social Gallery",
      image: socialImg,
      description:
        "Social Gallery is an AI-driven photo-sharing platform that automatically curates photos from your network.",
      tags: ["Startup", "App Development", "Product Marketing", "Maintenance", "UI/UX Design", "AI", "Marketing"],
      url: "https://play.google.com/store/apps/details?id=com.smoose.photoowldev&hl=en_IN"
    },
    // {
    //   title: "This could be your project",
    //   image: img15Img,
    //   description:
    //     "",
    //   tags: [],
    //    url: "https://raasconsultancy.com"
    // },
    {
      title: "EduComfy",
      badge: ["Long-Term Client"],
      image: educomfyImg,
      description:
        "EduComfy is a comprehensive learning platform that empowers tutors to generate passive income and connects students with high-quality educators.",
      tags: ["Startup", "Product Marketing", "Maintenance", "UI/UX Design", "AI", "Marketing"],
      url: "https://educomfy.in"
    },
    {
      title: "Hawt Gallery",
      badge: ["In-Progress"],
      image: img11Img,
      description:
        "Hawt Gallery is a gamified photo platform that automatically collects images, organizes them based on user engagement and preferences, and efficiently archives or removes redundant photos.",
      tags: ["Startup", "Product Marketing", "Maintenance", "UI/UX Design", "AI", "Marketing"],
      url: "https://apps.apple.com/in/app/photo-cleaner-hawt/id6745742465"
    },
    {
      title: "Sengadu Organics",
      image: sengaduImg,
      description:
        "Sengadu Organics delivers fresh, organic produce sourced from heritage-rich red soil regions.",
      tags: ["Web Development", "Product Marketing", "UI/UX Design", "Sales", "Organic"],
      url: "https://www.sengaduorganics.in/"
    },
    {
      title: "RAAS Consultancy",
      image: RaasImg,
      description:
        "RAAS Consultancy blends financial clarity with human-first thinking — offering ethical, tailored services for startups, freelancers, and growing businesses across India.",
      tags: ["Financial Consulting", "Tax Filing", "Compliance", "Startups", "Bookkeeping", "Advisory"],
      url: "https://www.raasconsultancy.in/"
    },
  ],
  "Content Writing": [
    {
      title: "Pythonistaplanet",
      image: pythonistaplanetImg,
      description:
        "Pythonistaplanet provides in-depth online courses covering Python programming, artificial intelligence, and data science.",
      tags: ["Python", "Content Writing", "Content Generation", "Artificial Intelligence", "5+ Videos"],
      url: "https://pythonistaplanet.com/"
    },
    {
      title: "Appflow.ai",
      image: appflowImg,
      description:
        "Appflow.ai enables mobile apps to drive growth with robust subscription analytics and targeted marketing tools.",
      tags: ["Singapore", "Content Creation", "Marketing", "25+ Articles"],
      url: "https://appflow.ai"
    }
  ]
};

const PortfolioGrid = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        {Object.entries(portfolioCategories).map(([categoryTitle, items], categoryIdx) => (
          <motion.div
            key={categoryTitle}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: categoryIdx * 0.1 }}
            className="space-y-8"
          >
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {categoryTitle}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-sky-500 to-blue-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {items.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="group border border-gray-200 rounded-xl lg:rounded-2xl shadow hover:shadow-xl transition duration-300 bg-gradient-to-br from-white to-gray-50 overflow-hidden"
                >
                  <div className="h-32 sm:h-40 lg:h-48 w-full overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="p-3 sm:p-4 lg:p-6">
                    {item.badge && item.badge.length > 0 && (
                      <div className="flex flex-wrap gap-1 sm:gap-2 mb-2 sm:mb-3">
                        {item.badge.map((b, i) => (
                          <span
                            key={i}
                            className="inline-block text-xs font-semibold text-amber-800 bg-amber-100 px-2 sm:px-3 py-1 rounded-full"
                          >
                            {b}
                          </span>
                        ))}
                      </div>
                    )}
                    <div className="flex items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                      <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 group-hover:text-sky-600 transition-colors">
                        {item.title}
                      </h3>
                      {item.url && item.url !== "#" && (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sky-600 hover:text-sky-800"
                        >
                          <ExternalLink size={14} className="sm:w-4 sm:h-4" />
                        </a>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-3 sm:mb-4 line-clamp-3">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {item.tags.slice(0, 3).map((tag, tagIdx) => (
                        <span
                          key={tagIdx}
                          className="text-xs bg-sky-100 text-sky-700 font-medium px-2 sm:px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                      {item.tags.length > 3 && (
                        <span className="text-xs bg-gray-100 text-gray-600 font-medium px-2 sm:px-3 py-1 rounded-full">
                          +{item.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioGrid;