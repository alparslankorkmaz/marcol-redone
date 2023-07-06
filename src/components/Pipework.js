"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import React, { useState, useEffect, useCallback } from "react";

import { DotButton, PrevButton, NextButton } from "./CarouselArrowsDotsButtons";
import { imageByIndex6 } from "./ImageByIndex";

export default function ScrubbingSystems(props) {
  const autoplayOptions = {
    delay: 5500,
  };
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay(autoplayOptions),
  ]); // Add plugin

  const { slides, options } = props;
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );
  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onInit = useCallback((emblaApi) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <>
      {" "}
      <div className="col-span-5 lg:col-span-3" id="pipework">
        <h2 className="font-black text-2xl lg:text-4xl uppercase my-10">
          {" "}
          <span className="border-b-4 border-marcol-blue py-2">pipe</span>
          work
        </h2>
        <div className="font-archivo">
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
      <div className="col-span-5 lg:col-span-2 flex justify-center relative">
        <div className="embla flex justify-center">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              {slides.map((index) => (
                <div className="embla__slide" key={index}>
                  <img
                    className="embla__slide__img"
                    src={imageByIndex6(index)}
                    alt="pipework"
                  />
                </div>
              ))}
            </div>
          </div>
          {/* <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} /> */}
          {/* <NextButton onClick={scrollNext} enabled={nextBtnEnabled} /> */}
        </div>
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              selected={index === selectedIndex}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
}
