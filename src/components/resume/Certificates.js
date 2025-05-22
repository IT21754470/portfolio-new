import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Certificates = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-6 px-4 font-titleFont"
    >
      <div className="pb-4">
        <p className="text-sm text-[#00FFFF] tracking-[4px]">2021 - Present</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white">Accomplishments</h2>
      </div>

      {/* Grid with 2 columns for equal height */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        {/* Left Side */}
        <div className="border-l-4 border-black border-opacity-30 pl-4 flex flex-col gap-8">
          <ResumeCard
            title='"Trainee- Full Stack Developer" programme - Python for Beginners'
            subTitle='Department of IT, NIBM'
            des='Includes Web Designing, Frontend JavaScript, jQuery, Bootstrap, Server-side Web Programming, and Professional Skill Development.'
          />
          <ResumeCard
            title='NIBM - Certificate in Software Engineering'
            subTitle='Department of IT, University of Moratuwa'
            des='Covered Software Engineering concepts, Agile methodologies, Java, and Python.'
          />
          <ResumeCard
            title='"Trainee- Full Stack Developer" - Web Design for Beginners'
            subTitle='Department of IT, University of Moratuwa'
            des='Includes Web Designing, JavaScript, jQuery, Bootstrap, Server-side Programming, and Professional Skills.'
          />
          <ResumeCard
            title='Foundations of Software Testing and Validation'
            subTitle='University of Leeds - Coursera'
            des='Covers Software Quality Assurance and validation techniques.'
          />
        </div>

        {/* Right Side */}
        <div className="border-l-4 border-black border-opacity-30 pl-4 flex flex-col gap-8">
          <ResumeCard
            title='Introduction to Programming with Scratch'
            subTitle='Harvard University'
            des='Completed nine projects in Scratch. Awarded by Harvard University, Cambridge, MA, 2021.'
          />
          <ResumeCard
            title='Python Foundations'
            subTitle='Great Learning Academy'
            des='A beginner-level guide to Android app development with a mix of theory and practice.'
          />
          <ResumeCard
            title='Front End Development - HTML'
            subTitle='Great Learning Academy'
            des='Covers basics of Artificial Intelligence, Neural Networks, and Computer Vision with use cases.'
          />
          <ResumeCard
            title='Programming Foundations: Software Testing / QA'
            subTitle='LinkedIn Learning'
            des='Seven-course program covering Software Testing and QA fundamentals.'
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Certificates;
