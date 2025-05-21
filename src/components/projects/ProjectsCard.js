import React, { useState } from "react";
import { FaGithub, FaGlobe } from "react-icons/fa";

const ProjectsCard = ({ title, des, src, githubLink, websiteLink, techStack }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="rounded-2xl bg-black border border-blue-900 hover:border-blue-500 shadow-lg overflow-hidden transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl flex flex-col">
        <img
          src={src}
          alt={`${title} screenshot`}
          className="w-full h-48 object-cover rounded-t-2xl"
        />
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-blue-400 text-xl font-bold mb-2">{title}</h3>
          <p className="text-white/80 text-sm mb-4 line-clamp-4">{des}</p>

          <div className="mt-auto flex gap-4">
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-sm font-semibold transition"
              >
                <FaGithub />
                GitHub
              </a>
            )}
            <button
              onClick={() => setShowModal(true)}
              className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-md text-white text-sm font-semibold transition"
            >
              Details
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 px-4"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-[#121212] text-white rounded-lg max-w-2xl w-full relative overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-4 text-white hover:text-red-500 text-2xl font-bold z-10"
            >
              &times;
            </button>

            <div className="p-6">
              {/* Project Image */}
              <img
                src={src}
                alt={`${title} preview`}
                className="rounded-lg mb-6 max-h-64 object-cover w-full"
              />

              {/* Category Badge */}
              <span className="bg-[#1e1e1e] text-blue-400 px-3 py-1 rounded-full text-sm">
                {title.includes("E-Commerce") ? "E-Commerce" : "Project"}
              </span>

              {/* Project Title */}
              <h2 className="text-white text-3xl font-bold my-4 uppercase">{title}</h2>

              {/* About Section */}
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-3">About this project</h3>
                <p className="text-white/80">{des}</p>
              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                {techStack && techStack.length > 0 ? (
  techStack.map((tech, index) => (
    <span
      key={index}
      className="bg-blue-900 text-white px-3 py-1 rounded text-sm"
    >
      {tech}
    </span>
  ))
) : (
  <>
    {/* Default tech stack */}
  </>
)}
                </div>
              </div>

              {/* Project Links */}
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-3">Project Links</h3>

                {githubLink && (
                  <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-semibold transition mb-3"
                  >
                    <FaGithub className="text-lg" />
                    View Source Code
                  </a>
                )}

                {websiteLink && (
                  <a
                    href={websiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-green-600 hover:bg-green-700 rounded-md text-white font-semibold transition"
                  >
                    <FaGlobe className="text-lg" />
                    View Live Website
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectsCard;
