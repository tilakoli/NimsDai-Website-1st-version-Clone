import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import Image from "next/image";
const FifthPage = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
  });
  const [ref2, inView2] = useInView({
    threshold: 0.1,
  });
  const [ref3, inView3] = useInView({
    threshold: 0.1,
  });
  // STEP:2
  const animation = useAnimation();
  const animation2 = useAnimation();
  const animation3 = useAnimation();

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
        y: 100,
      });
    }
  }, [inView]);

  // for second element
  useEffect(() => {
    if (inView2) {
      animation2.start({
        opacity: 1,
        y: 0,
        transition: { type: "just", ease: "easeInOut", duration: 0.3 },
      });
    }
    if (!inView2) {
      animation2.start({
        opacity: 0,
        y: 100,
      });
    }
  }, [inView2]);

  //for third element
  useEffect(() => {
    if (inView3) {
      animation3.start({
        opacity: 1,
        y: 0,
        transition: { type: "just", ease: "easeInOut", duration: 0.3 },
      });
    }
    if (!inView3) {
      animation3.start({
        opacity: 0,
        y: 100,
      });
    }
  }, [inView3]);

  return (
    <>
      <div className="w-screen h-auto pb-8 bg-secWhite-default ">
        <div className="flex flex-col w-11/12 h-auto pt-24 pb-0 mx-auto bg-white sm:pb-28">
          {/* first--col ---------------------------------------- */}
          <div className="w-11/12 h-screen mx-auto font-sans sm:w-customspace sm:flex">
            <div className="w-full bg-no-repeat bg-cover bg-first h-customheightsec sm:w-2/4 sm:h-full">
              {/* <Image src="/assets/first.jpg" height="1000%" width="800%" layout="responsive" /> */}
            </div>
            <div className="flex flex-col w-full h-auto gap-2 sm:justify-center sm:p-6 sm:gap-10 text-secBlack-default sm:w-2/4 sm:h-full">
              <motion.h3
                ref={ref}
                animate={animation}
                className="pt-3 pb-2 text-2xl font-semibold border-b-2 w-max sm:leading-8 sm:pt-16 sm:text-4xl lg:text-5xl text-secBlack-default border-primary-default"
              >
                1:1 guiding, our <br /> chosen approach
              </motion.h3>
              <motion.p
                ref={ref}
                animate={animation}
                className="text-sm font-normal sm:text-md text-secBlack-default"
              >
                All Nimsdai guided expeditions are offered purely on an
                exclusive ‘one to one’ basis. Nims has chosen this very personal
                approach to ensure the highest feasible levels of safety,
                support and leadership on the mountain
              </motion.p>
              <motion.div ref={ref} animate={animation}>
                <a
                  className="flex items-center gap-4 text-sm font-medium cursor-pointer sm:text-xl"
                  href="#_"
                >
                  <img
                    className="w-auto h-10 cursor-pointer"
                    src="/assets/Icons/arrowright.png"
                  />
                  <p>LEARN MORE</p>
                </a>
              </motion.div>
            </div>
          </div>
          {/* second col----------------------------------------------- */}
          <div className="w-11/12 h-screen mx-auto font-sans sm:flex sm:flex-row-reverse sm:w-customspace">
            <div className="w-full bg-no-repeat bg-cover bg-second h-customheightsec sm:w-2/4 sm:h-full"></div>
            <div className="flex flex-col w-full h-auto gap-2 sm:justify-center sm:p-6 sm:gap-10 text-secBlack-default sm:w-2/4 sm:h-full">
              <motion.h3
                ref={ref2}
                animate={animation2}
                className="pt-3 pb-2 text-2xl font-bold border-b-2 w-max sm:leading-8 sm:pt-0 sm:text-4xl md:text-5xl text-secBlack-default border-primary-default"
              >
                Summit Everest
              </motion.h3>
              <motion.p
                ref={ref2}
                animate={animation2}
                className="font-normal sm:text-md text-secBlack-default"
              >
                Both legendary and epic. Mount Everest, undoubtedly to many,
                standing on her summit still holds one of the greatest lures in
                climbing. Set your sights high and we'll take you to the very
                top.
              </motion.p>
              <motion.div ref={ref2} animate={animation2}>
                <a
                  className="flex items-center gap-4 text-sm font-medium cursor-pointer sm:text-xl"
                  href="#_"
                >
                  <img
                    className="w-auto h-10 cursor-pointer"
                    src="/assets/Icons/arrowright.png"
                  />
                  <p>LEARN MORE</p>
                </a>
              </motion.div>
            </div>
          </div>
          {/* third-col ----------------------------------------------- */}
          <div className="w-11/12 h-screen mx-auto font-sans sm:flex sm:w-customspace">
            <div className="w-full bg-no-repeat bg-cover bg-third h-customheightsec sm:w-2/4 sm:h-full"></div>
            <div className="flex flex-col w-full h-auto gap-2 sm:justify-center sm:p-6 sm:gap-10 text-secBlack-default sm:w-2/4 sm:h-full">
              <motion.h3
                ref={ref3}
                animate={animation3}
                className="pt-3 pb-2 text-2xl font-semibold border-b-2 sm:leading-8 sm:pt-0 sm:text-3xl md:text-4xl 2xl:text-5xl border-primary-default w-max "
              >
                High altitude film &
                <br />
                product support
              </motion.h3>
              <motion.p
                ref={ref3}
                animate={animation3}
                className="font-normal sm:text-md text-secBlack-default"
              >
                We can assist photographers, film units and production teams to
                reach high-altitude environments with planning, logistics and
                elite mountaineering leadership.
              </motion.p>
              <motion.div ref={ref3} animate={animation3}>
                <a
                  className="flex items-center gap-4 text-sm font-medium cursor-pointer sm:text-xl"
                  href="#_"
                >
                  <img
                    className="w-auto h-10 cursor-pointer"
                    src="/assets/Icons/arrowright.png"
                  />
                  <p>LEARN MORE</p>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FifthPage;
