import Image from "next/image";

const ServiceCard = ({ card }) => {
  return (
    <div className="w-[235] h-auto flex flex-col items-center justify-center bg-white shadow-2xl rounded-xl border scaleOut">
      <Image
        className="my-16 mx-36"
        src={card.image}
        alt={card.title}
        width={64}
        height={64}
      />
      <h1 className="pb-8 px-4 font-bold text-3xl flex flex-wrap text-center">
        {card.title}
      </h1>
      <p className=" mx-14 opacity-50 font-normal text-lg flex flex-wrap text-center ">
        {card.description}
      </p>
    </div>
  );
};

export default ServiceCard;
