"use client";

import Partners from "@/components/Partners";
import { useForm, ValidationError } from "@formspree/react";
import React from "react";

export default function ContactUs() {
  const [state, handleSubmit] = useForm(process.env.formKey);
  if (state.succeeded) {
    return (
      <>
        <div className="relative">
          <img
            src="/images/contact_us.jpg"
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
        <div className="grid grid-cols-5 p-10 lg:p-20 gap-10">
          <div className="col-span-5 lg:col-span-3 bg-gray-100 p-10">
            <h2 className="font-black text-4xl uppercase my-10">
              {" "}
              <span className="border-b-4 border-marcol-blue py-2">cont</span>
              act us
            </h2>
            <div className="bg-green-100 lg:mt-48 text-center rounded-2xl p-5 lg:p-10">
              <span className="text-2xl lg:text-5xl font-archivo tracking-wide text-center font-light uppercase leading-loose">
                message sent succesfully!
              </span>
            </div>
          </div>

          <div className="col-span-5 lg:col-span-2">
            <div className="font-archivo text-lg lg:text-xl">
              <p className="font-bold">Our Location</p>
              <p>
                <span className="block">
                  Unit 10 Southfield Road Trading Estate,
                </span>{" "}
                <span className="block"> Nailsea, Bristol, </span> BS48 1JJ
              </p>
            </div>
            <div className="map my-10 flex justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d66925.30828392901!2d-2.777416128327113!3d51.4374688824095!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4871f3ad0a39d393%3A0xe4595afc0a3bfb7d!2sMarcol%20Fabrications%20(Plastics)%20Ltd!5e0!3m2!1sen!2suk!4v1688551234249!5m2!1sen!2suk"
                width="450"
                height="450"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="font-archivo mb-5 text-lg lg:text-xl">
              <p className="font-bold">Our Phone</p>
              <p>01275 810022</p>
            </div>
            <div className="font-archivo mb-5 text-lg lg:text-xl">
              <p className="font-bold">Our Fax</p>
              <p>01275 810033</p>
            </div>
            <div className="font-archivo mb-5 text-lg lg:text-xl">
              <p className="font-bold">Our Email</p>
              <p>info@marcolplastics.co.uk </p>
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="relative">
        <img
          src="/images/contact_us.jpg"
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
      <div className="grid grid-cols-5 p-10 lg:p-20 gap-10">
        <div className="col-span-5 lg:col-span-3 bg-gray-100 p-10">
          <h2 className="font-black text-4xl uppercase my-10">
            {" "}
            <span className="border-b-4 border-marcol-blue py-2">cont</span>
            act us
          </h2>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-5 gap-5 lg:gap-10"
          >
            <div className="col-span-5 lg:col-span-1 flex items-center">
              <label className="font-bold font-archivo" htmlFor="name">
                Name
              </label>
            </div>
            <div className="col-span-5 lg:col-span-4">
              <input
                id="name"
                type="name"
                name="name"
                className="p-2 w-full bg-slate-200 font-bold"
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </div>
            <div className="col-span-5 lg:col-span-1 flex items-center">
              <label className="font-bold font-archivo" htmlFor="email">
                Email
              </label>
            </div>
            <div className="col-span-5 lg:col-span-4">
              <input
                id="email"
                type="email"
                name="email"
                className="p-2 w-full bg-slate-200 font-bold"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="col-span-5 lg:col-span-1 flex items-center">
              <label className="font-bold font-archivo" htmlFor="phone">
                Number
              </label>
            </div>
            <div className="col-span-5 lg:col-span-4">
              <input
                id="phone"
                type="phone number"
                name="phone"
                className="p-2 w-full bg-slate-200 font-bold"
              />
              <ValidationError
                prefix="Phone"
                field="phone"
                errors={state.errors}
              />
            </div>
            <div className="col-span-5 lg:col-span-1 flex items-center">
              <label className="font-bold font-archivo" htmlFor="subject">
                Subject
              </label>
            </div>
            <div className="col-span-5 lg:col-span-4">
              <input
                id="subject"
                type="text"
                name="subject"
                className="p-2 w-full bg-slate-200 font-bold"
              />
              <ValidationError
                prefix="Subject"
                field="subject"
                errors={state.errors}
              />
            </div>
            <div className="col-span-5 lg:col-span-1">
              <label className="font-bold font-archivo" htmlFor="message">
                Message
              </label>
            </div>
            <div className="col-span-5 lg:col-span-4">
              <textarea
                id="message"
                name="message"
                rows={6}
                className="p-2 w-full bg-slate-200 font-bold"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <div className="flex justify-center lg:justify-end col-span-5">
              <button
                className="font-archivo uppercase bg-marcol-blue px-5 py-3 text-white text-lg lg:text-xl"
                type="submit"
                disabled={state.submitting}
              >
                send
              </button>
            </div>
          </form>
        </div>
        <div className="col-span-5 lg:col-span-2">
          <div className="font-archivo text-lg lg:text-xl">
            <p className="font-bold">Our Location</p>
            <p>
              <span className="block">
                Unit 10 Southfield Road Trading Estate,
              </span>{" "}
              <span className="block"> Nailsea, Bristol, </span> BS48 1JJ
            </p>
          </div>
          <div className="map my-10 flex justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d66925.30828392901!2d-2.777416128327113!3d51.4374688824095!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4871f3ad0a39d393%3A0xe4595afc0a3bfb7d!2sMarcol%20Fabrications%20(Plastics)%20Ltd!5e0!3m2!1sen!2suk!4v1688551234249!5m2!1sen!2suk"
              width="450"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="font-archivo mb-5 text-lg lg:text-xl">
            <p className="font-bold">Our Phone</p>
            <p>01275 810022</p>
          </div>
          <div className="font-archivo mb-5 text-lg lg:text-xl">
            <p className="font-bold">Our Fax</p>
            <p>01275 810033</p>
          </div>
          <div className="font-archivo mb-5 text-lg lg:text-xl">
            <p className="font-bold">Our Email</p>
            <p>info@marcolplastics.co.uk </p>
          </div>
        </div>
      </div>
    </>
  );
}
