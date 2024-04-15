"use client";
import Image from "next/image";
import Logo from "@/public/Vector.png";
import Link from "next/link";
import { useActiveSectionContext } from "../context/routeContext";
import { Links } from "../utils/constants";

export const Header = () => {
  const { activeRoute, setActiveRoute } = useActiveSectionContext();
  const handleClick = () => {
    setActiveRoute(link.name);
    document.scrollingElement;
  };
  return (
    <div className="mb-8 pt-4 mx-40 flex justify-between items-center sticky top-0 z-20">
      <div className="flex ">
        <Image src={Logo} alt="Logo" width={40} height={40} />
        <p className="px-4 font-extrabold text-2xl">Travlog</p>
      </div>
      <ul className="flex gap-16 text-sm font-light px-4">
        {Links.map((link) => (
          <Link key={link.hash} href={link.hash} onClick={handleClick}>
            <li className={activeRoute === link.name ? "active font-bold" : ""}>
              {link.name}
            </li>
          </Link>
        ))}
      </ul>
      <div className="flex font-bold">
        <button className="text-black py-4 px-8">Log In</button>
        <button className="text-white bg-[#5D50C6] rounded-full py-4 px-8">
          Sign Up
        </button>
      </div>
    </div>
  );
};
export default Header;
