import Image from "next/image";
import outfit1 from "../assets/outfit1.jpg";
import outfit2 from "../assets/outfit2.jpg";

function Featured() {
  return (
    <section id="collections" className="bg-white">
      <div className="container mx-auto px-3 space-y-10 justify-items-start py-16 flex flex-col items-center md:flex-row-reverse md:h-3/5 md:justify-end">
        <div className=" max-w-xs text-center md:text-left md:ml-6">
          <h2 className="text-4xl text-dark">Des looks pour tous les jours</h2>
          <a
            href="https://www.instagram.com/flairshopbesancon"
            alt="boutique"
            className="text-lg text-medium hidden md:block"
          >
            Voir plus
          </a>
        </div>
        <div className="grid sm:grid-cols-2 gap-3  h-4/5 md:w-1/2 ">
          <Image src={outfit1} alt="outfit 1" />
          <Image src={outfit2} alt="outfit 2" />
        </div>
        <a
          href="https://www.instagram.com/flairshopbesancon"
          alt="boutique"
          className="text-lg text-medium md:hidden"
        >
          Voir plus
        </a>
      </div>
    </section>
  );
}

export default Featured;
