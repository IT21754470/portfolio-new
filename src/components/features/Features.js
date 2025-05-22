import React from "react";
import Title from "../layouts/Title";
import Card from "./Card";
import { featuresData } from "../../data/data";
import featureImage from "../../assets/images/projects/myphoto.jpeg"; // Replace with your image

const Features = () => {
  return (
    <section id="features" className="w-full border-b-[1px] border-b-gray-800 pb-56">
    <div className="container mx-auto px-4 -mt-40">

        {/* Optional: You can adjust the Title spacing here too */}
        <Title title="" des="What I Do" />

        <div className="flex flex-col md:flex-row gap-10 items-start mt-8">
          {/* Left Image */}
          <div className="w-full md:w-1/2 h-[800px] md:h-[1020px]">
            <img
              src={featureImage}
              alt="Feature"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Right Cards */}
          <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuresData.map((item) => (
              <Card item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
