

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Contact from '../assets/images/contact/Contact.png';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);

    setIsSubmitting(true);

    const serviceId = 'service_uvbfozf'; // Replace with your EmailJS Service ID
const templateId = 'template_au8z05b'; // Replace with your EmailJS Template ID
const publicKey = 'Oz9mnLMhNOgBm8YYI'; // Replace with your EmailJS Public Key

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      message: formData.message,
      to_email: 'team.hruthiksivakumar@gmail.com'
    };

    console.log('Template Params:', templateParams);

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        console.log('Error details:', error.text);
        setSubmitStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div>
      <section className="md:py-16 md:px-8 md:mr-8 md:ml-8 py-10 mt-10 md:mt-0">
        <div className="container mx-auto flex flex-col md:flex-row justify-between gap-4 md:gap-6">
          <div className="md:w-1/2">
            <img 
              src={Contact}
              alt="Contact Image" 
              className="w-90 md:w-115 flex justify-center md:justify-center m-8 md:m-0"
              loading="lazy"
            />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4">Contact Us</h1>
            <p className="text-gray-600 mb-6">Any question or remarks? Just write us a message!</p>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <input 
                  type="text" 
                  name="name"
                  placeholder="Name*" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  name="email"
                  placeholder="Email address" 
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <input 
                  type="tel" 
                  name="phone"
                  placeholder="Phone* (10 digits or +91 followed by 10 digits)" 
                  value={formData.phone}
                  onChange={handleChange}
                  pattern="^(\+91[0-9]{10}|[0-9]{10})$"
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  title="Please enter a 10-digit phone number or a 13-digit number starting with +91"
                />
              </div>
              <div>
                <textarea 
                  name="message"
                  placeholder="Message*" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`bg-yellow-400 text-black px-6 py-3 rounded-md font-semibold w-full ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-yellow-500'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
            {submitStatus === 'success' && (
              <p className="text-green-600 mt-4">Message sent successfully!</p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-600 mt-4">Failed to send message. Please try again.</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;