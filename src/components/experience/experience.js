import React from 'react';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="w-full py-20 px-4 md:px-10 bg-gradient-to-b from-[#141e30] to-[#243b55] text-white mt-1 ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center">
          Professional <span className="text-[#7f5af0]">Experience</span>
        </h2>
        <p className="text-center text-gray-300 mt-2">
          Building impactful solutions through continuous learning and growth
        </p>

        {/* QA Intern Experience */}
        <div className="mt-16 border-l-4 border-[#7f5af0] pl-6 relative">
          <div className="absolute -left-[22px] top-0 bg-[#7f5af0] text-white p-2 rounded-full">
            <Briefcase size={20} />
          </div>

          <div className="bg-[#1e293b]/70 backdrop-blur-lg p-6 rounded-2xl border border-[#7f5af0]/40 shadow-lg mb-12">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-semibold">Quality Assurance Intern</h3>
                <p className="text-sm text-gray-400">Lead Innovationz Pvt. Ltd. | Nov 2024 - Present</p>
              </div>
              <span className="text-sm bg-blue-900 text-white px-3 py-1 rounded-full">Full-time</span>
            </div>

            <p className="mt-4 text-gray-300">
              Developing manual and automation test scripts using TypeScript and Java. Performing API and performance testing using Selenium, Playwright, JMeter, and Docker. Collaborating closely with developers to enhance software quality using Git and Bitbucket.
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              {["TypeScript", "Java", "Selenium", "Playwright", "JMeter", "Docker", "Git"].map((tech, i) => (
                <span
                  key={i}
                  className="bg-[#7f5af0]/20 text-[#7f5af0] px-3 py-1 text-xs font-medium rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Project Management Intern Experience */}
        <div className="mt-16 border-l-4 border-[#7f5af0] pl-6 relative">
          <div className="absolute -left-[22px] top-0 bg-[#7f5af0] text-white p-2 rounded-full">
            <Briefcase size={20} />
          </div>

          <div className="bg-[#1e293b]/70 backdrop-blur-lg p-6 rounded-2xl border border-[#7f5af0]/40 shadow-lg">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-semibold">Project Management Intern</h3>
                <p className="text-sm text-gray-400">Cypso Labs | Nov 2024 - Feb 2025</p>
              </div>
              <span className="text-sm bg-green-900 text-white px-3 py-1 rounded-full">Internship</span>
            </div>

            <p className="mt-4 text-gray-300">
              Assisted in project planning, tracking, and coordination. Contributed to workflow optimization and stakeholder communications. Applied Agile methodologies and prepared detailed project documentation.
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              {["Agile", "Project Planning", "Coordination", "Documentation", "Workflow Optimization"].map((skill, i) => (
                <span
                  key={i}
                  className="bg-[#7f5af0]/20 text-[#7f5af0] px-3 py-1 text-xs font-medium rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
