import React from 'react';
// If you have react-icons installed, uncomment the next line:
// import { FaLinkedin } from 'react-icons/fa';
import Member1 from '/src/assets/images/member-1.png';
import Member2 from '/src/assets/images/member-4.jpeg';
import Member3 from '/src/assets/images/member-2.jpeg';
import Member4 from '/src/assets/images/member-5.jpg';

const founders = [
  {
    img: Member1,
    name: 'Hruthik Sivakumar',
    title: 'Co-Founder & CEO',
    position: 'Data Science Lead',
    linkedin: '#',
  },
  {
    img: Member2,
    name: 'Balaji Sundarapandi',
    title: 'Co-Founder & COO',
    position: 'Marketing Lead',
    linkedin: '#',
  },
  {
    img: Member3,
    name: 'Kowshik Karmegam',
    title: 'Co-Founder & CTO',
    position: 'Development Lead',
    linkedin: '#',
  },
];

const leadership = [
  {
    img: Member4,
    name: 'Naveen Muthusamy',
    title: 'Chief Design Officer',
    position: '',
    linkedin: '#',
  },
];

const LinkedInIcon = () => (
  // If you have react-icons, use: <FaLinkedin className="w-5 h-5 text-blue-500" />
  <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.271c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.785 1.75 1.75-.784 1.75-1.75 1.75zm15.5 10.271h-3v-4.604c0-1.099-.021-2.513-1.532-2.513-1.533 0-1.768 1.197-1.768 2.434v4.683h-3v-9h2.881v1.229h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2.001 3.6 4.599v4.735z"/></svg>
);

const TeamSection = () => {
  return (
    <section className="bg-cyan-50 py-16 sm:py-24 px-4 sm:px-6 m-10 rounded-3xl">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6 sm:mb-8">Our Team</h2>
        <p className="text-gray-600 mb-6 sm:mb-8 pb-4 sm:pb-5 text-sm sm:text-xl">
          The team behind this wonderful company
        </p>
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-gray-700 mb-6">Founders</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
            {founders.map((member, idx) => (
              <div
                key={idx}
                className="bg-[#1e293b] bg-opacity-50 rounded-xl shadow-lg overflow-hidden flex flex-col w-full max-w-xs transition-transform duration-200 hover:scale-105 hover:shadow-2xl border border-transparent hover:border-cyan-400"
              >
                <div className="w-full h-70 flex items-center justify-center bg-black">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-[260px] object-cover rounded-t-xl"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-row items-center justify-between px-4 py-3">
                  <div className="flex flex-col items-start">
                    <span className="text-white font-bold text-base leading-tight">{member.name}</span>
                    <span className="text-cyan-300 text-xs leading-tight">{member.title}</span>
                    <span className="text-gray-400 text-xs leading-tight">{member.position}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-gray-700 mb-6">Leadership</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
            {leadership.map((member, idx) => (
              <div
                key={idx}
                className="bg-[#1e293b] bg-opacity-50 rounded-xl shadow-lg overflow-hidden flex flex-col w-full max-w-xs transition-transform duration-200 hover:scale-105 hover:shadow-2xl border border-transparent hover:border-cyan-400"
              >
                <div className="w-full h-70 flex items-center justify-center bg-black">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-[260px] object-cover rounded-t-xl"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-row items-center justify-between px-4 py-3">
                  <div className="flex flex-col items-start">
                    <span className="text-white font-bold text-base leading-tight">{member.name}</span>
                    <span className="text-cyan-300 text-xs leading-tight">{member.title}</span>
                    {member.position && (
                      <span className="text-gray-400 text-xs leading-tight">{member.position}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;