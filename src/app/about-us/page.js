import Partners from "@/components/Partners";

export const metadata = {
  title: "About Us",
  description: "Marcol Plastics is a leading manufacturer of high-quality plastic products. Learn more about our company's history, values, and commitment to providing innovative solutions for our customers.",
};


export default function AboutUs() {
  return (
    <>
      <div className="relative">
        <img
          src="/images/about-us.webp"
          alt="closeup pipe"
          className="min-h-screen object-cover"
        />
        <h1 className="font-black lg:whitespace-nowrap absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase text-center text-white text-5xl lg:text-7xl tracking-widest">
          about us
          <span className="font-archivo my-10 tracking-normal block text-xl lg:text-4xl lg:mb-4 font-light">
            {" "}
            find out about marcol fabrications{" "}
          </span>{" "}
        </h1>
      </div>
      {/* PARTNERS */}
      <Partners />
      {/* OUR HISTORY */}
      <div className="p-10 lg:p-24 container max-w-7xl mx-auto">
        <h2 className="font-black text-4xl uppercase">
          {" "}
          <span className="border-b-4 border-marcol-blue py-2">our</span>{" "}
          history
        </h2>
        <p className="my-10 font-archivo text-lg lg:text-xl">
          Marcol Fabrications, originally established in 1990 by Colin Vye and Mark Godfrey, grew from small beginnings in a farm building on the outskirts of Bristol.         </p>
        <p className="my-10 font-archivo text-lg lg:text-xl">
          Growing by reputation, they ensured they engaged only likeminded individuals in the formative years - and we are happy to say many of those early skilled additions are still with us. That helped ensure the expertise to service specialist markets, clients, and main and specialist contractors in all disciplines in plastic fabrication and engineering continues. Based in Nailsea since 1998, just 8 miles from Bristol, the current premises offers convenient access to major transport links, including Bristol airport.        </p>
        <p className="my-10 font-archivo text-lg lg:text-xl">
          Our high quality team, a product of more than 30 years of growth, delivered a seamless transition following the retirement of the founders.  Throughout the business we are continuing our mission to uphold the very highest standards of service through all stages of engagement with our clients new and old. </p>
      </div>
      {/* OUR MISSION */}
      <div className="p-10 lg:px-24 container max-w-7xl mx-auto">
        <h2 className="font-black text-4xl uppercase">
          {" "}
          <span className="border-b-4 border-marcol-blue py-2">our</span>{" "}
          mission
        </h2>
        <p className="my-10 font-archivo text-lg lg:text-xl">
          We strive to become the first choice supplier in plastics fabrication through our commitment to supply quality, defect-free products and services first time, every time, on time and at realistic prices.
        </p>
        <p className="my-10 font-archivo text-lg lg:text-xl">
          If you have a problem, we have the solution. With Marcol, you are in very good hands.
        </p>
      </div>

      {/* <div className="grid grid-cols-3 gap-32 lg:gap-10 m-10 lg:mx-20">
        <div className="grid grid-cols-5 col-span-3 gap-10 lg:gap-20">
          <div className="bg-colin col-span-5 lg:col-span-2 bg-cover bg-no-repeat bg-center h-96 flex flex-col justify-end items-center">
            <div className="text-center mb-5 border-b-8 p-3 font-black text-xl lg:text-2xl tracking-wider whitespace-nowrap text-white uppercase">
              <p> colin vye </p>
              <p className="font-archivo font-light lg:text-lg"> founder </p>
            </div>
          </div>
          <div className="col-span-5 lg:col-span-3 flex items-center">
            <p className="font-archivo text-lg lg:text-xl">
              With over 37 years worth of experience working at the "coalface"
              of the industry, Colin has proven himself time and again. Having
              worked with numerous different industries he brings a wealth of
              knowledge to the company, and now, as one of the directors at
              Marcol.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-5 col-span-3 gap-10 lg:gap-20">
          <div className="bg-mark col-span-5 lg:col-span-2 bg-cover bg-no-repeat bg-center h-96 flex flex-col justify-end items-center">
            <div className="text-center mb-5 border-b-8 p-3 font-black text-xl lg:text-2xl tracking-wider whitespace-nowrap text-white uppercase">
              <p> mark godfrey </p>
              <p className="font-archivo font-light lg:text-lg"> founder </p>
            </div>
          </div>
          <div className="col-span-5 lg:col-span-3 flex items-center">
            <p className="font-archivo text-lg lg:text-xl">
              Mark has over 30 years of experience in plastic fabrication and is
              still very hands-on; you might even see him managing site
              installations.{" "}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-5 col-span-3 gap-10 lg:gap-20">
          <div className="bg-richard col-span-5 lg:col-span-2 bg-cover bg-no-repeat bg-center h-96 flex flex-col justify-end items-center">
            <div className="text-center mb-5 border-b-8 p-3 font-black text-xl lg:text-2xl tracking-wider whitespace-nowrap text-white uppercase">
              <p> richard baker </p>
              <p className="font-archivo font-light lg:text-lg">
                {" "}
                project manager{" "}
              </p>
            </div>
          </div>
          <div className="col-span-5 lg:col-span-3 flex items-center">
            <p className="font-archivo text-lg lg:text-xl">
              17 years’ experience in plastic fabrication. From a fabricator on
              the workshop floor here at Marcol, Rich progressed to workshop
              supervisor and then project manager. Interoperating customers’
              requirements and assisting with design using 3D modelling
              software. Successfully managing and delivering projects with some
              of the UK biggest companies.{" "}
            </p>
          </div>
        </div>
      </div> */}
    </>
  );
}
