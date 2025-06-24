import React from 'react';
import { FaYoutube, FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa';
import logo from "../assets/images/home/logo-white.svg";
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const navigate = useNavigate();

  const handleSmoothLink = (path) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(path);
  };

  const linkStyle = "text-white transition-transform transform hover:scale-105 hover:brightness-110 block p-2";

  const motionProps = {
    whileHover: {
      scale: 1.08,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  };

  return (
    <footer className="bg-black text-white pt-34 pb-5 px-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-15">
          {/* Logo and Social Media */}
          <div className="mb-6 md:mb-0">
            <a href='/'>
              <img src={logo} width={200} alt="Logo" className='m-6' />
            </a>

            <p className="text-xl mb-6 mt-6 ml-6 mr-6 text-white">
              Crafting digital experiences that drive exponential brand growth.
            </p>
            <div className="flex space-x-4 m-7">
              {[{
                href: "https://www.youtube.com/@vectors.academy/videos",
                icon: FaYoutube,
                label: "YouTube"
              }, {
                href: "https://www.instagram.com/vectors.co.in",
                icon: FaInstagram,
                label: "Instagram"
              }, {
                href: "https://www.facebook.com/profile.php?id=61571541391600",
                icon: FaFacebook,
                label: "Facebook"
              }, {
                href: "mailto:contact@vectors.co.in",
                icon: FaEnvelope,
                label: "Email"
              }].map(({ href, icon: Icon, label }, idx) => (
                <motion.a
                  key={idx}
                  href={href}
                  target="_blank"
                  className="text-white"
                  aria-label={label}
                  {...motionProps}
                >
                  <Icon className="w-10 h-10" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <h4 className="text-lg mb-2 p-2 text-white">Quick Links</h4>
              {["/", "/services", "/about", "/portfolio", "/pricing", "/contact"].map((path, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => handleSmoothLink(path)}
                  className={linkStyle}
                  {...motionProps}
                >
                  {path === '/' ? 'Home' : path.replace('/', '').charAt(0).toUpperCase() + path.replace('/', '').slice(1)}
                </motion.button>
              ))}
            </div>
            <div className="space-y-2">
              <h4 className="text-lg mb-2 p-2 text-white">Legal & Policies</h4>
              {["/terms-and-conditions", "/privacy-policy", "/sitemap"].map((path, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => handleSmoothLink(path)}
                  className={linkStyle}
                  {...motionProps}
                >
                  {path.includes("terms") ? "Terms & Conditions" : path.includes("privacy") ? "Privacy Policy" : "Sitemap"}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-2 text-gray-300">
            <h4 className="text-lg mb-2 p-2 text-white">Contact Us</h4>
            <div className='p-2'>
              <p className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="white" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                Chennai 600 081
              </p>
            </div>
            <div className='p-2'>
              <a href='mailto:contact@vectors.co.in'>
                <p className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="white" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                  contact@vectors.co.in
                </p>
              </a>
            </div>
            <div className='p-2'>
              <a href='tel:+919884679119'>
                <p className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="white" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.24 1.02l-2.2 2.2z"/></svg>
                  +91 98846 79119
                </p>
              </a>
            </div>
            <div className='p-2'>
              <a href='tel:+918012329840'>
                <p className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="white" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 14v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
                  Text us on WhatsApp
                </p>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-center text-xs text-gray-500 mt-8 border-t border-gray-700 pt-4">
          © 2025 Vectors. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
