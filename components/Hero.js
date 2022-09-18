import Image from "next/image";

function Hero() {
  return (
    <div
      className="h-screen bg-dark pt-28 flex items-center bg-right relative"
      // style={{ backgroundImage: "url('/hero-bg.jpg')" }}
    >
      <Image
        src="/hero-bg.webp"
        layout="fill"
        objectFit="cover"
        objectPosition="top left"
        alt="clothes"
        className="opacity-40"
      />
      <div className="container mx-auto px-3 flex flex-col items-center text-center space-y-8  text-bright relative top-0">
        <h1 className="text-4xl md:text-7xl">FLAIR | BESANCON</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </p>
        <a
          href="https://www.instagram.com/flairshopbesancon"
          aria-label="boutique"
          className="border-2 border-bright px-20 py-5"
        >
          Boutique
        </a>
      </div>
    </div>
  );
}

export default Hero;
