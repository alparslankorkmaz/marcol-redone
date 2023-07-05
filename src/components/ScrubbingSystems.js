"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import React, { useCallback } from "react";

export default function ScrubbingSystems() {
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
          <span className="border-b-4 border-marcol-blue py-2">scrubbing </span>
          systems
        </h2>
        <div className="font-archivo text-lg lg:text-xl">
          <p>
            Wet scrubbers and chemical scrubbers are one of the primary devices
            that control gaseous emissions, especially acidic gases. There are
            several methods to remove toxic, or corrosive compounds from exhaust
            gasses and neutralise it, but a wet/chemical scrubber always seem to
            be the cheaper option and with the choice of industrial plastics
            available to us, there is no need for those expensive exotic metals,
            as most scrubbers can be built using some of the most available
            plastic polymers.{" "}
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
                  alt="scrubbing system"
                  className="w-full object-cover "
                />
              </div>
              <div className="embla__slide">
                <img
                  src="/images/portfolio/scrubbing_systems/slide2.jpg"
                  alt="scrubbing system"
                  className="w-full object-cover "
                />
              </div>
              <div className="embla__slide">
                <img
                  src="/images/portfolio/scrubbing_systems/slide3.jpg"
                  alt="scrubbing system"
                  className="w-full object-cover "
                />
              </div>
              <div className="embla__slide">
                <img
                  src="/images/portfolio/scrubbing_systems/slide4.jpg"
                  alt="scrubbing system"
                  className="w-full object-cover "
                />
              </div>
              <div className="embla__slide">
                <img
                  src="/images/portfolio/scrubbing_systems/slide5.jpg"
                  alt="scrubbing system"
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
