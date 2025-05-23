import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGithub, SiGmail } from "react-icons/si";
import { mylogo } from "../../assets/index";
import { navLinksdata } from "../../constants";
import { FiDownload } from "react-icons/fi";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <div className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#0a192f] bg-opacity-98 shadow-lg' : 'bg-[#0a192f] bg-opacity-95'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 sm:h-20">
        
        {/* Logo and name - always visible */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <img
            src={mylogo}
            alt="profile"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-blue-700 shadow"
          />
          <span className="text-base sm:text-lg font-bold text-white hidden xs:block">
            Sathmini Subasinghe
          </span>
          <span className="text-base sm:text-lg font-bold text-white block xs:hidden">
            Sathmini
          </span>
        </div>

        {/* Desktop Navigation - hidden on mobile/tablet */}
        <nav className="hidden lg:flex flex-1 justify-center">
          <ul className="flex items-center gap-6 xl:gap-8">
            {navLinksdata.map(({ _id, title, link }) => (
              <li key={_id}>
                <Link
                  activeClass="text-blue-400 border-b-2 border-blue-400"
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-white font-semibold text-sm xl:text-base px-2 py-1 transition-colors duration-300 cursor-pointer hover:text-blue-400 border-b-2 border-transparent hover:border-blue-400"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Resume button - hidden on mobile/tablet */}
        <div className="hidden lg:flex items-center">
          <a
            href="https://drive.google.com/file/d/14i7Z72PrYDzwGT_d0-OswL--x63kPMQJ/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 xl:px-4 py-2 border border-blue-400 text-blue-400 rounded-lg font-semibold text-sm xl:text-base hover:bg-blue-400 hover:text-white transition-colors duration-200"
          >
            <FiDownload className="text-base xl:text-lg" /> Resume
          </a>
        </div>

        {/* Mobile/Tablet menu button */}
        <button
          onClick={() => setShowMenu(true)}
          className="lg:hidden text-white hover:text-blue-400 transition-colors duration-300 p-2"
        >
          <FiMenu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile/Tablet menu overlay */}
      {showMenu && (
        <div className="lg:hidden fixed inset-0 z-50">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowMenu(false)}
          />
          
          {/* Slide-out menu */}
          <div className="absolute inset-y-0 right-0 w-full max-w-sm bg-[#0a192f] shadow-2xl transform transition-transform duration-300">
            <div className="flex flex-col h-full">
              
              {/* Header */}
              <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-700">
                <div className="flex items-center gap-3">
                  <img
                    src={mylogo}
                    alt="logo"
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-blue-700 shadow"
                  />
                  <span className="text-white font-bold text-base sm:text-lg">
                    Sathmini
                  </span>
                </div>
                <button
                  onClick={() => setShowMenu(false)}
                  className="text-gray-300 hover:text-white transition-colors duration-300 p-2"
                >
                  <MdClose className="w-6 h-6" />
                </button>
              </div>
              
              {/* Navigation Links */}
              <div className="flex-1 px-4 sm:px-6 py-6 overflow-y-auto">
                <ul className="space-y-1">
                  {navLinksdata.map((item) => (
                    <li key={item._id}>
                      <Link
                        onClick={() => setShowMenu(false)}
                        activeClass="text-blue-400 bg-blue-400/10"
                        to={item.link}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="text-white hover:text-blue-400 hover:bg-blue-400/10 transition-all duration-300 cursor-pointer text-lg font-semibold block px-4 py-3 rounded-lg"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* Mobile Resume button */}
                <div className="mt-8">
                  <a
                    href="https://drive.google.com/file/d/14i7Z72PrYDzwGT_d0-OswL--x63kPMQJ/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setShowMenu(false)}
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 border border-blue-400 text-blue-400 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-colors duration-200"
                  >
                    <FiDownload className="text-lg" /> Download Resume
                  </a>
                </div>
              </div>

              {/* Social Links Footer */}
              <div className="p-4 sm:p-6 border-t border-gray-700">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                  Connect with me
                </h3>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 p-2 rounded-lg hover:bg-blue-400/10"
                  >
                    <SiGithub className="w-6 h-6" />
                  </a>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 p-2 rounded-lg hover:bg-blue-400/10"
                  >
                    <SiGmail className="w-6 h-6" />
                  </a>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 p-2 rounded-lg hover:bg-blue-400/10"
                  >
                    <FaLinkedinIn className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;