import React from "react";
import { mylogo } from "../../assets/index";
import { motion } from "framer-motion";

const RightBanner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex items-center justify-center w-full h-full 
                 order-3 md:order-none" // Move to bottom on mobile, normal order on md+
    >
      <div className="relative flex items-center justify-center mr-24">
        {/* Glowing Background - responsive sizing */}
        <div className="absolute 
                        w-35 h-35 
                        sm:w-45 sm:h-45
                        md:w-48 md:h-48 
                        lg:w-50 lg:h-50 
                        rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-blue-900 blur-3xl opacity-40 "></div>
        
        {/* Profile Image - responsive sizing and positioning */}
        <img
          src={mylogo}
          alt="Profile"
          className="relative object-cover rounded-3xl shadow-2xl border-4 border-gray-800 
                     w-64 h-56 
                     sm:w-80 sm:h-72 
                     md:w-96 md:h-80 
                     lg:w-[600px] lg:h-[550px] 
                     xl:w-[700px] xl:h-[650px] 
                     2xl:w-[900px] 2xl:h-[800px]
                     ml-0 sm:ml-4 md:ml-8 lg:ml-24 xl:ml-32 2xl:ml-48"
        />
      </div>
    </motion.div>
  );
};

export default RightBanner;