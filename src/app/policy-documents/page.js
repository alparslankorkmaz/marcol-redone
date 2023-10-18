import Partners from "@/components/Partners";

export const metadata = {
  title: "Policy Documents",
  description: "Marcol Plastics is committed to transparency and compliance. Find all the necessary policy documents here, including our environmental policy, health and safety policy, and more.",
};


export default function PolicyDocuments() {
  return (
    <>
      <div className="relative">
        <img
          src="/images/policy.webp"
          alt="man in suit signing papers"
          className="min-h-screen object-cover"
        />
        <h1 className="font-black lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase text-center text-white text-5xl lg:text-7xl tracking-widest">
          policy documents
          <span className="font-archivo my-10 tracking-normal block text-xl lg:text-4xl lg:mb-4 font-light">
            quality you can trust
          </span>
        </h1>
      </div>
      {/* PARTNERS */}
      <Partners />
      <div className="p-10 lg:p-32 container max-w-7xl mx-auto">
        <h2 className="font-black text-4xl uppercase my-10">
          <span className="border-b-4 border-marcol-blue py-2">Below </span>
          is a section of our key policies
        </h2>
        <div className="font-archivo text-lg lg:text-xl">
          <p>
            For a full list or any specific enquiries regarding our policies for any matter. Please contact us.
          </p>
        </div>
        <div className="grid grid-cols-2 my-10 gap-5">
          <div className="col-span-2 lg:col-span-1 p-4 text-center underline font-archivo font-light uppercase bg-marcol-blue text-white">
            <a href="/pdf/F205_Use_of_Certificates_and_Certification_and_Accreditation_Mark.pdf" target="_blank">
              Use of Certificates and Certification and Accreditation Marks
            </a>
          </div>
          <div className="col-span-2 lg:col-span-1 p-4 text-center underline font-archivo font-light uppercase bg-marcol-blue text-white">
            <a href="/pdf/Marcol_BUSINESS_QUALITY_AND_ENVIRONMENT_reviewed_2023.pdf" target="_blank">
              our business quality & environmental policy is available as a pdf here.
            </a>
          </div>
          <div className="col-span-2 lg:col-span-1 p-4 text-center underline font-archivo font-light uppercase bg-marcol-blue text-white">
            <a href="/pdf/0127928_ENG_Marcol_Fabrications_(Plastics)_Ltd.pdf" target="_blank">
              our iso 9001 certification is available as a pdf here.
            </a>
          </div>
          <div className="col-span-2 lg:col-span-1 p-4 text-center underline font-archivo font-light uppercase bg-marcol-blue text-white">
            <a href="/pdf/0127931_ENG_Marcol_Fabrications_(Plastics)_Ltd.pdf" target="_blank">
              our iso 14001 certification is available as a pdf here.
            </a>
          </div>
          <div className="col-span-2 lg:col-span-1 p-4 text-center underline font-archivo font-light uppercase bg-marcol-blue text-white">
            <a href="/pdf/Marcol_ANTI_BRIBARY_reviewed_2023.pdf" target="_blank">
              our anti bribery policy is available as a pdf here.
            </a>
          </div>
          <div className="col-span-2 lg:col-span-1 p-4 text-center underline font-archivo font-light uppercase bg-marcol-blue text-white">
            <a href="/pdf/Marcol_MODERN_SLAVERY_reviewed_2023.pdf" target="_blank">
              our anti slavery policy is available as a pdf here.
            </a>
          </div>
          <div className="col-span-2 lg:col-span-1 p-4 text-center underline font-archivo font-light uppercase bg-marcol-blue text-white">
            <a href="/pdf/Marcol_EQUAL_OPPURTUNITIES_reviewed_2023.pdf" target="_blank">
              our equal opportunities policy is available as a pdf here.
            </a>
          </div>
          <div className="col-span-2 lg:col-span-1 p-4 text-center underline font-archivo font-light uppercase bg-marcol-blue text-white">
            <a href="/pdf/Marcol_CSR_reviewed_2023.pdf" target="_blank">
              our csr policy is available as a pdf here.
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
