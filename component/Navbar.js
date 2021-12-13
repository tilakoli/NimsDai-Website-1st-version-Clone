import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-scroll";
// import Logo from "../public/streamlineLogo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="absolute z-50 w-full py-8 bg-transparent">
        <div className="w-full">
          <div className="flex items-center w-full h-20">
            <div className="flex items-center w-full justify-evenly">
              <div className="flex items-center justify-center flex-shrink-0 ">
                <h1 className="text-4xl font-bold text-white cursor-pointer">
                  Logo
                </h1>
              </div>
              <div className="hidden md:block">
                <div className="flex items-baseline justify-around gap-10">
                  <Link
                    activeClass="About"
                    // to="/About"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="px-3 py-2 text-xl text-white rounded-md cursor-pointer hover:text-primary-default"
                  >
                    About
                  </Link>
                  <Link
                    activeClass="Guiding"
                    // to="/Guiding"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="px-3 py-2 text-xl text-white rounded-md cursor-pointer hover:text-primary-default"
                  >
                    Guiding
                  </Link>
                  <Link
                    activeClass="Projects"
                    // to="Projects"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="px-3 py-2 text-xl text-white rounded-md cursor-pointer hover:text-primary-default"
                  >
                    Projects
                  </Link>

                  <Link
                    activeClass="Speaking"
                    // to="work"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="px-3 py-2 text-xl text-white rounded-md cursor-pointer hover:text-primary-default"
                  >
                    Speaking
                  </Link>

                  <Link
                    activeClass="Film"
                    // to="Film"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="px-3 py-2 text-xl text-white rounded-md cursor-pointer hover:text-primary-default"
                  >
                    Film
                  </Link>
                  <Link
                    activeClass="Book"
                    // to="Book"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="px-3 py-2 text-xl text-white rounded-md cursor-pointer hover:text-primary-default"
                  >
                    Book
                  </Link>
                  <Link
                    activeClass="Shop"
                    // to="Shop"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="px-3 py-2 text-xl text-white rounded-md cursor-pointer hover:text-primary-default"
                  >
                    Shop
                  </Link>
                  <Link
                    activeClass="Enquire"
                    // to="Enquire"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="px-3 py-2 text-xl text-white rounded-md cursor-pointer hover:text-primary-default"
                  >
                    Enquire
                  </Link>
                </div>
              </div>
            </div>
            {/* ---------------------------------------------------------MOBILE MENU------------------------------------------------------ */}
            <div className="flex mr-10 md:hidden ">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-primary-default hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 "
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div
                ref={ref}
                className="px-2 pt-2 pb-3 space-y-1 bg-white sm:px-3"
              >
                <Link
                  href="/home"
                  activeClass="home"
                  // to="home"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="block px-3 py-2 text-base text-black rounded-md cursor-pointer hover:bg-primary-default hover:text-white"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  activeClass="about"
                  // to="about"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="block px-3 py-2 text-base text-black rounded-md cursor-pointer hover:bg-primary-default hover:text-white"
                >
                  About
                </Link>

                <Link
                  href="/work"
                  activeClass="work"
                  // to="work"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="block px-3 py-2 text-base text-black rounded-md cursor-pointer hover:bg-primary-default hover:text-white"
                >
                  Projects
                </Link>
                <Link
                  href="/services"
                  activeClass="services"
                  // to="services"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="block px-3 py-2 text-base text-black rounded-md cursor-pointer hover:bg-primary-default hover:text-white"
                >
                  Services
                </Link>

                <Link
                  href="/contact"
                  activeClass="work"
                  // to="work"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="block px-3 py-2 text-base text-black rounded-md cursor-pointer hover:bg-primary-default hover:text-white"
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Navbar;
