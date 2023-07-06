"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import React, { useCallback } from "react";

export default function MachineGuards() {
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
          <span className="border-b-4 border-marcol-blue py-2">machine </span>
          guards
        </h2>
        <div className="font-archivo text-lg lg:text-xl">
          <p>
            Machine guards are generally for safeguards that can be used to
            protect workers and personnel in the immediate vicinity of
            machinery. These are physical barriers that prevent contact with any
            moving parts. They can be fixed, interlocked, adjustable, or
            self-adjusting. From our experience when the mesh type guards are
            not enough, or up to the UK’s stringent standards, we are able to
            offer an alternative material such as clear Polycarbonate or
            Acrylic. Acrylic guards look exceptional with their polished edges
            if you are exhibiting your product.{" "}
          </p>
        </div>
      </div>
      <div className="col-span-5 lg:col-span-2">
        <div className="embla">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              <div className="embla__slide">
                <img
                  src="/images/portfolio/machine_guards/slide1.jpg"
                  alt="machine guards"
                  className="w-full object-cover "
                />
              </div>
              <div className="embla__slide">
                <img
                  src="/images/portfolio/machine_guards/slide2.jpg"
                  alt="machine guards"
                  className="w-full object-cover "
                />
              </div>
              <div className="embla__slide">
                <img
                  src="/images/portfolio/machine_guards/slide3.jpg"
                  alt="machine guards"
                  className="w-full object-cover "
                />
              </div>
              <div className="embla__slide">
                <img
                  src="/images/portfolio/machine_guards/slide4.jpg"
                  alt="machine guards"
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
