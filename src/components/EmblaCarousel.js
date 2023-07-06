import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";

export default function EmblaCarousel() {
  const autoplayOptions = {
    delay: 4500,
  };
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay(autoplayOptions),
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
          <Link
            href="/contact-us"
            className="px-5 py-2 lg:px-9 lg:py-4 text-white bg-marcol-blue font-archivo text-xl font-light absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-28 uppercase text-center"
          >
            get in touch
          </Link>
        </div>
        <div className="embla__slide relative">
          <img
            src="/images/carousel/carousel2.jpg"
            alt="bespoke fabrication"
            className="min-h-screen object-cover"
          />
          <h2 className="font-black lg:whitespace-nowrap absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase text-center text-white text-5xl lg:text-7xl tracking-wide">
            <span className="font-archivo block text-xl lg:text-4xl my-2 font-light">
              {" "}
              on budget{" "}
            </span>{" "}
            and on time
            <span className="font-archivo block text-lg lg:text-2xl my-2 font-light">
              whatever you need
            </span>
          </h2>
          <Link
            href="/contact-us"
            className="px-5 py-2 lg:px-9 lg:py-4 text-white bg-marcol-blue font-archivo text-xl font-light absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-28 uppercase text-center"
          >
            get in touch
          </Link>
        </div>
        <div className="embla__slide relative">
          <img
            src="/images/carousel/carousel3.jpg"
            alt="tanks and bunds"
            className="min-h-screen object-cover"
          />
          <h3 className="font-black lg:whitespace-nowrap absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase text-center text-white text-5xl lg:text-7xl tracking-wide">
            <span className="font-archivo block text-xl lg:text-4xl my-2 font-light">
              {" "}
              a winning{" "}
            </span>{" "}
            combination
            <span className="font-archivo block text-lg lg:text-2xl my-2 font-light">
              combining excellence with experience
            </span>
          </h3>
          <Link
            href="/contact-us"
            className="px-5 py-2 lg:px-9 lg:py-4 text-white bg-marcol-blue font-archivo text-xl font-light absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-28 uppercase text-center"
          >
            get in touch
          </Link>
        </div>
        <div className="embla__slide relative">
          <img
            src="/images/carousel/carousel4.jpg"
            alt="pipework"
            className="min-h-screen object-cover"
          />
          <h4 className="font-black lg:whitespace-nowrap absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase text-center text-white text-5xl lg:text-7xl tracking-wide">
            <span className="font-archivo block text-xl lg:text-4xl my-2 font-light">
              {" "}
              no matter{" "}
            </span>{" "}
            how big or small
            <span className="font-archivo block text-lg lg:text-2xl my-2 font-light">
              delivered to your door
            </span>
          </h4>
          <Link
            href="/contact-us"
            className="px-5 py-2 lg:px-9 lg:py-4 text-white bg-marcol-blue font-archivo text-xl font-light absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-36 uppercase text-center"
          >
            get in touch
          </Link>
        </div>
      </div>
    </div>
  );
}
