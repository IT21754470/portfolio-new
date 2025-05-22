import React from "react";
import { FaGraduationCap, FaCode, FaCogs, FaClock } from "react-icons/fa";

const stats = [
  { label: "Year of Study", value: "4th", icon: <FaGraduationCap className="text-4xl text-blue-300 mb-2" /> },
  { label: "Projects", value: "20+", icon: <FaCode className="text-4xl text-blue-300 mb-2" /> },
  { label: "Tech Stacks", value: "8+", icon: <FaCogs className="text-4xl text-blue-300 mb-4" /> },
  { label: "Learning Hours", value: "1000+", icon: <FaClock className="text-4xl text-blue-300 mb-2" /> },
];

const HeroSection = () => {
  return (
    <section className="w-full py-24 relative overflow-hidden flex flex-col items-center justify-center text-center mb-40">
      {/* Badge with dot */}
      <div className="flex items-center justify-center mb-12">
        <span className="w-2.3 h-2.5 bg-blue-400 rounded-full mr-1"></span>
        <span className="inline-block w-fit px-6 py-2.5 bg-blue-900/90 text-white rounded-full text-xl font-semibold shadow-lg drop-shadow-lg tracking-wide"> QA Engineer & Project Manager</span>
      </div>
      {/* Headline */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4">
        Transforming Ideas Into <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Digital Reality</span>
      </h1>
      {/* Description */}
      <p className="text-lg text-blue-100 mb-12 max-w-2xl mx-auto">
        Passionate about creating innovative solutions that address real-world problems through clean code and modern technologies.
      </p>
      {/* Stats row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-5xl mb-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-blue-900/60 rounded-2xl py-10 px-6 flex flex-col items-center shadow-lg border border-blue-800">
            {stat.icon}
            <span className="text-4xl font-extrabold text-blue-400 mb-1">{stat.value}</span>
            <span className="text-base text-blue-100">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection; 