import React from "react";
import { motion } from "framer-motion";
const Overlay = () => {
  return (
    <div className="absolute z-30 w-screen h-screen pl-12 pt-72 md:pt-56 2xl:pl-60 2xl:pt-80">
      <motion.h1
        initial="start"
        animate="animation"
        variants={{
          start: {
            opacity: 0.3,
            y: 100,
            duration: 2,
            delay: 5,
          },
          animation: {
            opacity: 1,
            y: 0,
            delay: 5,
            duration: 1.5,
          },
        }}
        className="font-sans text-4xl font-bold text-left text-white md:text-7xl sm:pl-36"
      >
        <span className=" text-primary-default">14 Peaks: </span>
        <br /> Big mountains <br /> to big screen.
      </motion.h1>
      <motion.div
        initial="start"
        animate="animation"
        variants={{
          start: {
            opacity: 0.3,
            y: -1000,
          },
          animation: {
            opacity: 1,
            y: 0,
            delay: 5,
            duration: 15,
          },
        }}
        className="flex items-center gap-4 pt-5 text-white sm:pl-36 md:text-xl "
      >
        <a href="#_">
          <img
            src="/assets/arrowright.png"
            alt="Watch Trailer"
            className="w-auto h-10 cursor-pointer bg-back "
          />
        </a>
        <p className="capitalize">Watch Trailer</p>
      </motion.div>
    </div>
  );
};

export default Overlay;
