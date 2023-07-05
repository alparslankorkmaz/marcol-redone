"use client";

import Partners from "@/components/Partners";

export default function PolicyDocuments() {
  return (
    <>
      <div className="relative">
        <img
          src="/images/policy.jpg"
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
      <div className="p-10 lg:p-32">
        <h2 className="font-black text-4xl uppercase my-10">
          {" "}
          <span className="border-b-4 border-marcol-blue py-2">joint </span>
          policy statement
        </h2>
        <div className="font-archivo text-lg lg:text-xl">
          <p>
            The Quality: Environmental and Health & Safety Policy for Marcol
            Fabrications (Plastics) Limited has now been realigned to reflect
            the changes within the new Standards released. The Policy is set out
            to reflect how these changes influence the business context and its
            strategic direction as well as embracing the requirements of both
            internal and external parties.{" "}
          </p>
          <br />
          <p>
            It is incumbent on Marcol Fabrications (Plastics) Limited to
            identify all interested parties that influences the business and its
            context. Marcol Fabrications (Plastics) Limited has set out to
            recognise and determine levels of Risk that could impact the
            business such as poor quality of service; failure to prevent the
            effects of pollution and protection of the environment. Failure to
            protect all interested parties from harm through poor health &
            safety all of which could have a major impact on both its customer
            portfolio and own business strategic direction.
          </p>
          <br />
          <p>
            Having identified the Risks to the business Marcol Fabrications
            (Plastics) Limited has set out to plan and implement actions to
            address those Risks by either reducing or eliminating those Risks!
          </p>
          <br />
          <p>
            Business Objectives are set to encompass and address perceived
            issues that could adversely influence the business and to fully
            support the achievement of this Policy as well as the Business
            Management System and to provide a platform for continual
            improvement.
          </p>
          <br />
          <p>
            Marcol Fabrications (Plastics) Limited continue to identify all its
            compliance obligations and strives to ensure compliance in all
            respects.
          </p>
          <br />
          <p>
            In addition, the Business has established a full CSR (Corporate
            Social Responsibility and Sustainability Policy) that emphasises its
            commitment to its employees (internal interested parties) as well as
            its external interested parties.
          </p>
          <br />
          <p>
            The business has established an active Internal Audit Program to
            monitor, measure and review the delivery and effectiveness of these
            plans.
          </p>
          <br />
          <p>
            The above Policy will be maintained as a documented reference and
            reviewed at least annually as well as being made available to all
            interested parties as appropriate and communicated, understood and
            applied within the organisation itself.
          </p>
        </div>
        <div className="grid grid-cols-2 my-10 gap-5">
          <div className="col-span-2 lg:col-span-1 p-4 text-center underline font-archivo font-light uppercase bg-marcol-blue text-white">
            <a href="/pdf/joint_policy_statement.pdf" target="_blank">
              our joint policy statement is available as a pdf here.
            </a>
          </div>
          <div className="col-span-2 lg:col-span-1 p-4 text-center underline font-archivo font-light uppercase bg-marcol-blue text-white">
            <a href="/pdf/marcol_9001.pdf" target="_blank">
              our iso 9001 certification is available as a pdf here.
            </a>
          </div>
          <div className="col-span-2 lg:col-span-1 p-4 text-center underline font-archivo font-light uppercase bg-marcol-blue text-white">
            <a href="/pdf/marcol_14001.pdf" target="_blank">
              our iso 14001 certification is available as a pdf here.
            </a>
          </div>
          <div className="col-span-2 lg:col-span-1 p-4 text-center underline font-archivo font-light uppercase bg-marcol-blue text-white">
            <a href="/pdf/anti_bribery_policy.pdf" target="_blank">
              our anti bribery policy is available as a pdf here.
            </a>
          </div>
          <div className="col-span-2 lg:col-span-1 p-4 text-center underline font-archivo font-light uppercase bg-marcol-blue text-white">
            <a href="/pdf/anti_slavery_policy.pdf" target="_blank">
              our anti slavery policy is available as a pdf here.
            </a>
          </div>
          <div className="col-span-2 lg:col-span-1 p-4 text-center underline font-archivo font-light uppercase bg-marcol-blue text-white">
            <a href="/pdf/equal_opportunities_policy.pdf" target="_blank">
              our equal opportunities policy is available as a pdf here.
            </a>
          </div>
          <div className="col-span-2 lg:col-span-1 p-4 text-center underline font-archivo font-light uppercase bg-marcol-blue text-white">
            <a href="/pdf/CSR_policy_2022.pdf" target="_blank">
              our csr policy is available as a pdf here.
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
