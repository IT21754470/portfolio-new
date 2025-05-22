import React from "react";
import { mylogo } from "../../assets/index";
import { motion } from "framer-motion";

const RightBanner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex items-center justify-center w-full h-full"
    >
      <div className="relative flex items-center justify-center">
        {/* Glowing Background */}
        <div className="absolute w-50 h-50 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-blue-900 blur-3xl opacity-40"></div>

        {/* Profile Image (unchanged size) */}
        <img
          src={mylogo}
          alt="Profile"
          style={{ width: "900px", height: "800px" }}
          className="relative object-cover rounded-3xl shadow-2xl border-4 border-gray-800 ml-48"
        />
      </div>
    </motion.div>
  );
};

export default RightBanner;
