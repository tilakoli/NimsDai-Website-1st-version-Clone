import React from "react";
import { motion } from "framer-motion";
import file from "../public/assets/testvdo.mp4";
import Navbar from "./Navbar";
import Overlay from "./Overlay";
const LandingPage = () => {
  return (
    <>
      <div className="relative flex flex-col">
        <Navbar />
        <Overlay />
        <video className="object-cover w-screen h-screen " muted loop autoPlay>
          <source src={file} type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default LandingPage;
