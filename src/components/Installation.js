"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import React, { useCallback } from "react";

export default function Installation() {
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
          <span className="border-b-4 border-marcol-blue py-2">installa</span>
          tion
        </h2>
        <div className="font-archivo text-lg lg:text-xl">
          <p>
            We offer fully trained site installation team(s), to carry out all
            your onsite requirements from a simple repair, installation of
            chemical pipe-work systems, all the way through to the installation
            of a complete turnkey system, consisting of tanks, extraction,
            scrubbing system, dosing rigs, enclosures, interconnection pipework
            etc. the list is endless.{" "}
          </p>
        </div>
      </div>
      <div className="col-span-5 lg:col-span-2">
        <div className="embla">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              <div className="embla__slide">
                <img
                  src="/images/portfolio/installation/slide1.jpg"
                  alt="installation"
                  className="w-full object-cover "
                />
              </div>
              <div className="embla__slide">
                <img
                  src="/images/portfolio/installation/slide2.jpg"
                  alt="installation"
                  className="w-full object-cover "
                />
              </div>
              <div className="embla__slide">
                <img
                  src="/images/portfolio/installation/slide3.jpg"
                  alt="installation"
                  className="w-full object-cover "
                />
              </div>
              <div className="embla__slide">
                <img
                  src="/images/portfolio/installation/slide4.jpg"
                  alt="installation"
                  className="w-full object-cover "
                />
              </div>
              <div className="embla__slide">
                <img
                  src="/images/portfolio/installation/slide5.jpg"
                  alt="installation"
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