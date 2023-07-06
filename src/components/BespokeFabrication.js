"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import React, { useCallback } from "react";

export default function BespokeFabrication() {
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
          <span className="border-b-4 border-marcol-blue py-2">bespoke </span>
          fabrication
        </h2>
        <div className="font-archivo text-lg lg:text-xl">
          <p>
            Over the last thirty trading years, due to Marcol’s experience, the
            understanding of Polymers and choosing suitable materials, along
            with our comprehensive fabrication techniques, design service and
            our ability to offer 3D drawings, we can offer our customers the
            first chance to see their concept in 3D. All this can take place
            offsite keeping fabrication and travelling costs to a minimum.
            Basically, if you can think out of the box, then we are sure we can
            be on the outside of the box with you, offering guidance all the
            way.{" "}
          </p>
        </div>
      </div>
      <div className="col-span-5 lg:col-span-2">
        <div className="embla">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              <div className="embla__slide">
                <img
                  src="/images/portfolio/bespoke_fabrication/slide1.jpg"
                  alt="bespoke fabrication"
                  className="w-full object-cover "
                />
              </div>
              <div className="embla__slide">
                <img
                  src="/images/portfolio/bespoke_fabrication/slide2.jpg"
                  alt="bespoke fabrication"
                  className="w-full object-cover "
                />
              </div>
              <div className="embla__slide">
                <img
                  src="/images/portfolio/bespoke_fabrication/slide3.jpg"
                  alt="bespoke fabrication"
                  className="w-full object-cover "
                />
              </div>
              <div className="embla__slide">
                <img
                  src="/images/portfolio/bespoke_fabrication/slide4.jpg"
                  alt="bespoke fabrication"
                  className="w-full object-cover "
                />
              </div>
              <div className="embla__slide">
                <img
                  src="/images/portfolio/bespoke_fabrication/slide5.jpg"
                  alt="bespoke fabrication"
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
