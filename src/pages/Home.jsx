// App.jsx
import React from 'react';
import MetricsSection from '../components/MetricsSection';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import TestimonialSection from "../components/TestimonialSection";
import CalltoActionSection from '../components/CalltoActionSection';
import PortfolioSection from '../components/PortfolioSection';
import OurPartnership from '../components/OurPartnership';
const Home = () => {
  return (
    <div className="">
      {/* Header Section */}
      
      <HeroSection />

      <OurPartnership />

      <MetricsSection />

      <ServicesSection />

      <PortfolioSection />

      <TestimonialSection />

      <CalltoActionSection />
    </div>
  );
};

export default Home;