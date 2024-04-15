import Image from "next/image";
import Logo from "@/public/Vector.png";

const Footer = () => {
  return (
    <div className="grid grid-cols-4 mx-44 gap-20">
      <div className="font-extrabold text-2xl">
        <div className="flex gap-4">
          <Image src={Logo} alt="Logo" />
          <h1>Travlog</h1>
        </div>
        <p className="opacity-50 my-8 text-wrap">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC.
        </p>
      </div>
      <div className="flex flex-col gap-8">
        <h1 className="font-bold text-2xl">Company</h1>
        <ul className="flex flex-col gap-8">
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Career</li>
          <li className="cursor-pointer">Mobile</li>
        </ul>
      </div>
      <div className="flex flex-col gap-8">
        <h1 className="font-bold text-2xl">Contact</h1>
        <ul className="flex flex-col gap-8">
          <li className="cursor-pointer">Why Travlog?</li>
          <li className="cursor-pointer">Partner with Us</li>
          <li className="cursor-pointer">FAQ's</li>
          <li className="cursor-pointer">Blog</li>
        </ul>
      </div>
      <div className="flex flex-col gap-8">
        <h1 className="font-bold text-2xl">Meet Us</h1>
        <ul className="flex flex-col gap-8">
          <li>+00 92 1234 56789</li>
          <li>info@travlog.com</li>
          <li>205. R Street, New York,BD23200</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
