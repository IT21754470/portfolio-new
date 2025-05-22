import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className='w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20'
    >
      <div className='w-full lgl:w-1/2'>
        <div className='py-12 font-titleFont flex flex-col gap-4'>
          <p className='text-sm text-white tracking-[4px] uppercase'>
            Tech Stack
          </p>
          <h2 className='text-3xl md:text-4xl font-bold text-white'>Development Skills</h2>
        </div>
        <div className='className="mt-14 w-full flex flex-col gap-6'>





        <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium text-white'>Java Script</p>
            <span className='w-full h-2 bgOpacity rounded-md inline-flex mt-2'>
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='w-[75%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'
              >
                <span className='absolute -top-7 right-0 text-white'>75%</span>
              </motion.span>
            </span>
          </div>





          <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium text-white'>React</p>
            <span className='w-full h-2 bgOpacity rounded-md inline-flex mt-2'>
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='w-[82%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'
              >
                <span className='absolute -top-7 right-0 text-white'>82%</span>
              </motion.span>
            </span>
          </div>




          <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium text-white'>Node</p>
            <span className='w-full h-2 bgOpacity rounded-md inline-flex mt-2'>
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='w-[75%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'
              >
                <span className='absolute -top-7 right-0 text-white'>75%</span>
              </motion.span>
            </span>
          </div>




          <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium text-white'>
              Mongodb & (SQL | NOSQL)
            </p>
            <span className='w-full h-2 bgOpacity rounded-md inline-flex mt-2 text-white'>
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'
              >
                <span className='absolute -top-7 right-0 text-white'>80%</span>
              </motion.span>
            </span>
          </div>



          <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium text-white'>Html,Css</p>
            <span className='w-full h-2 bgOpacity rounded-md inline-flex mt-2'>
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='w-[82%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'
              >
                <span className='absolute -top-7 right-0 text-white'>82%</span>
              </motion.span>
            </span>
          </div>




        </div>
      </div>

      <div className='w-full lgl:w-1/2'>
        <div className='py-12 font-titleFont flex flex-col gap-4'>
          <p className='text-sm text-[#00FFFF] tracking-[4px] uppercase'>
            <br></br>
          </p>
          <h2 className='text-3xl md:text-4xl font-bold'>
            <br></br>{" "}
          </h2>
        </div>
        <div className='flex flex-col gap-6'>






        <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium text-white'>JAVA</p>
            <span className='w-full h-2 bgOpacity rounded-md inline-flex mt-2'>
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='w-[78%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'
              >
                <span className='absolute -top-7 right-0 text-white'>78%</span>
              </motion.span>
            </span>
          </div>
          <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium text-white'>SpringBoot</p>
            <span className='w-full h-2 bgOpacity rounded-md inline-flex mt-2'>
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'
              >
                <span className='absolute -top-7 right-0 text-white'>70%</span>
              </motion.span>
            </span>
          </div>
         
          
          <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium text-white'>Playwright</p>
            <span className='w-full h-2 bgOpacity rounded-md inline-flex mt-2'>
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='w-[85%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-green-700 rounded-md relative'
              >
                <span className='absolute -top-7 right-0 text-white'>85%</span>
              </motion.span>
            </span>
          </div>


  <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium text-white'>Selenium</p>
            <span className='w-full h-2 bgOpacity rounded-md inline-flex mt-2'>
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='w-[85%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'
              >
                <span className='absolute -top-7 right-0 text-white'>85%</span>
              </motion.span>
            </span>
          </div>



       
         
          <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium text-white'>Git & Github</p>
            <span className='w-full h-2 bgOpacity rounded-md inline-flex mt-2'>
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'
              >
                <span className='absolute -top-7 right-0 text-white'>80%</span>
              </motion.span>
            </span>
          </div>

       


        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
