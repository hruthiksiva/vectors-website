import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PricingHeader = () => (
  <motion.section
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true, amount: 0.2 }}
    className="bg-indigo-50 py-34 px-6"
  >
    <div className="container mx-auto">
      <h1 className="text-2xl md:text-5xl font-bold plus-jakarta-sans-1 text-gray-800 text-center py-5">
        Our Pricing Plans
      </h1>
      <p className="text-gray-600 max-w-2xl mx-auto text-center plus-jakarta-sans-2">
        Choose the perfect plan for your business needs. All plans include our core features and dedicated support.
      </p>
    </div>
  </motion.section>
);


const PricingContent = ({ activeFilter, setActiveFilter, filters, renderContent }) => (
  <section className="py-16 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <FilterBar activeFilter={activeFilter} setActiveFilter={setActiveFilter} filters={filters} />
      {renderContent()}
    </div>
  </section>
);

const FilterBar = ({ activeFilter, setActiveFilter, filters }) => (
  <div className="flex flex-wrap justify-center gap-4 mb-16">
    {filters.map((filter) => (
      <motion.button
  whileHover={{ scale: 1.08 }}
  whileTap={{ scale: 0.95 }}
  key={filter.id}
  onClick={() => setActiveFilter(filter.id)}
  className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
    activeFilter === filter.id
      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg'
      : 'bg-white text-gray-600 hover:bg-gray-50 shadow-md'
  }`}
>
  {filter.label}
</motion.button>

    ))}
  </div>
);

const Pricing = () => {
  const [activeFilter, setActiveFilter] = useState('web');

  const filters = [
    { id: 'web', label: 'Web Development' },
    { id: 'app', label: 'App Development' },
    { id: 'marketing', label: 'Digital Marketing' },
    { id: 'uiux', label: 'UI/UX Design' },
    { id: 'ai', label: 'AI & Automation' },
    { id: 'consulting', label: 'Consulting' },
    { id: 'finance', label: 'Financial Services' }
  ];

  const webDevPlans = [
    {
      name: 'Standard',
      price: '₹50,000',
      features: [
        'Responsive Website Design',
        '5-10 Pages',
        'Basic SEO Optimization',
        'Contact Form',
        'Social Media Integration',
        'Basic Analytics',
        'Mobile-Friendly Design',
        'Standard Support',
        'Basic Content Management',
        'Standard Loading Speed',
        'Custom Animations',
        'Advanced Security Features'
      ]
    },
    {
      name: 'Pro',
      price: '₹1.5 Lakhs',
      features: [
        'Responsive Website Design',
        '5-10 Pages',
        'Basic SEO Optimization',
        'Contact Form',
        'Social Media Integration',
        'Basic Analytics',
        'Mobile-Friendly Design',
        'Standard Support',
        'Basic Content Management',
        'Standard Loading Speed',
        'Custom Animations',
        'Advanced Security Features'
      ]
    },
    {
      name: 'Enterprise',
      price: '₹5 Lakhs',
      features: [
        'Responsive Website Design',
        '5-10 Pages',
        'Basic SEO Optimization',
        'Contact Form',
        'Social Media Integration',
        'Basic Analytics',
        'Mobile-Friendly Design',
        'Standard Support',
        'Basic Content Management',
        'Standard Loading Speed',
        'Custom Animations',
        'Advanced Security Features'
      ]
    }
  ];

  const appDevPlans = [
    {
      name: 'Standard',
      price: '₹50,000',
      features: [
        'Single Platform App (iOS/Android)',
        'Basic UI/UX Design',
        '5-10 Core Features',
        'Basic User Authentication',
        'Simple Database Integration',
        'Basic Push Notifications',
        'Standard App Performance',
        'Basic Analytics Integration',
        'Standard Support',
        'App Store Submission',
        'Custom Animations',
        'Advanced Security Features'
      ]
    },
    {
      name: 'Pro',
      price: '₹2 Lakhs',
      features: [
        'Single Platform App (iOS/Android)',
        'Basic UI/UX Design',
        '5-10 Core Features',
        'Basic User Authentication',
        'Simple Database Integration',
        'Basic Push Notifications',
        'Standard App Performance',
        'Basic Analytics Integration',
        'Standard Support',
        'App Store Submission',
        'Custom Animations',
        'Advanced Security Features'
      ]
    },
    {
      name: 'Enterprise',
      price: '₹10 Lakhs',
      features: [
        'Single Platform App (iOS/Android)',
        'Basic UI/UX Design',
        '5-10 Core Features',
        'Basic User Authentication',
        'Simple Database Integration',
        'Basic Push Notifications',
        'Standard App Performance',
        'Basic Analytics Integration',
        'Standard Support',
        'App Store Submission',
        'Custom Animations',
        'Advanced Security Features'
      ]
    }
  ];

  const marketingPlans = [
    {
      name: 'Standard',
      price: '₹50,000',
      features: [
        'Social Media Management',
        'Content Creation (4 posts/month)',
        'Basic SEO Optimization',
        'Email Marketing Setup',
        'Basic Analytics & Reporting',
        'Monthly Performance Review',
        'Social Media Strategy',
        'Basic Competitor Analysis',
        'Standard Support',
        'Basic Campaign Management',
        'Influencer Marketing',
        'Content Marketing Strategy'
      ]
    },
    {
      name: 'Pro',
      price: '₹1.5 Lakhs',
      features: [
        'Social Media Management',
        'Content Creation (4 posts/month)',
        'Basic SEO Optimization',
        'Email Marketing Setup',
        'Basic Analytics & Reporting',
        'Monthly Performance Review',
        'Social Media Strategy',
        'Basic Competitor Analysis',
        'Standard Support',
        'Basic Campaign Management',
        'Influencer Marketing',
        'Content Marketing Strategy'
      ]
    },
    {
      name: 'Enterprise',
      price: '₹5 Lakhs',
      features: [
        'Social Media Management',
        'Content Creation (4 posts/month)',
        'Basic SEO Optimization',
        'Email Marketing Setup',
        'Basic Analytics & Reporting',
        'Monthly Performance Review',
        'Social Media Strategy',
        'Basic Competitor Analysis',
        'Standard Support',
        'Basic Campaign Management',
        'Influencer Marketing',
        'Content Marketing Strategy'
      ]
    }
  ];

  const uiuxPlans = [
    {
      name: 'Standard',
      price: '₹50,000',
      features: [
        'Basic UI/UX Design',
        '5-10 Screen Designs',
        'Mobile Responsive Design',
        'Basic User Research',
        'Wireframing',
        'Basic Prototyping',
        'Color Scheme & Typography',
        'Basic Design System',
        'Standard Support',
        'Basic User Testing',
        'Interactive Prototyping',
        'Advanced Design System'
      ]
    },
    {
      name: 'Pro',
      price: '₹1.5 Lakhs',
      features: [
        'Basic UI/UX Design',
        '5-10 Screen Designs',
        'Mobile Responsive Design',
        'Basic User Research',
        'Wireframing',
        'Basic Prototyping',
        'Color Scheme & Typography',
        'Basic Design System',
        'Standard Support',
        'Basic User Testing',
        'Interactive Prototyping',
        'Advanced Design System'
      ]
    },
    {
      name: 'Enterprise',
      price: '₹10 Lakhs',
      features: [
        'Basic UI/UX Design',
        '5-10 Screen Designs',
        'Mobile Responsive Design',
        'Basic User Research',
        'Wireframing',
        'Basic Prototyping',
        'Color Scheme & Typography',
        'Basic Design System',
        'Standard Support',
        'Basic User Testing',
        'Interactive Prototyping',
        'Advanced Design System'
      ]
    }
  ];

  const aiPlans = [
    {
      name: 'Standard',
      price: '₹50,000',
      features: [
        'Basic AI Chatbot Integration',
        'Simple Task Automation',
        'Basic Data Analysis',
        'Email Automation Setup',
        'Basic Customer Support Bot',
        'Standard AI Models Integration',
        'Basic Workflow Automation',
        'Simple Data Processing',
        'Standard Support',
        'Basic Analytics Dashboard',
        'Custom AI Solutions',
        'Advanced AI Analytics'
      ]
    },
    {
      name: 'Pro',
      price: '₹1.5 Lakhs',
      features: [
        'Basic AI Chatbot Integration',
        'Simple Task Automation',
        'Basic Data Analysis',
        'Email Automation Setup',
        'Basic Customer Support Bot',
        'Standard AI Models Integration',
        'Basic Workflow Automation',
        'Simple Data Processing',
        'Standard Support',
        'Basic Analytics Dashboard',
        'Custom AI Solutions',
        'Advanced AI Analytics'
      ]
    },
    {
      name: 'Enterprise',
      price: '₹10 Lakhs',
      features: [
        'Basic AI Chatbot Integration',
        'Simple Task Automation',
        'Basic Data Analysis',
        'Email Automation Setup',
        'Basic Customer Support Bot',
        'Standard AI Models Integration',
        'Basic Workflow Automation',
        'Simple Data Processing',
        'Standard Support',
        'Basic Analytics Dashboard',
        'Custom AI Solutions',
        'Advanced AI Analytics'
      ]
    }
  ];

  const consultingPlans = [
    {
      name: 'Standard',
      price: '₹25,000',
      features: [
        'Business Strategy Consultation',
        'Market Research & Analysis',
        'Basic Financial Planning',
        'Business Model Development',
        'Basic Legal Consultation',
        'Standard Support',
        'Monthly Review Sessions',
        'Basic Documentation',
        'Basic Tax Planning',
        'Basic Compliance Review',
        'Risk Assessment',
        'Business Process Optimization'
      ]
    },
    {
      name: 'Pro',
      price: '₹1 Lakh',
      features: [
        'Business Strategy Consultation',
        'Market Research & Analysis',
        'Basic Financial Planning',
        'Business Model Development',
        'Basic Legal Consultation',
        'Standard Support',
        'Monthly Review Sessions',
        'Basic Documentation',
        'Basic Tax Planning',
        'Basic Compliance Review',
        'Risk Assessment',
        'Business Process Optimization'
      ]
    },
    {
      name: 'Enterprise',
      price: '₹5 Lakhs',
      features: [
        'Business Strategy Consultation',
        'Market Research & Analysis',
        'Basic Financial Planning',
        'Business Model Development',
        'Basic Legal Consultation',
        'Standard Support',
        'Monthly Review Sessions',
        'Basic Documentation',
        'Basic Tax Planning',
        'Basic Compliance Review',
        'Risk Assessment',
        'Business Process Optimization'
      ]
    }
  ];

  const financingPlans = [
    {
      name: 'Standard',
      price: '₹10,000',
      features: [
        'Company Registration',
        'Basic Accounting Setup',
        'GST Registration',
        'Basic Tax Filing',
        'Basic Financial Reports',
        'Standard Support',
        'Basic Bookkeeping',
        'Basic Compliance',
        'Basic Financial Planning',
        'Basic Audit Support',
        'Investment Planning',
        'Business Valuation'
      ]
    },
    {
      name: 'Pro',
      price: '₹50,000',
      features: [
        'Company Registration',
        'Basic Accounting Setup',
        'GST Registration',
        'Basic Tax Filing',
        'Basic Financial Reports',
        'Standard Support',
        'Basic Bookkeeping',
        'Basic Compliance',
        'Basic Financial Planning',
        'Basic Audit Support',
        'Investment Planning',
        'Business Valuation'
      ]
    },
    {
      name: 'Enterprise',
      price: '₹2 Lakhs',
      features: [
        'Company Registration',
        'Basic Accounting Setup',
        'GST Registration',
        'Basic Tax Filing',
        'Basic Financial Reports',
        'Standard Support',
        'Basic Bookkeeping',
        'Basic Compliance',
        'Basic Financial Planning',
        'Basic Audit Support',
        'Investment Planning',
        'Business Valuation'
      ]
    }
  ];

  const consultingServices = [
    {
      title: 'Business Strategy',
      price: '25,000',
      description: 'Business planning and strategy development'
    },
    {
      title: 'Market Research',
      price: '30,000',
      description: 'Comprehensive market analysis and research'
    },
    {
      title: 'Legal Consultation',
      price: '20,000',
      description: 'Business legal framework and compliance'
    },
    {
      title: 'Financial Planning',
      price: '35,000',
      description: 'Business financial planning and modeling'
    },
    {
      title: 'Process Optimization',
      price: '40,000',
      description: 'Business process improvement and optimization'
    }
  ];

  const financingServices = [
    {
      title: 'Company Registration',
      price: '15,000',
      description: 'Complete company registration and setup'
    },
    {
      title: 'Accounting Services',
      price: '20,000',
      description: 'Full accounting and bookkeeping services'
    },
    {
      title: 'Tax Planning',
      price: '25,000',
      description: 'Comprehensive tax planning and filing'
    },
    {
      title: 'Financial Reporting',
      price: '18,000',
      description: 'Detailed financial reports and analysis'
    },
    {
      title: 'Compliance Management',
      price: '22,000',
      description: 'Full legal and regulatory compliance'
    }
  ];

  const serviceBreakdowns = {
    uiux: [
      {
        title: 'Brand Identity & Logos',
        price: '5,000',
        description: 'Professional logo design and brand identity packages'
      },
      {
        title: 'Web & App Design',
        price: '25,000',
        description: 'Complete UI/UX design for websites and applications'
      },
      {
        title: 'Print & Packaging Design',
        price: '8,000',
        description: 'Design for print materials and product packaging'
      },
      {
        title: 'Motion Graphics & Video',
        price: '8,000',
        description: 'Animated graphics and video content creation'
      },
      {
        title: 'Social Media Visuals',
        price: '1,000',
        description: 'Custom graphics for social media platforms'
      }
    ],
    marketing: [
      {
        title: 'Social Media Management',
        price: '12k-15k',
        description: 'Complete social media management and content creation'
      },
      {
        title: 'SEO Services',
        price: '20k-50k',
        description: 'Search engine optimization and content strategy'
      },
      {
        title: 'PPC Advertising',
        price: '25k-60k',
        description: 'Google Ads and social media advertising'
      },
      {
        title: 'Online Reputation Management(ORM)',
        price: '12k-15k',
        description: 'Build, protect, and enhance your brand online reputation with strategic monitoring and engagement.'
      },
      {
        title: 'Social Media Optimization(SMO)',
        price: '15k-40k',
        description: 'Maximize your social media reach and engagement through targeted content and platform optimization'
      },
      {
        title: 'Youtube Marketing',
        price: '10k-28k',
        description:'Boost visibility and grow your audience with impactful video content and smart YouTube strategies.'
      },
      {
        title: 'Instagram Marketing',
        price: '25k-40k',
        description: 'Drive brand awareness and conversions through creative Instagram campaigns tailored to your audience.'
      },
      {
        title: 'Facebook Marketing',
        price: '25k-40k',
        description: 'Reach and engage your ideal customers with data-driven Facebook advertising and content strategies.'
      }
    ],
    appDev: [
      {
        title: 'iOS App Development',
        price: '50,000',
        description: 'Native iOS application development'
      },
      {
        title: 'Android App Development',
        price: '50,000',
        description: 'Native Android application development'
      },
      {
        title: 'Cross-platform Apps',
        price: '75,000',
        description: 'React Native or Flutter development'
      },
      {
        title: 'App Maintenance',
        price: '15,000',
        description: 'Monthly app maintenance and updates'
      },
      {
        title: 'App Store Optimization',
        price: '10,000',
        description: 'ASO and app store listing optimization'
      }
    ],
    webDev: [
      {
        title: 'Business Website',
        price: '25,000',
        description: 'Professional business website development'
      },
      {
        title: 'E-commerce Website',
        price: '50,000',
        description: 'Online store with payment integration'
      },
      {
        title: 'Web Application',
        price: '75,000',
        description: 'Custom web application development'
      },
      {
        title: 'Website Maintenance',
        price: '5,000',
        description: 'Monthly website maintenance'
      },
      {
        title: 'Website Redesign',
        price: '30,000',
        description: 'Complete website redesign and optimization'
      }
    ],
    ai: [
      {
        title: 'AI Chatbot Development',
        price: '30,000',
        description: 'Custom AI chatbot for customer service'
      },
      {
        title: 'Process Automation',
        price: '40,000',
        description: 'Business process automation with AI'
      },
      {
        title: 'Data Analysis',
        price: '25,000',
        description: 'AI-powered data analysis and insights'
      },
      {
        title: 'AI Integration',
        price: '35,000',
        description: 'AI model integration with existing systems'
      },
      {
        title: 'Custom AI Solutions',
        price: '50,000',
        description: 'Tailored AI solutions for specific needs'
      }
    ]
  };

  const PricingSection = ({ title, plans }) => (
    <div className="mb-24">
      <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-8 lg:max-w-6xl lg:mx-auto xl:max-w-none xl:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
          >
            {plan.name === 'Pro' && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                  Most Popular
                </span>
              </div>
            )}
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
              <p className="text-4xl font-extrabold text-gray-900 mb-6">
              <span className="text-base font-normal text-gray-500">Starting from </span>
                {plan.price}
                
              </p>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, index) => {
                  const isIncluded = plan.name === 'Standard' ? index < 3 :
                                   plan.name === 'Pro' ? index < 9 :
                                   true;
                  return (
                    <li key={feature} className="flex items-start space-x-3">
                      {isIncluded ? (
                        <svg
                          className="flex-shrink-0 h-6 w-6 text-green-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="flex-shrink-0 h-6 w-6 text-red-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                      <span className={`text-gray-600 ${!isIncluded ? 'line-through text-gray-400' : ''}`}>
                        {feature}
                      </span>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-8">
                <a
                  href="/contact"
                  className={`block w-full py-3 px-6 rounded-xl text-center font-semibold text-white transition-all duration-300 ${
                    plan.name === 'Pro'
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700'
                      : 'bg-gray-900 hover:bg-gray-800'
                  } shadow-lg hover:shadow-xl`}
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const ServiceBox = ({ title, price, description }) => (
    <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 p-8 border border-gray-200 flex flex-col items-start">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <div className="w-full flex items-center mb-4">
        <span className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-1xl font-extrabold px-6 py-2 rounded-xl shadow-lg border-4 border-white">
          ₹{price}
        </span>
      </div>
      <div className="w-full border-t border-gray-200 my-4"></div>
      <p className="text-gray-700 text-base leading-relaxed">{description}</p>
    </div>
  );

  const ServiceSection = ({ title, services }) => (
    <div className="mb-24">
      <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service) => (
          <ServiceBox
            key={service.title}
            title={service.title}
            price={service.price}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeFilter) {
      case 'web':
        return (
          <>
            <PricingSection title="Web Development Plans" plans={webDevPlans} />
            <ServiceSection title="Web Development Services" services={serviceBreakdowns.webDev} />
          </>
        );
      case 'app':
        return (
          <>
            <PricingSection title="App Development Plans" plans={appDevPlans} />
            <ServiceSection title="App Development Services" services={serviceBreakdowns.appDev} />
          </>
        );
      case 'marketing':
        return (
          <>
            <PricingSection title="Digital Marketing Plans" plans={marketingPlans} />
            <ServiceSection title="Digital Marketing Services" services={serviceBreakdowns.marketing} />
          </>
        );
      case 'uiux':
        return (
          <>
            <PricingSection title="UI/UX Design Plans" plans={uiuxPlans} />
            <ServiceSection title="UI/UX Design Services" services={serviceBreakdowns.uiux} />
          </>
        );
      case 'ai':
        return (
          <>
            <PricingSection title="AI Automations & Agents Plans" plans={aiPlans} />
            <ServiceSection title="AI & Automation Services" services={serviceBreakdowns.ai} />
          </>
        );
      case 'consulting':
        return (
          <>
            <PricingSection title="Business Consulting Plans" plans={consultingPlans} />
            <ServiceSection title="Consulting Services" services={consultingServices} />
          </>
        );
      case 'finance':
        return (
          <>
            <PricingSection title="Financial Services Plans" plans={financingPlans} />
            <ServiceSection title="Financial Services" services={financingServices} />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col pt-20">
      <main className="flex-grow">
        <PricingHeader />
        <PricingContent 
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          filters={filters}
          renderContent={renderContent}
        />
      </main>
    </div>
  );
};

export default Pricing; 