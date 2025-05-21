import React from "react";

const ResumeCard = ({ title, subTitle, result, des }) => {
  return (
    <div className='w-full h-1/3 group flex'>
      {/* Left Dot Connector */}
      <div className='w-10 h-[6px] mt-16 relative'>
        <span className='absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-gradient-to-r from-[#141e30] to-[#243b55] bg-opacity-60'>
          <span className='w-3 h-3 rounded-full bg-[#141e30] group-hover:bg-blue-400 duration-300'></span>
        </span>
      </div>

      {/* Main Card with Gradient */}
      <div className='w-full bg-gradient-to-r from-[#141e30] to-[#243b55] border border-blue-700 group-hover:border-blue-500 duration-300 rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10 shadow-lg'>
        <div className='flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center'>
          <div>
            <h3 className='text-xl md:text-2xl font-semibold text-blue-200 group-hover:text-white duration-300'>
              {title}
            </h3>
            <p className='text-sm mt-2 text-blue-400 group-hover:text-white duration-300'>
              {subTitle}
            </p>
          </div>
        </div>

        <p
          className='text-sm md:text-base font-medium text-white/80 group-hover:text-white duration-300'
          style={{ whiteSpace: "pre-line" }}
        >
          {des}
        </p>
      </div>
    </div>
  );
};

export default ResumeCard;
