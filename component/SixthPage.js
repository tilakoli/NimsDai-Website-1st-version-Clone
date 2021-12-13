import React from "react";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
const SixthPage = () => {
  // ref = { ref };
  // animate = { animation };
  // transition = { transition };

  // const transition = { duration: 4, ease: "easeInOut" };
  // const animation = useAnimation();
  // const [ref, inView] = useInView({
  //   threshold: 0.1,
  // });

  // useEffect(() => {
  //   if (inView) {
  //     animation.start({
  //       pathLength: 0,
  //     });
  //   }
  //   if (!inView) {
  //     animation.start({
  //       pathLength: 1,
  //     });
  //   }
  // }, [inView]);
  return (
    <>
      <div className="object-contain w-screen h-screen bg-center bg-no-repeat bg-cover bg-red- bg-mountain">
        <div className="flex flex-row items-center justify-center h-2/3">
          <h2 className="flex flex-col items-center text-3xl font-medium capitalize sm:flex-row text-secBlack-default">
            Achieve Your
            <span className="">
              <svg
                height="100%"
                width="100%"
                viewBox="0 0 79.000000 66.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                <g transform="translate(0.000000,66.000000) scale(0.100000,-0.100000)">
                  <motion.path
                    fill="transparent"
                    strokeWidth="15"
                    stroke="#CFB274"
                    strokeLinecap="square"
                    d="M400 570 c0 -37 2 -40 27 -40 21 0 24 3 15 12 -15 15 -16 32 -2 23
21 -13 8 11 -15 28 l-25 18 0 -41z"
                  />
                  <motion.path
                    fill="transparent"
                    strokeWidth="15"
                    stroke="#CFB274"
                    strokeLinecap="square"
                    d="M250 365 c0 -128 2 -146 15 -135 10 9 15 39 17 115 l3 104 133 -115
132 -115 0 146 c0 95 -4 144 -10 140 -6 -4 -10 -53 -10 -116 0 -60 -3 -109 -6
-109 -3 0 -58 46 -122 102 -64 56 -125 109 -134 117 -17 13 -18 6 -18 -134z"
                  />
                  <motion.path
                    fill="transparent"
                    strokeWidth="15"
                    stroke="#CFB274"
                    strokeLinecap="square"
                    d="M371 486 c-25 -27 -13 -44 18 -24 17 10 25 7 62 -27 30 -27 44 -34
47 -25 5 13 -81 100 -97 100 -4 0 -18 -11 -30 -24z"
                  />
                  <motion.path
                    fill="transparent"
                    strokeWidth="15"
                    stroke="#CFB274"
                    strokeLinecap="square"
                    d="M300 377 c0 -7 50 -56 110 -107 61 -52 110 -98 110 -102 0 -11 -62
-55 -93 -67 -25 -10 -36 -7 -79 16 -31 17 -56 39 -62 55 -8 18 -16 24 -25 19
-26 -17 14 -67 80 -100 58 -29 63 -30 96 -16 64 27 113 71 113 102 0 9 -234
213 -244 213 -3 0 -6 -6 -6 -13z"
                  />
                </g>
              </svg>
            </span>
            new Possible
          </h2>
        </div>
      </div>
    </>
  );
};

export default SixthPage;
