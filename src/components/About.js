import React from "react";
import diana_photo from "../images/diana_photo.jpg";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-10 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-2 font-medium text-black">
            Maldonado Strategies, LLC
          </h1>
          <p className="hidden md:inline-block mb-3">Diana Maldonado</p>
          <p className="hidden md:inline-block mb-3">President & CEO</p>
          <p className="mb-8 leading-relaxed">
            Business & Management Consulting
          </p>
          <p className="mb-8 leading-relaxed">
            Connecting you to the right relationships to move your business
            forward
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-red-900 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 hover:text-black rounded text-lg"
            >
              Contact
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-white bg-red-900 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 hover:text-black rounded text-lg"
            >
              Extra
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={diana_photo}
          />
        </div>
      </div>
    </section>
  );
}