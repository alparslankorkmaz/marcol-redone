"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import React, { useCallback } from "react";

export default function DuctingAndExtractionSystems() {
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
      {" "}
      <div className="col-span-5 lg:col-span-3">
        <h2 className="font-black text-2xl lg:text-4xl uppercase my-10">
          {" "}
          <span className="border-b-4 border-marcol-blue py-2">
            ducting and{" "}
          </span>
          <span className="block mt-5"> extraction systems </span>
        </h2>
        <div className="font-archivo text-lg lg:text-xl">
          <p>
            We offer fully designed ventilation systems, including workshop
            fabrication and installation of specialised complex plastic ductwork
            projects through to the simple installation of a single duct system
            for a fume cupboard. The manufacture of specialised adaptors to suit
            these obscure sizes can be fabricated using material such as
            Polypropylene, PPs, PVC and HDPE. These off the shelf materials are
            used for materials of construction, due to their high corrosion
            resistance and their stability over a wide range of temperatures.{" "}
          </p>
        </div>
      </div>
      <div className="col-span-5 lg:col-span-2">
        <div className="embla">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              <div className="embla__slide">
                <img
                  src="/images/portfolio/ducting_and_extraction_systems/slide1.jpg"
                  alt="ducting and extraction systems"
                  className="w-full object-cover "
                />
              </div>
              <div className="embla__slide">
                <img
                  src="/images/portfolio/ducting_and_extraction_systems/slide2.jpg"
                  alt="ducting and extraction systems"
                  className="w-full object-cover "
                />
              </div>
              <div className="embla__slide">
                <img
                  src="/images/portfolio/ducting_and_extraction_systems/slide3.jpg"
                  alt="ducting and extraction systems"
                  className="w-full object-cover "
                />
              </div>
              <div className="embla__slide">
                <img
                  src="/images/portfolio/ducting_and_extraction_systems/slide4.jpg"
                  alt="ducting and extraction systems"
                  className="w-full object-cover "
                />
              </div>
              <div className="embla__slide">
                <img
                  src="/images/portfolio/ducting_and_extraction_systems/slide5.jpg"
                  alt="ducting and extraction systems"
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
    </>
  );
}
