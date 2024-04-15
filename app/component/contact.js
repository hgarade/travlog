"use client";
import Graphic from "@/public/GraphicElement.png";
import Image from "next/image";
import { useSectionInView } from "../hooks/sectionInView";

const Contact = () => {
  const { ref } = useSectionInView("Contact", 0.5);
  return (
    <div ref={ref} id="contact" className="relative mt-28 p-20">
      <Image src={Graphic} alt="Graphic" className="absolute" />
      <div className="bg-[#FACD4914] mx-40 m-16 flex flex-col items-center rounded-lg">
        <h1 className="text-[#F85E9F] font-bold text-2xl mt-32 mb-8">
          SUBSCRIBE TO OUR NEWSLETTER
        </h1>
        <p className="font-bold text-5xl mx-16 mb-16">
          Prepare yourself & let’s explore the beauty of the world
        </p>
        <div className="flex gap-8 w-full px-16 pb-32">
          <input
            type="email"
            placeholder="Your Email"
            className="p-4 w-4/6 rounded-lg"
          />

          <button className="text-white bg-[#5D50C6] rounded-2xl py-4 px-8">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
