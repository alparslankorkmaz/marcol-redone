"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import React, { useCallback } from "react";

export default function Pipework() {
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
          <span className="border-b-4 border-marcol-blue py-2">pipe</span>
          work
        </h2>
        <div className="font-archivo text-lg lg:text-xl">
          <p>
            Pipe-work is essential for transporting various fluids, including
            corrosive acids and potable water. Designing these systems requires
            expertise and support from reliable suppliers. We consider factors
            like normal operations, start-up, expansion, contraction, shut down,
            and process disruption. Our installations utilize cutting-edge
            welding equipment and thermoplastics like PVC, ABS, Polypropylene,
            HDPE, and PVDF. These materials offer excellent corrosion resistance
            and stability across temperature ranges. We can install piping
            systems on prefabricated skids or navigate challenging routes
            on-site. Share your requirements, and we'll provide the service you
            need.{" "}
          </p>
        </div>
      </div>
      <div className="col-span-5 lg:col-span-2">
        <div className="embla">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              <div className="embla__slide">
                <img
                  src="/images/portfolio/pipework/slide1.jpg"
                  alt="pipework"
                  className="w-full object-cover "
                />
              </div>
              <div className="embla__slide">
                <img
                  src="/images/portfolio/pipework/slide2.jpg"
                  alt="pipework"
                  className="w-full object-cover "
                />
              </div>
              <div className="embla__slide">
                <img
                  src="/images/portfolio/pipework/slide3.jpg"
                  alt="pipework"
                  className="w-full object-cover "
                />
              </div>
              <div className="embla__slide">
                <img
                  src="/images/portfolio/pipework/slide4.jpg"
                  alt="pipework"
                  className="w-full object-cover "
                />
              </div>
              <div className="embla__slide">
                <img
                  src="/images/portfolio/pipework/slide5.jpg"
                  alt="pipework"
                  className="w-full object-cover "
                />
              </div>
              <div className="embla__slide">
                <img
                  src="/images/portfolio/pipework/slide6.jpg"
                  alt="pipework"
                  className="w-full object-cover "
                />
              </div>
              <div className="embla__slide">
                <img
                  src="/images/portfolio/pipework/slide7.jpg"
                  alt="pipework"
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
