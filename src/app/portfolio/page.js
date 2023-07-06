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

export default function Portfolio() {
  const autoplayOptions = {
    delay: 3500,
  };
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay(autoplayOptions),
  ]); // Add plugin

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

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
          <ScrubbingSystems />
          <Enclosures />
          <TanksAndBunds />
          <DuctingAndExtractionSystems />
          <MachineGuards />
          <Pipework />
          <BespokeFabrication />

          <div className="col-span-5 lg:col-span-3">
            <h2 className="font-black text-2xl lg:text-4xl uppercase my-10">
              {" "}
              <span className="border-b-4 border-marcol-blue py-2">
                installa
              </span>
              tion
            </h2>
            <div className="font-archivo text-lg lg:text-xl">
              <p>
                We offer fully trained site installation team(s), to carry out
                all your onsite requirements from a simple repair, installation
                of chemical pipe-work systems, all the way through to the
                installation of a complete turnkey system, consisting of tanks,
                extraction, scrubbing system, dosing rigs, enclosures,
                interconnection pipework etc. the list is endless.{" "}
              </p>
            </div>
          </div>
          <div className="col-span-5 lg:col-span-2">
            <div className="embla">
              <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                  <div className="embla__slide">
                    <img
                      src="/images/portfolio/scrubbing_systems/slide1.jpg"
                      alt="Rolls Royce emblem"
                      className="w-full object-cover "
                    />
                  </div>
                  <div className="embla__slide">
                    <img
                      src="/images/portfolio/scrubbing_systems/slide2.jpg"
                      alt="Veolia emblem"
                      className="w-full object-cover "
                    />
                  </div>
                  <div className="embla__slide">
                    <img
                      src="/images/portfolio/scrubbing_systems/slide3.jpg"
                      alt="Wessex Water emblem"
                      className="w-full object-cover "
                    />
                  </div>
                  <div className="embla__slide">
                    <img
                      src="/images/portfolio/scrubbing_systems/slide4.jpg"
                      alt="Hydro emblem"
                      className="w-full object-cover "
                    />
                  </div>
                  <div className="embla__slide">
                    <img
                      src="/images/portfolio/scrubbing_systems/slide5.jpg"
                      alt="Toyota emblem"
                      className="w-full object-cover "
                    />
                  </div>
                </div>
                <div className="flex justify-around">
                  <button
                    className="embla__prev text-3xl lg:text-5xl"
                    onClick={scrollPrev}
                  >
                    ←
                  </button>
                  <button
                    className="embla__next text-3xl lg:text-5xl"
                    onClick={scrollNext}
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
