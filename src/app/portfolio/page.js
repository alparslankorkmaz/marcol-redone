"use client";

import Partners from "@/components/Partners";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import React, { useCallback } from "react";
import ScrubbingSystems from "@/components/ScrubbingSystems";
import Enclosures from "@/components/Enclosures";
import TanksAndBunds from "@/components/TanksAndBunds";
import DuctingAndExtractionSystems from "@/components/DuctingAndExtractionSystems";
import MachineGuards from "@/components/MachineGuards";
import Pipework from "@/components/Pipework";
import BespokeFabrication from "@/components/BespokeFabrication";
import Installation from "@/components/Installation";

export default function Portfolio() {
  const OPTIONS = {};
  const SLIDE1_COUNT = 5;
  const SLIDE1 = Array.from(Array(SLIDE1_COUNT).keys());
  const SLIDE2_COUNT = 5;
  const SLIDE2 = Array.from(Array(SLIDE2_COUNT).keys());
  const SLIDE3_COUNT = 5;
  const SLIDE3 = Array.from(Array(SLIDE3_COUNT).keys());
  const SLIDE4_COUNT = 5;
  const SLIDE4 = Array.from(Array(SLIDE4_COUNT).keys());
  const SLIDE5_COUNT = 4;
  const SLIDE5 = Array.from(Array(SLIDE5_COUNT).keys());
  const SLIDE6_COUNT = 7;
  const SLIDE6 = Array.from(Array(SLIDE6_COUNT).keys());
  const SLIDE7_COUNT = 5;
  const SLIDE7 = Array.from(Array(SLIDE7_COUNT).keys());
  const SLIDE8_COUNT = 5;
  const SLIDE8 = Array.from(Array(SLIDE8_COUNT).keys());

  return (
    <>
      <div className="relative">
        <img
          src="/images/carousel/carousel4.jpg"
          alt="man in suit signing papers"
          className="min-h-screen object-cover"
        />
        <h1 className="font-black lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase text-center text-white text-5xl lg:text-7xl tracking-widest">
          portfolio
          <span className="font-archivo my-10 tracking-normal block text-xl lg:text-4xl lg:mb-4 font-light">
            look through our work
          </span>
        </h1>
      </div>
      {/* PARTNERS */}
      <Partners />
      <div className="p-10 lg:p-20">
        <div className="grid justify-center items-center grid-cols-5 gap-10 lg:gap-32 my-20">
          <ScrubbingSystems slides={SLIDE1} options={OPTIONS} />
          <Enclosures slides={SLIDE2} options={OPTIONS} />
          <TanksAndBunds slides={SLIDE3} options={OPTIONS} />
          <DuctingAndExtractionSystems slides={SLIDE4} options={OPTIONS} />
          <MachineGuards slides={SLIDE5} options={OPTIONS} />
          <Pipework slides={SLIDE6} options={OPTIONS} />
          <BespokeFabrication slides={SLIDE7} options={OPTIONS} />
          <Installation slides={SLIDE8} options={OPTIONS} />
        </div>
      </div>
    </>
  );
}
