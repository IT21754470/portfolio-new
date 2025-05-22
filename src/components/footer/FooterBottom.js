import React from "react";

const FooterBottom = () => {
  return (
    <div className="py-6 from-blue-900/90 text-center text-sm text-gray-500">
      <p>© {new Date().getFullYear()} Sathmini Subasinghe. All rights reserved.</p>

      {/* Navigation Links */}
      <nav className="mt-3 flex justify-center gap-6 text-gray-400 text-xs sm:text-sm">
        <a href="#home" className="hover:text-white transition">Home</a>
        <a href="#about" className="hover:text-white transition">About</a>
        <a href="#skills" className="hover:text-white transition">Skills</a>
        <a href="#experience" className="hover:text-white transition">Experience</a>
        <a href="#projects" className="hover:text-white transition">Projects</a>
        <a href="#contact" className="hover:text-white transition">Contact</a>
      </nav>
    </div>
  );
};

export default FooterBottom;

