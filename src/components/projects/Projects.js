import React from "react";
import Title from "../layouts/Title";
import ProjectsCard from "./ProjectsCard";
import {
  ayur,
  ecommerce,
  foodordering,
  garbage,
  movie,
  spring,
  playwright,
  selenium,
  travel

} from "../../assets/index";

const projectsData = [
  {
    title: "Garbage Collection System",
    des: "Overview The Garbage Collection Management System is a comprehensive web application developed using the MERN stack (MongoDB, Express.js, React, Node.js). This system aims to streamline and manage garbage collection operations effectively. It provides functionalities for user management, scheduling pickups, receiving feedback, managing employees, and includes special features like special pickup notifications and a community system.",
    src: garbage,
    githubLink: "https://github.com/IT21754470/Garbage-collection-system.git",
    techStack: ["MongoDB", "Express.js", "React", "Node.js", "firebase"],
  },
  {
    title: "bookmei-playwright-automation",
    des: " This project contains automated end-to-end tests for BookMei, a salon and spa management platform. The tests cover various functionalities including user authentication, calendar management, team management, service operations, and review systems.",
    src: playwright,
    githubLink: "https://github.com/IT21754470/bookmei-playwright-automation-.git",
    techStack: ["typescript,playwright"],
  },
  {
    title: "selenium_automation-framework",
    des: " A modern, responsive website template designed specifically for physiotherapy clinics and individual therapists in Sri Lanka. Built with cutting-edge web technologies to provide a professional online presence with seamless booking capabilities.",
    src: selenium,
    githubLink: "https://github.com/IT21754470/selenium_automation-framework.git",
    techStack: ["typescript,selenium"],
  },
  {
    title: "TRIP Organization Website(Serendip Trails)",
    des: " A modern, responsive website for TRP Organization, a travel and recreation service provider in Sri Lanka. Built with Next.js, TypeScript, and Tailwind CSS",

    src: travel,
    githubLink: "https://github.com/IT21754470/Serendip-Trails.git",
    techStack: ["typescript,selenium"],
  },

  {
    title: "E-Commerce earnings",
    des: " Welcome to my mobile-responsive website built with React JS and Tailwind CSS! This project features a dynamic UI, text animation using React-Typed, a toggleable mobile side drawer menu, and social icons with React-Icons.",
    src: ecommerce,
    githubLink: "https://github.com/IT21754470/Ecommerce-Site.git",
    techStack: ["Next.js 14,TypeScript,Tailwind CSS,React,ESLint"],
  },
  {
    title: "Food-Ordering System",
    des: "Description Artful Aromas Cafe is a full-stack food ordering application that allows users to browse a delightful menu, place orders, and experience a seamless online dining experience. The application is built using MongoDB, Express JS, React JS, and Node JS, providing a robust and efficient solution for managing restaurant orders and enhancing customer satisfaction.",
    src: foodordering,
    githubLink: "https://github.com/IT21754470/Food-Ordering-System.git",
    techStack: ["MongoDB", "Express.js", "React", "Node.js", "firebase"],
  },
  {
    title: "Movie-premier-website",
    des: "Welcome to the New Premiere movie theater website repository! This website is built using Spring Boot for the backend, React for the frontend, and Bootstrap for styling. It allows users to browse movies, view trailers, read reviews, and submit feedback.",
    src: movie,
    githubLink: "https://github.com/IT21754470/movie-premier-website.git",
    techStack: ["MongoDB", "Express.js", "React", "Node.js", "firebase"],
  },
  {
    title: "Social media workout app",
    des: "This web application named “ FitCom ” allows users to share their fitness journey, workouts and tips for a healthy lifestyle. This platform is important for fitness enthusiasts to come together as a community and encourage each other. This platform is created by using Spring Boot technology and implemented with for both technical and non-technical users with simple and friendly UI. Users can register and login to the platform to perform activities such as posting pictures and videos with descriptions",
    src: spring,
    githubLink: "https://github.com/IT21754470/Fitcom-Social-media-app.git",
    techStack: ["SpringBoot", "firebase"],
  },
  {
    title: "Ayurwedic Package Management System",
    des: "A comprehensive web application for an Ayurvedic website, facilitating the management and sale of Ayurvedic packages. Built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. Table of Contents Introduction Features Technologies Getting Started Prerequisites Installation Usage Functionality Contributing License Introduction The Ayurvedic Package Management System is a web application tailored for Ayurvedic practitioners and clinics to manage and sell Ayurvedic packages. This system, built on the MERN stack, provides a user-friendly interface for managing packages, processing orders, and maintaining customer information.",
    src: ayur,
    githubLink: "https://github.com/IT21754470/Ayurvedic-Package-Management-System.git",
    techStack: ["MongoDB", "Express.js", "React", "Node.js", "firebase"],
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-1 border-b-[1px] border-b-black relative px-4 md:px-1 mt-32"
    >
      <div className="flex justify-center items-center text-center mb-8">
        <Title title="" des="My Projects" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
    <ProjectsCard
    key={index}
    title={project.title}
    des={project.des}
    src={project.src}
    githubLink={project.githubLink}
    websiteLink={project.websiteLink}
    techStack={project.techStack}
  />
  
     
        ))}
      </div>
    </section>
  );
};

export default Projects;
