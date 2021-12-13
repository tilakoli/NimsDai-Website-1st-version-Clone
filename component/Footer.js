import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <>
      <div className="w-screen h-screen bg-footerBlack-default lg:h-footer ">
        {/* -----------FIRST COLUMN ------------------ */}
        <div className="flex flex-col sm:flex-row col1 h-1/2 sm:h-3/4">
          <div className="items-center justify-center hidden w-full h-full sm:flex sm:w-1/3">
            <h1>LOGO HERE</h1>
          </div>
          {/* ------------------------- SECOND COLUMN ------------------------- */}
          <div className="flex w-full h-full sm:w-2/3 ">
            {/* ---------------------columns INSIDE SECOND COLUMN ------------------- */}
            <div className="w-1/2 h-full bg-gray-400 sm:w-1/3 col1 "></div>
            <div className="w-1/2 h-full bg-gray-500 sm:w-1/3 col2 "></div>
            <div className="hidden w-1/3 h-full bg-gray-600 col3 sm:block"></div>
          </div>
        </div>
        {/* <hr className="w-11/12 h-1 mx-auto " /> */}
        {/* --------------------_SECOND COLUMN ----------------------- */}
        <div className="flex flex-col w-11/12 mx-auto border-t-2 border-gray-300 sm:flex-row h-1/2 sm:h-auto ">
          <div className="flex items-start justify-between w-full pt-8 sm:h-full h-1/3 sm:w-3/12 icons">
            <a href="#_">
              <Image
                src="/assets/Icons/instagram.png"
                width={30}
                height={30}
                className="cursor-pointer"
              />
            </a>
            <a href="#_">
              <Image
                src="/assets/Icons/facebook.png"
                width={30}
                height={30}
                className="cursor-pointer"
              />
            </a>
            <a href="#_">
              <Image
                src="/assets/Icons/youtube.png"
                width={30}
                height={30}
                className="cursor-pointer"
              />
            </a>
            <a href="#_">
              <Image
                src="/assets/Icons/twitter.png"
                width={30}
                height={30}
                className="cursor-pointer"
              />
            </a>
          </div>
          <div className="flex flex-col items-center justify-between w-full h-full text-sm text-center text-gray-500 sm:pl-20 sm:pt-8 sm:gap-0 sm:items-start sm:flex-row sm:w-3/4">
            <a>Terms & Conditions</a>
            <a>Privacy Policy</a>
            <a className="mb-4 sm:mb-0">Cookie Policy</a>
            <a>@ Nimsdai 2021</a>
            <a>Made in NextJs</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
