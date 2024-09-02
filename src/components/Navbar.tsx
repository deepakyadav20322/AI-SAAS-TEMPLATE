"use client";
import React, { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";


function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  // Function to handle scroll event
  const handleScroll = () => {
    setScrolled(window.scrollY > 40); // Adjust the scroll position threshold as needed
   
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.nav
    initial={{ y: -100, opacity: 0 }} // Start above the viewport with 0 opacity
    animate={{ y: 0, opacity: 1 }} // Animate to its final position with full opacity
    transition={{ duration: 0.4, ease: "easeOut" }} // Customize the animation duration and easing
      className={`max-w-7xl fixed top-4 mx-auto inset-x-0 z-50 w-[95%] lg:w-full ${scrolled? "bg-black lg:bg-transparent": ""}
      }`}
      style={{ width: "100%" }}
    >
      <div className="hidden lg:block w-full">
        <div
          className={twMerge(
            "w-full flex relative justify-between px-6 py-3 rounded-md transition-all duration-500 m-auto",
            scrolled ? "bg-neutral-900 w-[80%]" : "bg-transparent w-full"
          )}
       
        >
          <div className="flex flex-row gap-2 items-center">
            <a
              className="font-normal flex space-x-2 items-center text-sm mr-4 text-white px-2 py-1 relative z-20"
              href="/"
            >
             {/* <svg
  width="38"
  height="38"
  viewBox="0 0 35 35"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  className="h-6 w-6"
>

</svg> */}

              <span className="text-white font-bold border-2  px-2 py-1 rounded-md border-b-4 border-white">EzSync</span>
            </a>
            <div className="flex items-center gap-1.5">
              <a
                className="flex items-center justify-center text-sm leading-[110%] px-4 py-2 rounded-md hover:bg-neutral-800 hover:text-white/80 text-white hover:shadow-[0px_1px_0px_0px_#FFFFFF20_inset] transition duration-200"
                href="/features"
              >
                Features
              </a>
              <a
                className="flex items-center justify-center text-sm leading-[110%] px-4 py-2 rounded-md hover:bg-neutral-800 hover:text-white/80 text-white hover:shadow-[0px_1px_0px_0px_#FFFFFF20_inset] transition duration-200"
                href="/"
              >
                Pricing
              </a>
              <a
                className="flex items-center justify-center text-sm leading-[110%] px-4 py-2 rounded-md hover:bg-neutral-800 hover:text-white/80 text-white hover:shadow-[0px_1px_0px_0px_#FFFFFF20_inset] transition duration-200"
                href="/"
              >
                Blog
              </a>
              <a
                className="flex items-center justify-center text-sm leading-[110%] px-4 py-2 rounded-md hover:bg-neutral-800 hover:text-white/80 text-white hover:shadow-[0px_1px_0px_0px_#FFFFFF20_inset] transition duration-200"
                href="/"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="flex space-x-2 items-center">
            <a
              className="group hover:-translate-y-0.5 active:scale-[0.98] relative z-10 bg-transparent hover:border-secondary hover:bg-secondary/50 border border-transparent text-white text-sm md:text-sm transition font-medium duration-200 rounded-md px-4 py-2 flex items-center justify-center"
              href="/"
            >
              Register
            </a>
            <button className="group hover:-translate-y-0.5 active:scale-[0.98] bg-secondary relative z-10 hover:bg-secondary/90 border border-secondary text-black text-sm md:text-sm transition font-medium duration-200 rounded-md px-4 py-2 flex items-center justify-center shadow-[0px_-1px_0px_0px_#FFFFFF60_inset,_0px_1px_0px_0px_#FFFFFF60_inset]">
              Book a demo
            </button>
          </div>
        </div>
      </div>
      <div className="flex h-full w-full items-center lg:hidden">
        <div className="flex justify-between bg-transparent items-center w-full rounded-md px-2.5 py-1.5 transition duration-200">
          <a
            className="font-normal flex space-x-2 items-center text-sm mr-4 text-white px-2 py-1 relative z-20"
            href="/"
          >
           <span className="text-white font-bold border-2  px-2 py-1 rounded-md border-b-4 border-white">EzSync</span>
           
          </a>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            className="text-white h-6 w-6"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M432 176H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 272H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 368H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16z"></path>
          </svg>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
