"use client";
import Image from "next/image";
import ExploreIcon from "@/public/explore.png";
import WatchIcon from "@/public/play-circle.png";
import Image1 from "@/public/Rectangle1.png";
import Image2 from "@/public/Rectangle2.png";
import Image3 from "@/public/Rectangle3.png";
import SendIcon from "@/public/send.png";
import AddIcon from "@/public/addIcon.png";
import { useSectionInView } from "../hooks/sectionInView";

const HomePage = () => {
  const { ref } = useSectionInView("Home", 0.5);
  return (
    <div ref={ref} id="home" className="my-20 ml-40 mr-16 flex">
      <div className="w-1/3">
        <div className="bg-white rounded-3xl border text-[#F85E9F] px-8 py-4 flex font-bold text-sm w-max">
          <span className="pr-4">Explore the world!</span>{" "}
          <Image
            src={ExploreIcon}
            alt="Explore the world"
            width={20}
            height={20}
          />{" "}
        </div>
        <div className="text-7xl font-bold  flex-wrap my-12">
          Travel <span className="text-[#F85E9F]">top destination</span> of the
          world
        </div>
        <div className="font-normal text-lg opacity-50">
          We always make our customer happy by providing as many choices as
          possible
        </div>
        <div className="flex font-bold text-sm my-10 gap-4">
          <button className="text-white bg-[#5D50C6] rounded-full py-4 px-8">
            Get Started
          </button>
          <button className=" bg-white border flex rounded-full py-4 px-8 ">
            <Image
              className="pr-1"
              src={WatchIcon}
              alt="Watch"
              width={24}
              height={24}
            />{" "}
            Watch Demo
          </button>
        </div>
      </div>
      <div className="w-2/3 background-layer flex bg-no-repeat ml-14">
        <div className="ml-14 mt-9 flex flex-col w-[40%]">
          <div className="ml-8 my-8 flex flex-col relative">
            <Image
              className="mb-8 animate-fadeInLeft"
              src={Image1}
              width={272}
              height={300}
              alt="Travel destination"
            />
            <Image
              className="absolute top-64 -left-14 animate-bounce"
              src={SendIcon}
              alt="Send"
            />
            <Image
              className="animate-fadeInLeft"
              src={Image2}
              width={272}
              height={300}
              alt="Travel destination"
            />
          </div>
        </div>
        <div className="float-left relative flex items-center pt-16">
          <Image
            src={Image3}
            width={272}
            height={400}
            alt="Travel destination"
          />
          <Image
            className="absolute left-16 -bottom-20"
            src={AddIcon}
            alt="Add Icon"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
