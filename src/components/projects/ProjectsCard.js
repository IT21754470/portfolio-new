import React, { useState } from "react";
import { FaGithub, FaGlobe } from "react-icons/fa";

const ProjectsCard = ({ title, des, src, githubLink, websiteLink, techStack }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="w-full rounded-2xl bg-black border border-blue-900 hover:border-blue-500 shadow-lg overflow-hidden transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl flex flex-col h-full">
        <img
          src={src}
          alt={`${title} screenshot`}
          className="w-full h-48 sm:h-52 md:h-48 object-cover rounded-t-2xl"
        />
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-blue-400 text-lg sm:text-xl font-bold mb-2">{title}</h3>
          <p className="text-white/80 text-sm mb-4 line-clamp-3 flex-grow">{des}</p>

          {/* Button container - responsive */}
          <div className="mt-auto grid grid-cols-2 gap-2 sm:gap-3">
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1 sm:gap-2 px-2 sm:px-3 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-xs sm:text-sm font-semibold transition"
              >
                <FaGithub className="text-sm" />
                <span className="hidden xs:inline">GitHub</span>
                <span className="xs:hidden">Code</span>
              </a>
            )}
            <button
              onClick={() => setShowModal(true)}
              className="flex items-center justify-center px-2 sm:px-3 py-2 bg-gray-800 hover:bg-gray-700 rounded-md text-white text-xs sm:text-sm font-semibold transition"
            >
              Details
            </button>
          </div>
        </div>
      </div>

      {/* Modal remains the same */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 px-4"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-[#121212] text-white rounded-lg max-w-2xl w-full relative overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-4 text-white hover:text-red-500 text-2xl font-bold z-10"
            >
              &times;
            </button>

            <div className="p-4 sm:p-6">
              <img
                src={src}
                alt={`${title} preview`}
                className="rounded-lg mb-4 sm:mb-6 max-h-48 sm:max-h-64 object-cover w-full"
              />

              <span className="bg-[#1e1e1e] text-blue-400 px-3 py-1 rounded-full text-sm">
                {title.includes("E-Commerce") ? "E-Commerce" : "Project"}
              </span>

              <h2 className="text-white text-xl sm:text-3xl font-bold my-3 sm:my-4 uppercase">{title}</h2>

              <div className="mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">About this project</h3>
                <p className="text-white/80 text-sm sm:text-base">{des}</p>
              </div>

              <div className="mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {techStack && techStack.length > 0 ? (
                    techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-blue-900 text-white px-2 sm:px-3 py-1 rounded text-xs sm:text-sm"
                      >
                        {tech}
                      </span>
                    ))
                  ) : null}
                </div>
              </div>

              <div className="mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Project Links</h3>
                <div className="grid grid-cols-1 gap-2 sm:gap-3">
                  {githubLink && (
                    <a
                      href={githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-sm sm:text-base font-semibold transition"
                    >
                      <FaGithub className="text-base sm:text-lg" />
                      View Source Code
                    </a>
                  )}

                  {websiteLink && (
                    <a
                      href={websiteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-green-600 hover:bg-green-700 rounded-md text-white text-sm sm:text-base font-semibold transition"
                    >
                      <FaGlobe className="text-base sm:text-lg" />
                      View Live Website
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectsCard;