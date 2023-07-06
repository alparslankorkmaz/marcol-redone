"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import React, { useState, useEffect, useCallback } from "react";

import { DotButton, PrevButton, NextButton } from "./CarouselArrowsDotsButtons";
import { imageByIndex4 } from "./ImageByIndex";

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
      <div
        className="col-span-5 lg:col-span-3"
        id="ducting-and-extraction-systems"
      >
        <h2 className="font-black text-2xl lg:text-4xl uppercase my-10">
          {" "}
          <span className="border-b-4 border-marcol-blue py-2">
            ducting and
          </span>
          <span className="mt-5 block">extraction systems </span>
        </h2>
        <div className="font-archivo">
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
      <div className="col-span-5 lg:col-span-2 flex justify-center relative">
        <div className="embla flex justify-center">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              {slides.map((index) => (
                <div className="embla__slide" key={index}>
                  <img
                    className="embla__slide__img"
                    src={imageByIndex4(index)}
                    alt="ducting and extraction systems"
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
