import Image from "next/image";
import Marquee from "react-fast-marquee";
import logo from "../assets/logo.png";

function About() {
  //  , , , , , , , , , Scotch and So
  const marques = [
    {
      id: 0,
      label: "Carhartt WIP",
      img: "/carhartt.svg",
    },
    {
      id: 1,
      label: "Olow",
      img: "/olow.svg",
    },
    {
      id: 2,
      label: "Karhu",
      img: "/karhu.svg",
    },
    {
      id: 3,
      label: "Arte",
      img: "/arte.svg",
    },
    {
      id: 4,
      label: "Edmmond Studio",
      img: "/edmmond.svg",
    },
    {
      id: 5,
      label: "Autry",
      img: "/autry.svg",
    },

    {
      id: 6,
      label: "Edwin",
      img: "/edwin.webp",
    },
    {
      id: 7,
      label: "Bask in the sun",
      img: "/baskinthesun.webp",
    },
  ];
  return (
    <section id="about" className="bg-white">
      <div className="container mx-auto px-3 pb-16 flex flex-col items-center">
        <div className="flex flex-col space-y-3 items-center md:flex-row-reverse md:justify-between ">
          <Image alt="logo" src={logo} />
          <div className="flex flex-col space-y-6 text-center md:text-left md:w-2/3">
            <h2 className="text-4xl text-dark">Qui sommes nous</h2>
            <p className="text-medium">
              Situé quelques mètres plus haut que son aîné, Bonnie & Clyde, dans
              la Grande Rue à Besançon, Flair est le shop masculin éclectique de
              la capitale comtoise. Dans cette deuxième boutique, Christophe
              Denniel a souhaité donner une place plus importante à la
              découverte de nouveaux produits. Londres, Paris, Berlin, Flair
              sillonne l’Europe à la recherche de marques novatrices tantôt
              casual, street et chic.
            </p>
          </div>
        </div>
        <div className=" max-h-7 mx-10 mr-10 mt-8">
          <Marquee speed={50}>
            {marques.map(({ id, label, img }) => (
              <div key={label} className="mx-14">
                <Image
                  layout="intrinsic"
                  height={35}
                  width="100%"
                  src={img}
                  alt={label}
                  key={id}
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}

export default About;
