import Partners from "@/components/Partners";
import Form from "@/components/Form";

export const metadata = {
  title: "Contact Us",
  description: "If you have any questions or inquiries about Marcol Plastics, please feel free to contact us. We are here to assist you and provide the information you need.",
};


export default function ContactUs() {
  return (
    <>
      <div className="relative">
        <img
          src="/images/contact-us.webp"
          alt="hands on laptop"
          className="min-h-screen object-cover"
        />
        <h1 className="font-black lg:whitespace-nowrap lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase text-center text-white text-5xl lg:text-7xl tracking-widest">
          contact us
          <span className="font-archivo my-10 tracking-normal block text-xl lg:text-4xl lg:mb-4 font-light">
            drop by or send an email to us
          </span>
        </h1>
      </div>
      {/* PARTNERS */}
      <Partners />
      <Form />
    </>
  );
}
