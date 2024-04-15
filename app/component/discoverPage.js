"use client";
import { useSectionInView } from "../hooks/sectionInView";
import { Cards } from "../utils/serviceCardDetails";
import ServiceCard from "./serviceCard";

const DiscoverPage = () => {
  const { ref } = useSectionInView("Discover", 0.5);
  return (
    <div ref={ref} id="discover" className="flex ml-40 mt-32 mb-8">
      <div className="w-1/3 mt-32">
        <div className="flex flex-col font-bold">
          <p className="text-[#F85E9F] text-2xl">Services</p>
          <p className=" text-5xl">Our top value categories for you</p>
        </div>
      </div>
      <div className="w-2/3 flex gap-6 overflow-y-scroll no-scrollbar">
        {Cards.map((element) => (
          <ServiceCard key={element.id} card={element} />
        ))}
      </div>
    </div>
  );
};

export default DiscoverPage;
