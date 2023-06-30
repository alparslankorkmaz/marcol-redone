import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function EmblaCarousel() {
  const autoplayOptions = {
    delay: 5000,
  };
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    // Autoplay(autoplayOptions),
  ]); // Add plugin

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide relative">
          <img
            src="/images/carousel/carousel1.jpg"
            alt="closeup pipe"
            className="min-h-screen object-cover"
          />
          <h1 className="font-black lg:whitespace-nowrap absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase text-center text-white text-5xl lg:text-7xl tracking-wide">
            <span className="font-archivo block text-xl lg:text-4xl lg:mb-4 font-light">
              {" "}
              welcome to{" "}
            </span>{" "}
            marcol fabrications
          </h1>
          <button className="px-5 py-2 lg:px-9 lg:py-4 text-white bg-marcol-blue font-archivo text-xl font-light absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-28 uppercase text-center">
            get in touch
          </button>
        </div>
        <div className="embla__slide">
          <img
            src="/images/carousel/carousel2.jpg"
            alt="bespoke fabrication"
            className="min-h-screen object-cover"
          />
        </div>
        <div className="embla__slide">
          <img
            src="/images/carousel/carousel3.jpg"
            alt="tanks and bunds"
            className="min-h-screen object-cover"
          />
        </div>
        <div className="embla__slide">
          <img
            src="/images/carousel/carousel4.jpg"
            alt="pipework"
            className="min-h-screen object-cover"
          />
        </div>
      </div>
    </div>
  );
}
