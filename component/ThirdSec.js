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
    threshold: 0.1,
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
        transition: { type: "spring", bounce: 0.5 },
      });
    }
    if (!inView) {
      animation.start({
        opacity: 0,
        y: 400,
      });
    }
  }, [inView]);
  return (
    <>
      <div className="flex flex-col mx-auto sm:mt-60 sm:w-4/5 ">
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
          />
          <Card
            head="Nimsdai"
            title="14 Peaks premiers at prestigious DOC NYC Film Festival"
            date="November 16,2021"
          />
          <Card head="Nimsdai" title=" Phase 01" date="May 28,2019" />
        </div>
      </div>
    </>
  );
};

export default ThirdSec;
