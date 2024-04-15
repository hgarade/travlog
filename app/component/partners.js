import Design from "@/public/OBJECTS.png";
import Image from "next/image";
import { iconArray } from "../utils/tripPartner";

const Partners = () => {
  return (
    <div className="m-9 mt-0 flex items-center">
      <Image src={Design} alt="design" className="motion-safe:animate-bounce" />
      <div className="flex gap-20 justify-center ml-24">
        {iconArray.map((element) => (
          <Image
            key={element.id}
            src={element.src}
            alt="Trip Advisors"
            className="scaleOut"
          />
        ))}
      </div>
    </div>
  );
};

export default Partners;
