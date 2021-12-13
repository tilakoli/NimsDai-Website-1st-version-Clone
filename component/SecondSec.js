import React from "react";
const SecondSec = () => {
  return (
    <>
      <div className="w-screen sm:mt-20 h-customspace ">
        <div className="flex flex-col items-center w-full mt-8 sm:mt-0 sm:flex-row gap-7 sm:gap-0 sm:h-4/6 2xl:px-60">
          <div className="flex items-center h-full sm:w-1/3 sm:pl-44 ">
            <img
              src="/assets/logo.svg"
              className="w-auto h-64"
              layout="responsive"
            />
          </div>
          <div className="flex items-center h-full px-8 sm:w-2/3 sm:px-0">
            <p className="text-xl leading-7 text-gray-700 sm:leading-9 sm:text-3xl sm:w-4/5">
              Go above and beyond what you thought was possible with one of the
              most ground-breaking mountaineers of our generation, providing
              exclusive 1:1 guiding and commercial opportunities for
              breath-taking high-altitude special projects.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondSec;
