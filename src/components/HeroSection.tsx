import React from "react";
import { IconArrowNarrowDown } from '@tabler/icons-react';
import { IconArrowNarrowRight } from '@tabler/icons-react';
import Carousel from '@/components/LogoCarosal'
const HeroSection = () => {
  const logos: string[] = [
    'Amazon',
    'Google',
    'PhonePay',
    "Ycombinator",
    'Microsoft',
    'Flipkart',
    'Paytm',
    // Add more text logos
  ];
  return (
    <div className="w-full flex flex-col min-h-[27rem] md:min-h-[35rem] border-green-300  px-4 pt-10 md:pt-20 overflow-hidden ">
      <div className="flex flex-col justify-center items-center text-center gap-y-6 ">
        <h1 className="text-4xl md:text-6xl font-bold ">
          Build Your Perfect Resume And Ace your interview with A.I.{" "}
        </h1>

        <span className="lg:max-w-5xl text-neutral-200">
          Welcome to our AI-powered SaaS application that specilize in resume
          building and AI Interview screening. Let out cutting-edge technology
          help you stand-out in job markets.
        </span>
      </div>
      <div className="flex justify-center items-center w-full my-8 gap-4">
      <button className="group hover:-translate-y-0.5 active:scale-[0.98] bg-secondary relative z-10 hover:bg-secondary/90 border border-secondary text-black text-sm md:text-base transition font-medium duration-200 rounded-md px-4 py-2 flex items-center justify-center shadow-[0px_-1px_0px_0px_#FFFFFF60_inset,_0px_1px_0px_0px_#FFFFFF60_inset]">
              Book demo <IconArrowNarrowRight stroke={2} className="group-hover:translate-x-1 transition-transform duration-200"  />
            </button>
      <button className="group hover:-translate-y-0.5 active:scale-[0.98] bg-neutral-900 relative z-10 hover:bg-secondary/90 border border-secondary text-gray-200  text-sm md:text-base transition font-medium duration-200 rounded-md px-4 py-2 flex items-center justify-center shadow-[0px_-1px_0px_0px_#FFFFFF60_inset,_0px_1px_0px_0px_#FFFFFF60_inset]">
              Build Resume <IconArrowNarrowRight stroke={2} className="group-hover:translate-x-1 transition-transform duration-200"  />
            </button>
   </div>
   <div className="mt-4 bg-neutral-950 rounded-md p-2 pb-0  ">
    <h2 className="text-center text-2xl font-bold pt-3 pb-1">Trusted Brands</h2>
    <IconArrowNarrowDown stroke={2} className="text-center w-full animate-bounce"/>
    <div className="bg-neutral-900 rounded-md pt-6 mt-2">
   <Carousel logos={logos} />
   </div>
   </div>
    </div>
  );
};

export default HeroSection;
