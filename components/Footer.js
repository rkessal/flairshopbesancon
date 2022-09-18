import Image from "next/image";
import logoWhite from "../assets/logo-white.png";
import { AiFillFacebook, AiOutlineInstagram } from "react-icons/ai";

function Footer() {
  return (
    <footer className="bg-dark">
      <div className="container mx-auto px-3 py-16 flex flex-col justify-between items-center text-center space-y-6 md:flex-row">
        <Image
          alt="logo"
          src={logoWhite}
          layout="fixed"
          width={105}
          height={105}
        />

        <div className="space-y-8 md:space-y-0 md:space-x-3 md:flex flex-row items-center ">
          <div className=" text-bright space-x-3">
            <a
              href="#collections"
              aria-label="collections"
              className=" text-bright hover:text-white"
            >
              Collections
            </a>
            <a
              href="#about"
              aria-label="about"
              className=" text-bright hover:text-white"
            >
              A propos
            </a>
            <a
              href="#contact"
              aria-label="contact"
              className=" text-bright hover:text-white"
            >
              Contact
            </a>
          </div>
          <a
            aria-label="boutique"
            href="https://instagram.com/flairshopbesancon"
            className="bg-bright px-20 py-5 text-dark  "
          >
            Boutique
          </a>{" "}
        </div>
      </div>
      <div className="flex flex-col items-center md:items-end space-y-6">
        <div className="flex flex-row space-x-2 md:hidden">
          <a
            href="https://fr-fr.facebook.com/flairshopbesacon/"
            aria-label="facebook"
          >
            <AiFillFacebook
              size={25}
              className="text-bright hover:text-white"
            />
          </a>
          <a
            href="https://www.instagram.com/flairshopbesancon"
            aria-label="instagram"
          >
            <AiOutlineInstagram
              size={25}
              className="text-bright hover:text-white"
            />
          </a>
        </div>
      </div>
      <p className="text-bright text-center mt-8 md:hidden">
        Copyright © 2022 Flair. Tous droits réservés.
      </p>
      <div className="container mx-auto p-3 hidden justify-between md:flex">
        <p className=" text-bright text-left">
          Copyright © 2022 Flair. Tous droits réservés.
        </p>
        <div className="flex flex-row space-x-2 ">
          <a
            href="https://www.facebook.com/flairshopbesacon"
            aria-label="facebook"
          >
            <AiFillFacebook
              size={25}
              className="text-bright hover:text-white"
            />
          </a>
          <a
            href="https://www.instagram.com/flairshopbesancon"
            aria-label="instagram"
          >
            <AiOutlineInstagram
              size={25}
              className="text-bright hover:text-white"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
