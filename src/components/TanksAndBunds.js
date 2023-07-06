"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import React, { useState, useEffect, useCallback } from "react";

import { DotButton, PrevButton, NextButton } from "./CarouselArrowsDotsButtons";
import { imageByIndex3 } from "./ImageByIndex";

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
      <div className="col-span-5 lg:col-span-3">
        <h2 className="font-black text-2xl lg:text-4xl uppercase my-10">
          {" "}
          <span className="border-b-4 border-marcol-blue py-2">tanks and </span>
          bunds
        </h2>
        <div className="font-archivo">
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
      <div className="col-span-5 lg:col-span-2 flex justify-center relative">
        <div className="embla flex justify-center">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              {slides.map((index) => (
                <div className="embla__slide" key={index}>
                  <img
                    className="embla__slide__img"
                    src={imageByIndex3(index)}
                    alt="scrubbing systems"
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
