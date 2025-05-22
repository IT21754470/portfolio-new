import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGithub, SiGmail } from "react-icons/si";
import { my } from "../../assets/index";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  return (
    <footer className="from-blue-900/90 text-center text-sm">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
        {/* Left: Profile */}
        <div className="flex flex-col items-center md:items-start">
          <img
            src={my}
            alt="logo"
            className="w-32 h-32 rounded-full shadow-lg object-cover"
          />
          <p className="mt-4 text-gray-600 text-center md:text-left">
            Let's connect and collaborate!
          </p>
        </div>

        {/* Empty middle column for spacing */}
        <div className="hidden md:block"></div>

        {/* Right: Social Icons */}
        <div className="flex justify-end gap-6">
          <a
            href="https://github.com/IT21754470"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black transition-colors duration-200 text-2xl"
          >
            <SiGithub />
          </a>
          <a
            href="mailto:sathminisuabsinghe05@gmail.com"
            className="text-gray-600 hover:text-red-500 transition-colors duration-200 text-2xl"
          >
            <SiGmail />
          </a>
          <a
            href="https://www.linkedin.com/in/sathmini-subasinghe-8649022a1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-700 transition-colors duration-200 text-2xl"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200" />

    
    </footer>
  );
};

export default Footer;
