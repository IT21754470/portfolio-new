import React from "react";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";

const Banner = () => {
  return (
    <section
      id="home"
     
    >
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-10 z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, #2a4365 1px, transparent 1px), linear-gradient(to bottom, #2a4365 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      {/* Decorative blurred shape */}
      <div className="absolute left-[-10%] top-1/3 w-96 h-96 bg-blue-700 rounded-full blur-3xl opacity-30 z-0"></div>
      <div className="absolute right-[-10%] bottom-0 w-96 h-96 bg-purple-700 rounded-full blur-3xl opacity-20 z-0"></div>
      {/* Content: two-column layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-4 py-20">
        <LeftBanner />
        <RightBanner />
      </div>
    </section>
  );
};

export default Banner;
