import React from "react";
import { FaLinkedinIn, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress, SiGithub, SiGmail } from "react-icons/si";
const Media = () => {
  return (
    <div className='flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between'>
      <div>
      <h1 className='text-lg font-bold uppercase font-titleFont mb-4'>Find me on</h1>
        <div className='flex gap-4 '>
          <span className='bannerIcon'>
            <a
              href='https://github.com/IT21754470'
              target='_blank'
              rel='noopener noreferrer'
            >
              <SiGithub />
            </a>
          </span>
          <span className='bannerIcon'>
            <a href='mailto:sathminisubasinghe05@gmail.com'>
              <SiGmail />
            </a>
          </span>
          <span className='bannerIcon'>
            <a
              href='https://www.linkedin.com/in/sathmini-subasinghe-8649022a1'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaLinkedinIn />
            </a>
          </span>
        </div>
      </div>
      
    </div>
  );
};

export default Media;
