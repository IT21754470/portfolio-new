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
    <div className="fixed w-full top-0 z-50 bg-[#0a192f] bg-opacity-95 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-20">
        {/* Profile image and name left */}
        <div className="flex items-center gap-3 flex-shrink-0 mr-8">
          <img
            src={mylogo}
            alt="profile"
            className="w-12 h-12 rounded-full object-cover border-2 border-blue-700 shadow"
          />
          <span className="text-lg font-bold text-white">Sathmini Subasinghe</span>
        </div>
        {/* Nav links center/right */}
        <nav className="flex-1 flex justify-center">
          <ul className="flex items-center gap-8">
            {navLinksdata.map(({ _id, title, link }) => (
              <li key={_id}>
                <Link
                  activeClass="text-blue-400 border-b-2 border-blue-400"
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-white font-semibold text-base px-2 py-1 transition-colors duration-300 cursor-pointer hover:text-blue-400 border-b-2 border-transparent hover:border-blue-400"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {/* Resume button right */}
        <div className="flex items-center ml-8">
        <a
  href="https://drive.google.com/file/d/14i7Z72PrYDzwGT_d0-OswL--x63kPMQJ/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 px-4 py-2 border border-blue-400 text-blue-400 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-colors duration-200"
>
  <FiDownload className="text-lg" /> Resume
</a>

        </div>
      </div>

      {/* Mobile menu */}
      {showMenu && (
        <div className="md:hidden">
          <div className="fixed inset-0 bg-white/95 backdrop-blur-md z-50">
            <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-white shadow-xl">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b border-gray-200">
                  <img
                    src={mylogo}
                    alt="logo"
                    className="w-12 h-12 rounded-lg shadow-lg shadow-blue-500/20"
                  />
                  <button
                    onClick={() => setShowMenu(false)}
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
                  >
                    <MdClose className="w-6 h-6" />
                  </button>
                </div>
                
                <div className="flex-1 px-4 py-6 overflow-y-auto">
                  <ul className="space-y-6">
                    {navLinksdata.map((item) => (
                      <li key={item._id}>
                        <Link
                          onClick={() => setShowMenu(false)}
                          activeClass="text-blue-600"
                          to={item.link}
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                          className="text-gray-800 hover:text-blue-600 transition-colors duration-300 cursor-pointer text-lg font-semibold block px-2 py-1 rounded"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 border-t border-gray-200">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                    Connect with me
                  </h3>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors duration-300">
                      <SiGithub className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors duration-300">
                      <SiGmail className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors duration-300">
                      <FaLinkedinIn className="w-6 h-6" />
                    </a>
                  </div>
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
