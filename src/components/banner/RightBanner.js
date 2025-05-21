import React from "react";
import { mylogo } from "../../assets/index";
import { motion } from "framer-motion";

const RightBanner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center justify-center relative"
    >
      {/* Glowing/gradient effect behind the image */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] md:w-[480px] md:h-[480px] rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-blue-900 blur-3xl opacity-40 z-0"></div>
      {/* Large, rounded-corner profile image */}
      <img
        className="relative w-[540px] h-[940px] md:w-[620px] md:h-[820px] object-cover rounded-3xl shadow-2xl border-4 border-gray-800 z-10 mb-10 ml-72"
        src={mylogo}
        alt="Profile"
      />
    </motion.div>
  );
};

export default RightBanner;
