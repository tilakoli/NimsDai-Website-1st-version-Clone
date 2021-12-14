import React from "react";
import Card from "./Card";
import { motion } from "framer-motion";

// importing this hook to monitor if a element is in viewport
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

const ThirdSec = () => {
  // STEP:1
  //  destructuring the useInView hook
  const [ref, inView] = useInView({
    threshold: 0.2,
  });
  // STEP:2
  const animation = useAnimation();
  //STEP:3
  // useEffect hook to animate the element when it is in viewport
  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
        transition: { type: "just", ease: "easeInOut", duration: 0.3 },
      });
    }
    if (!inView) {
      animation.start({
        opacity: 0,
        y: 200,
      });
    }
  }, [inView]);
  return (
    <>
      <div className="flex flex-col mx-auto sm:mt-32 sm:w-4/5 ">
        <div className="pl-5 text-2xl font-medium text-left sm:pl-0 sm:text-4xl">
          {/* STEP2: */}
          {/* // providing the ref to the motion element to monitor if it is in viewport */}
          <motion.h1
            ref={ref}
            animate={animation}
            className="mt-8 mb-8 font-bold sm:mt-0 sm:mb-12 sm:text-5xl text-secBlack-default"
          >
            14 Peaks <br />
            <span className="pb-2 border-b-4 text-secBlack-default border-primary-default">
              updates
            </span>
          </motion.h1>
        </div>
        <div
          ref={ref}
          animate={animation}
          className="flex flex-col gap-10 mx-auto font-bold sm:flex-row"
        >
          <Card
            head="Nimsdai"
            title="How we made 14 Peaks: Nothing is impossible"
            date="November 29,2021"
            image="/assets/cardImage1.jpg"
          />
          <Card
            head="Nimsdai"
            title="14 Peaks premiers at prestigious DOC NYC Film Festival"
            date="November 16,2021"
            image="/assets/cardImage2.jpg"
          />
          <Card
            head="Nimsdai"
            title=" Phase 01"
            date="May 28,2019"
            image="/assets/cardImage3.jpg"
          />
        </div>
      </div>
    </>
  );
};

export default ThirdSec;
