import Partners from "@/components/Partners";

export const metadata = {
  title: "About Us",
  description: "Marcol manufactures innovative plastic products for diverse industries, tailored to operate in various environments. Based in Bristol, our facilities utilise advanced welding and fusion technology for large-scale projects and offer short-run batch production.",
};


export default function AboutUs() {
  return (
    <>
      <div className="relative">
        <img
          src="/images/about_us.jpg"
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
      <div className="p-10 lg:p-24">
        <h2 className="font-black text-4xl uppercase">
          {" "}
          <span className="border-b-4 border-marcol-blue py-2">our</span>{" "}
          history
        </h2>
        <p className="my-10 font-archivo text-lg lg:text-xl">
          Marcol Fabrications, established in 1990 by directors Colin Vye and
          Mark Godfrey, brings over 50 years of combined experience in plastic
          fabrication/engineering. Based in Nailsea, just 8 miles from Bristol,
          our current premises offer convenient access to major transport links,
          including Bristol airport.{" "}
        </p>
        <p className="my-10 font-archivo text-lg lg:text-xl">
          We prioritize excellent customer service, competitive prices, and
          high-quality work. Our comprehensive services include in-house
          fabrication, experienced site teams for installations, design work,
          project management, AutoCAD/3D modeling, and site supervision. We
          ensure that your requirements are met, adhering to the highest
          standards and current legislation.{" "}
        </p>
        <p className="my-10 font-archivo text-lg lg:text-xl">
          With a diverse client base ranging from SMEs to conglomerates, we have
          extensive experience in various industries, including chemical,
          utilities, nuclear, aerospace, pharmaceutical, steel, semiconductor,
          and construction. Our accumulated expertise enables us to provide
          solutions to complex problems.{" "}
        </p>
        <p className="my-10 font-archivo text-lg lg:text-xl">
          Health and Safety is paramount to us. Our installers undergo
          comprehensive training and hold CSCS cards and CCNSG client/contractor
          national safety passports, with many at the supervisor level.
          Supervisors are fully qualified in first aid.{" "}
        </p>
      </div>
      {/* OUR MISSION */}
      <div className="p-10 lg:px-24">
        <h2 className="font-black text-4xl uppercase">
          {" "}
          <span className="border-b-4 border-marcol-blue py-2">our</span>{" "}
          mission
        </h2>
        <p className="my-10 font-archivo text-lg lg:text-xl">
          To develop and expand our business in a controlled, efficient and
          profitable manner with you, our customer, as the primary focus for all
          our activities.{" "}
        </p>
        <p className="my-10 font-archivo text-lg lg:text-xl">
          To become the first choice supplier in plastics fabrication through
          our commitment to supply quality, defect-free products and services
          first time, every time, on the due date and at realistic prices.{" "}
        </p>
        <p className="my-10 font-archivo text-lg lg:text-xl">
          If you have a problem, we have the solution. With Marcol, you are in
          very good hands.{" "}
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
