import Image from "next/image";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import logo from "../assets/logo.png";

function Header() {
  const [nav, setNav] = useState(false);
  return (
    <nav className="bg-bright fixed left-0 right-0 z-50 ">
      <div className="container mx-auto h-28 px-3 flex flex-row justify-between items-center">
        <Image src={logo} alt="logo" width={80} height={80} />
        <div className=" text-medium space-x-3 hidden md:flex flex-row items-center">
          <a
            href="#collections"
            aria-label="collections"
            className="hover:text-dark"
          >
            Collections
          </a>
          <a href="#about" aria-label="about" className="hover:text-dark">
            A propos
          </a>
          <a href="#contact" aria-label="contact" className="hover:text-dark">
            Contact
          </a>
          <a
            href="https://www.instagram.com/flairshopbesancon"
            aria-label="boutique"
            className="bg-dark px-20 py-5 text-bright hidden md:block "
          >
            Boutique
          </a>
        </div>

        <button
          aria-label="menu button"
          className="md:hidden"
          onClick={() => setNav((prev) => !prev)}
        >
          {nav ? <MdClose size={25} /> : <AiOutlineMenu size={25} />}
        </button>
        <div
          onClick={() => setNav(false)}
          className={`${"md:hidden z-10 flex flex-col space-y-3 fixed bg-bright py-10 px-3 text-dark text-center right-3 left-3 ease-out duration-150 "}${
            nav ? "top-32 " : "-top-52"
          }`}
        >
          <a
            href="#collections"
            aria-label="collections"
            className="hover:text-dark"
          >
            Collections
          </a>
          <a href="#about" aria-label="about" className="hover:text-dark">
            A propos
          </a>
          <a href="#contact" aria-label="contact" className="hover:text-dark">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
<AiOutlineMenu size={25} />;
