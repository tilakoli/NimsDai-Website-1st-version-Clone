import React from "react";
// import CardData from "../utils/CardData";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import Image from "next/image";

const Card = ({ head, title, date, image }) => {
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
      // console.log(inView);
      animation.start({
        opacity: 1,
        x: 0,
        transition: { type: "just", ease: "easeInOut", duration: 0.3 },
      });
    }
    if (!inView) {
      // console.log(inView, "not in view");

      animation.start({
        opacity: 0.3,
        x: 200,
      });
    }
  }, [inView]);
  return (
    <>
      <div class="sm:mb-20">
        <motion.div
          ref={ref}
          animate={animation}
          class="bg-optWhite-default min-h-full border-test-default  border-b-2 "
        >
          <a href="#" className="hover:scale-100">
            <img
              className="object-fill transition-all duration-200 ease-in-out transform bg-center hover:scale-95 "
              src={image}
              alt=""
            />
          </a>
          <div class="p-5">
            <h5 className="text-gray-400">{head}</h5>
            <a href="#">
              <h5 class=" text-secBlack-default  text-xl mb-2 dark:text-white hover:text-primary-default">
                {title}
              </h5>
              <p className="font-sans text-sm text-gray-600 xl:text-md 2xl:text-xl font-extralight">
                {date}
              </p>
            </a>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Card;
