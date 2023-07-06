"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import React, { useCallback } from "react";

export default function TanksAndBunds() {
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
          <span className="border-b-4 border-marcol-blue py-2">tanks and </span>
          bunds
        </h2>
        <div className="font-archivo text-lg lg:text-xl">
          <p>
            Bunds are a crucial safety measure for storing hazardous liquids.
            They enclose tanks and serve as a secondary defense in case of tank
            failure, providing peace of mind.{" "}
          </p>
          <br />
          <p>
            Our storage tanks are manufactured using state-of-the-art welding
            equipment and technology. We work with thermoplastics like
            Polypropylene, HDPE, and PVDF due to their corrosion resistance and
            stability across temperature ranges. These readily available
            materials meet construction standards, such as BS EN 12573, allowing
            storage of drinking water, acids/alkaline substances, and foodstuff.
            Thermoplastic tanks offer virtually unlimited options for storing
            various media.
          </p>
        </div>
      </div>
      <div className="col-span-5 lg:col-span-2">
        <div className="embla">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              <div className="embla__slide">
                <img
                  src="/images/portfolio/tanks_and_bunds/slide1.jpg"
                  alt="tanks and bunds"
                  className="w-full object-cover "
                />
              </div>
              <div className="embla__slide">
                <img
                  src="/images/portfolio/tanks_and_bunds/slide2.jpg"
                  alt="tanks and bunds"
                  className="w-full object-cover "
                />
              </div>
              <div className="embla__slide">
                <img
                  src="/images/portfolio/tanks_and_bunds/slide3.jpg"
                  alt="tanks and bunds"
                  className="w-full object-cover "
                />
              </div>
              <div className="embla__slide">
                <img
                  src="/images/portfolio/tanks_and_bunds/slide4.jpg"
                  alt="tanks and bunds"
                  className="w-full object-cover "
                />
              </div>
              <div className="embla__slide">
                <img
                  src="/images/portfolio/tanks_and_bunds/slide5.jpg"
                  alt="tanks and bunds"
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
