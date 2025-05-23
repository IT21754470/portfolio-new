import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

const stats = [
  { label: "Years Experience", value: "2+" },
  { label: "Projects Delivered", value: "10+" },
  { label: "Happy Clients", value: "5+" },
];

const socialLinks = [
  { icon: <FaGithub />, url: "https://github.com/yourusername", title: "GitHub" },
  { icon: <FaLinkedin />, url: "https://linkedin.com/in/yourusername", title: "LinkedIn" },
  { icon: <FaInstagram />, url: "https://instagram.com/yourusername", title: "Instagram" },
  { icon: <FaFacebook />, url: "https://facebook.com/yourusername", title: "Facebook" },
];

const LeftBanner = () => {
  return (
    <div className="flex flex-col justify-center gap-8">
      <div className="flex items-center gap-4 mt-0 mb-4">
        <span className="inline-block w-fit px-5 py-1.5 bg-blue-900/90 text-white rounded-full text-lg font-semibold shadow tracking-wide">
          QA Engineer2 & Project Manager
        </span>
      </div>

      <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-2">
        Transforming{" "}
        <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          Ideas
        </span>{" "}
        Into{" "}
        <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          Digital Reality
        </span>
      </h1>

      <p className="text-lg text-blue-100 max-w-xl mb-6">
        BSc (Hons) IT undergraduate at SLIIT with expertise in software development and QA. Skilled in manual/automation
        testing, Selenium (TypeScript), Playwright, JMeter, Docker, and API testing. Full-stack developer experienced in MERN
        and Spring Boot development.
      </p>

      <div className="flex gap-4 flex-wrap mb-4">
        <button className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 hover:scale-105 transition duration-200">
          Let's Work Together
        </button>
        <button className="px-6 py-3 rounded-lg border-2 border-blue-400 text-blue-400 font-semibold hover:bg-blue-900/30 hover:text-white hover:border-blue-600 transition duration-200">
          View Portfolio
        </button>
      </div>

      <div className="flex flex-wrap gap-10 mt-2">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <span className="text-3xl font-extrabold text-blue-400 drop-shadow-lg">{stat.value}</span>
            <span className="text-base text-blue-100 mt-1 font-medium">{stat.label}</span>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10 mr-28">
        <div className="flex flex-col items-center bg-gray-900/70 px-6 sm:px-10 py-4 rounded-2xl shadow-xl border border-blue-500/30 backdrop-blur-md w-full max-w-md text-center transition-transform hover:scale-105 duration-300">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {socialLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                title={link.title}
                className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-blue-700 to-purple-600 text-white text-xl sm:text-2xl shadow-lg hover:from-purple-600 hover:to-blue-400 transition-all duration-300 border border-white/10"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
