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
        <div className="grid justify-center items-center grid-cols-5 gap-10 lg:gap-32">
          <ScrubbingSystems slides={SLIDE1} options={OPTIONS} />
          <Enclosures />
          <TanksAndBunds />
          <DuctingAndExtractionSystems />
          <MachineGuards />
          <Pipework />
          <BespokeFabrication />
          <Installation />
        </div>
      </div>
    </>
  );
}
