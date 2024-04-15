"use client";
import Image from "next/image";
import { CardData } from "../utils/constants";
import DiscountIcon from "@/public/discountIcon.png";
import { useSectionInView } from "../hooks/sectionInView";

const Deals = () => {
  const { ref } = useSectionInView("Special Deals", 0.5);

  const CardContent = (card) => {
    return (
      <div className="rounded-xl bg-white shadow-lg flex flex-col items-center">
        <p className="text-[#FF5722] font-bold text-3xl pt-8">{card.title}</p>
        <p className=" pb-8 pt-4 text-center">{card.description}</p>
      </div>
    );
  };
  return (
    <div ref={ref} id="special-deals" className="flex pt-32 mr-36">
      <div className="w-4/6 background-deals flex bg-no-repeat mr-4"></div>
      <div className="w-2/6">
        <h1 className="text-[#F85E9F] font-bold text-2xl py-4">Travel Point</h1>
        <p className="font-bold text-5xl pb-8">
          We helping you find your dream location
        </p>
        <p className="font-normal text-lg opacity-50">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC.
        </p>

        <div className=" relative grid grid-cols-2 pt-16 gap-4">
          <Image
            src={DiscountIcon}
            alt="Discount Icon"
            className="absolute -right-44 top-3"
          />
          <div className="row-span-1 scaleOut">{CardContent(CardData[0])}</div>
          <div className="row-span-1 scaleOut"> {CardContent(CardData[1])}</div>
          <div className="row-span-2 scaleOut"> {CardContent(CardData[2])}</div>
          <div className="row-span-2 scaleOut">
            {" "}
            {CardContent(CardData[3])}{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deals;
