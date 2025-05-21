import React from "react";
import { HiArrowRight } from "react-icons/hi";

const Card = ({ item: { title, des, icon, techs } }) => {
  return (
    <div className="w-full h-full p-4 rounded-lg shadow-lg bg-gradient-to-b from-blue-900/90 to-blue-950/90 border border-blue-800/50 hover:border-blue-700 transition-all duration-300 group">
      <div className="flex flex-col gap-4 h-full justify-between">
        <div className="flex flex-col gap-3">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-800/50 text-2xl text-blue-400">
            {icon}
          </div>
          <h2 className="text-xl font-bold text-white">{title}</h2>
          <p className="text-sm text-gray-300 leading-relaxed">{des}</p>
        </div>

        <div className="flex flex-wrap gap-2 mt-3">
          {techs && techs.map((tech, i) => (
            <span
              key={i}
              className="text-xs bg-blue-700 text-white px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-4 flex justify-end">
          <span className="text-blue-400 text-xl group-hover:translate-x-2 transition-transform duration-300">
            <HiArrowRight />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
