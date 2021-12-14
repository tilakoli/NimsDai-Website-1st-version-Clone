import React from "react";

const NewsLetter = () => {
  return (
    <>
      <div className="flex flex-col w-screen h-screen gap-10 px-10 xl:h-footer sm:px-48 xl:px-72">
        <h1 className="mb-12 text-3xl font-bold xl:text-5xl text-secBlack-default ">
          Our newsletter
        </h1>
        <p className="font-sans text-secBlack-default xl:text-xl">
          Sign up to the Nimsdai newsletter for our latest news & announcements.
        </p>
        <div className="flex flex-col gap-10 font-sans border-none sm:flex-row">
          <input
            type="text"
            className="px-2 font-sans border-b-2 border-gray-300 outline-none bg-optWhite-default focus:border-secBlack-default"
            placeholder="Full name"
          />
          <input
            type="email"
            className="px-2 mt-12 font-sans text-black border-b-2 border-gray-300 outline-none sm:mt-0 bg-optWhite-default focus:border-secBlack-default"
            placeholder="Email address"
          />
        </div>
        <div className="flex flex-col gap-10 mt-14 sm:flex-row">
          <div className="">
            <p className="font-light text-gray-400 sm:w-2/3">
              Your privacy is important to us. We always keep your data secure.
              You can
              <span className="px-1 font-medium cursor-pointer hover:underline text-secBlack-default">
                unsubscribe
              </span>
              from our newsletter at any time. You can view our
              <span className="px-1 font-medium cursor-pointer hover:underline text-secBlack-default">
                privacy policy here.
              </span>
            </p>
          </div>
          <div className="flex justify-end mb-20 cursor-pointer 2xl:pr-96 sm:mb-0">
            <a
              href="#_"
              className="flex items-center justify-center w-40 font-medium text-center text-white uppercase h-14 bg-primary-default"
            >
              subscribe
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
