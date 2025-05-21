import React, { useState } from "react";
import { motion } from "framer-motion";
import Title from "../layouts/Title";
import Education from "./Education";
import Skills from "./Skills";
import Achievement from "./Achievement";
import Certificates from "./Certificates";

const DRIVE_LINK = "https://drive.google.com/file/d/14i7Z72PrYDzwGT_d0-OswL--x63kPMQJ/view?usp=sharing";

const Resume = () => {
  const [educationData, setEducationData] = useState(true);
  const [skillData, setSkillData] = useState(false);
  const [experienceData, setExperienceData] = useState(false);
  const [achievementData, setAchievementData] = useState(false);
  const [certificatetData, setCertificateData] = useState(false);

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
  };

  return (
    <section id='resume' className='w-full py-17 border-b-[1px] mt-10 border-b-black'>
      <div className='flex justify-center items-center text-center'>
        <Title des='My Resume' />
      </div>

      {/* Download CV Button */}
      <div className='flex justify-center items-center text-center mt-4'>
        <motion.button
          variants={buttonVariants}
          whileHover='hover'
          className='bg-gradient-to-r from-blue-700 to-cyan-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition'
          onClick={() => {
            window.location.href = DRIVE_LINK;
          }}
        >
          Click Here To Download CV
        </motion.button>
      </div>

      {/* Section Tabs */}
      <div>
        <ul className='justify-center items-center mt-8 py-10 w-full grid grid-cols-1 md:grid-cols-1 xl:grid-cols-3 gap-6'>
          <li
            onClick={() => {
              setEducationData(true);
              setSkillData(false);
              setExperienceData(false);
              setCertificateData(false);
            }}
            className={`cursor-pointer py-3 px-5 text-white font-medium border-2 ${
              educationData ? "border-purple-600 bg-blue-800" : "border-gray-700 bg-gray-800"
            } rounded-lg text-center hover:bg-blue-500 transition`}
          >
            Education
          </li>

          <li
            onClick={() => {
              setEducationData(false);
              setSkillData(false);
              setExperienceData(false);
              setCertificateData(true);
            }}
            className={`cursor-pointer py-3 px-5 text-white font-medium border-2 ${
              certificatetData ? "border-purple-600 bg-blue-800" : "border-gray-700 bg-gray-800"
            } rounded-lg text-center hover:bg-blue-500 transition`}
          >
            Certificates
          </li>

          <li
            onClick={() => {
              setEducationData(false);
              setSkillData(true);
              setExperienceData(false);
              setCertificateData(false);
            }}
            className={`cursor-pointer py-3 px-5 text-white font-medium border-2 ${
              skillData ? "border-purple-600 bg-blue-800" : "border-gray-700 bg-gray-800"
            } rounded-lg text-center hover:bg-blue-500 transition`}
          >
            Professional Skills
          </li>
        </ul>
      </div>

      {/* Section Content */}
      {educationData && <Education />}
      {skillData && <Skills />}
      {certificatetData && <Certificates />}
    </section>
  );
};

export default Resume;
