"use client"
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function Partners() {
  const autoplayOptions = {
    delay: 4500,
  };
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay(autoplayOptions),
  ]); // Add plugin

  return (
    <>
      <div className="partners bg-marcol-blue px-10 hidden lg:flex">
        <img
          src="/images/partners/rollsroyce.png"
          alt="Rolls Royce emblem"
          className="w-2/12 aspect-3/2 object-contain p-5"
        />
        <img
          src="/images/partners/veolia.png"
          alt="Veolia emblem"
          className="w-2/12 aspect-3/2 object-contain p-5"
        />
        <img
          src="/images/partners/wessexwater.png"
          alt="Wessex Water emblem"
          className="w-2/12 aspect-3/2 object-contain p-5"
        />
        <img
          src="/images/partners/hydro.png"
          alt="Hydro emblem"
          className="w-2/12 aspect-3/2 object-contain p-5"
        />
        <img
          src="/images/partners/toyota.png"
          alt="Toyota emblem"
          className="w-2/12 aspect-3/2 object-contain p-5"
        />
        <img
          src="/images/partners/tata.png"
          alt="Tata emblem"
          className="w-2/12 aspect-3/2 object-contain p-5"
        />
      </div>

      <div
        className="embla partners bg-marcol-blue px-2 flex lg:hidden"
        ref={emblaRef}
      >
        <div className="embla__container">
          <div className="embla__slide">
            <img
              src="/images/partners/rollsroyce.png"
              alt="Rolls Royce emblem"
              className="w-96 aspect-3/2 object-contain p-3"
            />
          </div>
          <div className="embla__slide ">
            <img
              src="/images/partners/veolia.png"
              alt="Veolia emblem"
              className="w-96 aspect-3/2 object-contain p-3"
            />
          </div>
          <div className="embla__slide">
            <img
              src="/images/partners/wessexwater.png"
              alt="Wessex Water emblem"
              className="w-96 aspect-3/2 object-contain p-3"
            />
          </div>
          <div className="embla__slide">
            <img
              src="/images/partners/hydro.png"
              alt="Hydro emblem"
              className="w-96 aspect-3/2 object-contain p-3"
            />
          </div>
          <div className="embla__slide">
            <img
              src="/images/partners/toyota.png"
              alt="Toyota emblem"
              className="w-96 aspect-3/2 object-contain p-3"
            />
          </div>
          <div className="embla__slide">
            <img
              src="/images/partners/tata.png"
              alt="Tata emblem"
              className="w-96 aspect-3/2 object-contain p-3"
            />
          </div>
        </div>
      </div>
    </>
  );
}
