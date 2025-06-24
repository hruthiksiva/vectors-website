import React, { useState, useEffect, useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';
import logo from '../assets/images/home/Logo.svg';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const getLinkClass = (path) => {
    return `hover:text-blue-800 ${
      location.pathname === path ? 'text-blue-800' : 'text-gray-600'
    }`;
  };

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // Close mobile menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };
    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className="bg-white shadow-md py-6 px-6 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Brand */}
        <Link to='/'>
          <div className="text-2xl flex items-center">
            <img src={logo} width={150} alt="Logo" />
          </div>
        </Link>

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-gray-800 hover:text-gray-600 focus:outline-none p-2"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Navigation Links - Desktop */}
        <ul className="hidden md:flex space-x-6 font-medium font-display">
          <li>
            <Link to="/" className={getLinkClass('/')}>Home</Link>
          </li>
          <li>
            <Link to="/services" className={getLinkClass('/services')}>Services</Link>
          </li>
          <li>
            <Link to="/portfolio" className={getLinkClass('/portfolio')}>Portfolio</Link>
          </li>
          <li>
            <Link to="/pricing" className={getLinkClass('/pricing')}>Pricing</Link>
          </li>
          <li>
            <Link to="/about" className={getLinkClass('/about')}>About</Link>
          </li>
          <li>
            <Link to="/contact" className={getLinkClass('/contact')}>Contact</Link>
          </li>
        </ul>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div ref={menuRef} className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md z-10">
            <ul className="flex flex-col items-center space-y-4 py-4 font-display">
              <li>
                <Link to="/" className={getLinkClass('/')} onClick={toggleMobileMenu}>Home</Link>
              </li>
              <li>
                <Link to="/services" className={getLinkClass('/services')} onClick={toggleMobileMenu}>Services</Link>
              </li>
              <li>
                <Link to="/portfolio" className={getLinkClass('/portfolio')} onClick={toggleMobileMenu}>Portfolio</Link>
              </li>
              <li>
                <Link to="/pricing" className={getLinkClass('/pricing')} onClick={toggleMobileMenu}>Pricing</Link>
              </li>
              <li>
                <Link to="/about" className={getLinkClass('/about')} onClick={toggleMobileMenu}>About</Link>
              </li>
              <li>
                <Link to="/contact" className={getLinkClass('/contact')} onClick={toggleMobileMenu}>Contact</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;