import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
const FourthSec = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
  });
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
        transition: { type: "spring", bounce: 0.5, duration: 0.5 },
      });
    }
    if (!inView) {
      animation.start({
        opacity: 0.4,
        y: 100,
      });
    }
  }, [inView]);
  return (
    <>
      <div className="flex flex-col w-screen h-screen gap-5 py-5 bg-no-repeat bg-cover sm:py-20 sm:gap-0 bg-hero sm:px-40 ">
        <div className="pl-10 text-left sm:pl-20 2xl:w-3/5 2xl:mx-auto">
          <h4 className="font-medium sm:text-xl"> Nimsdai Purja MBE</h4>
          <p className="font-light"> High altitude expedition leader</p>
        </div>
        <div className="flex gap-3 p-5 text-2xl sm:text-6xl 2xl:w-3/5 2xl:mx-auto">
          <img
            src="/assets/straight-quotes.png"
            className="w-10 h-10 sm:h-14"
          />
          <motion.p
            ref={ref}
            animate={animation}
            className="font-semibold text-secBlack-default sm:leading-tight "
          >
            <motion.span>Everything in life is possible</motion.span>
            <motion.span> armed only with a determined </motion.span>
            <motion.span> approach and positive mindset.</motion.span>
          </motion.p>
        </div>
      </div>
    </>
  );
};

export default FourthSec;
